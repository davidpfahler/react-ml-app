import React, {useCallback} from 'react';
import DropzoneIcon from './DropzoneIcon'
import {useDropzone} from 'react-dropzone';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
    card: {
        width: 299,
        height: 299,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    canvas: {
        width: 299,
        height: 299,
        zIndex: 0,
        position: 'absolute',
    },
    input: {
        zIndex: 9999,
        position: 'absolute',
    },
});

export default function DropImageCard({setFile, canvasRef, fileLoaded}) {
    const classes = useStyles();
    const onDrop = useCallback(acceptedFiles => {
        if (acceptedFiles.length > 1) {
            return console.log('can only handle one file at a time');
        }
        if (acceptedFiles.length === 0) return;
        const file = acceptedFiles[0]
        if (!file.type.startsWith('image')) {
            return console.log('file must be an image')
        }
        setFile(file)
    }, [setFile])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return <Card {...getRootProps()} className={classes.card}>
        <canvas className={classes.canvas} ref={canvasRef} width={299} height={299} />
        <input alt="Image Dropzone" type="image" className={classes.input} {...getInputProps()} />
        <DropzoneIcon fileLoaded={fileLoaded} isDragActive={isDragActive} />
    </Card>
}