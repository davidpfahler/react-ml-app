import React, {useRef, useEffect, useState} from 'react';
import Predictions from './Predictions';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {InfoSnackbar, LoadingSnackbar } from './Snackbars'
import DropImageCard from './DropImageCard'
import { fetchImage, makeSession, loadModel, runModel } from './utils'

const session = makeSession();

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
  }));
  

export default function Classifier() {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => { loadModel(session, setLoaded) }, []); // runs once

    const [file, setFile] = useState(null)    
    const canvas = useRef(null)
    const [data, setData] = useState(null)
    useEffect(() => {
        if (file) fetchImage(file, canvas, setData);
    }, [file])

    const [outputMap, setOutputMap] = useState(null);

    useEffect(() => {
        if (!loaded || !data) return;
        runModel(session, data, setOutputMap);
    }, [loaded, data]); // runs when loaded or data changes    
    const outputData = outputMap && outputMap.values().next().value.data;
    
    const classes = useStyles();
    return <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item>
                <DropImageCard setFile={setFile} canvasRef={canvas} fileLoaded={!!file} />
                { !loaded && <LoadingSnackbar message="Loading model..." /> }
                { loaded && data && !outputMap && <LoadingSnackbar message="Running model..." /> }
                { !file && <InfoSnackbar message="Add or take a picture..." /> }
                { !!file && !data && <LoadingSnackbar message="Loading image..." /> }
            </Grid>
            <Grid item>
                <Predictions output={outputData} />
            </Grid>
        </Grid>
    </div>
}