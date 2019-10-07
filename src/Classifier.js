import React, {useRef, useEffect, useState, Fragment} from 'react';
import Predictions from './components/Predictions';
import Typography from '@material-ui/core/Typography';
import {InfoSnackbar, LoadingSnackbar } from './components/Snackbars'
import DropImageCard from './components/DropImageCard'
import { fetchImage, makeSession, loadModel, runModel } from './utils'

const session = makeSession();

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
    }, [loaded, data]); // runs when loaded or input changes    
    const outputData = outputMap && outputMap.values().next().value.data;
    
    return <Fragment>
        <Typography gutterBottom>Tab on the image icon to take a photo of a dog and drag and drop an image file of a dog on the image icon to classify the dog's breed.</Typography>
        <DropImageCard setFile={setFile} canvasRef={canvas} fileLoaded={!!file} />
        { !loaded && <LoadingSnackbar message="Loading model..." /> }
        { loaded && data && !outputMap && <LoadingSnackbar message="Running model..." /> }
        { !file && <InfoSnackbar message="Waiting for image..." /> }
        { !!file && !data && <LoadingSnackbar message="Loading image..." /> }
        <Predictions output={outputData} />
    </Fragment>
}