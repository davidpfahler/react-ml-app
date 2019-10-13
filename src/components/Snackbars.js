import React from 'react';
import clsx from 'clsx';
import InfoIcon from '@material-ui/icons/Info';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    box: {
        width: 299,
        padding: 0,
        margin: 0,
    },
    content: {
        boxSizing: 'border-box',
    },
    info: {
        backgroundColor: theme.palette.primary.main,
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
}));

export function InfoSnackbar({message}) {
    const classes = useStyles();
    return <Box className={classes.box}>
        <SnackbarContent className={clsx(classes.info, classes.content)} message={
            <span className={classes.message}>
                <InfoIcon className={clsx(classes.icon, classes.iconVariant)} />
                {message}
            </span>
        } />
    </Box>;
}

export function LoadingSnackbar({message}) {
    const classes = useStyles();
    return <Box className={classes.box}>
        <SnackbarContent className={classes.content} message={
            <span className={classes.message}>
                <CircularProgress size={20} className={classes.iconVariant} />
                {message}
            </span>
        } />
    </Box>;
}