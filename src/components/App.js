import React from 'react';
import Classifier from './Classifier'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    content: {
        marginTop: 20,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

function App() {
    const classes = useStyles();
    return <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Dog Breed Classifier
                </Typography>
            </Toolbar>
        </AppBar>
        <Container className={classes.content}>
            <Classifier />
        </Container>
        <Container className={classes.content}>
            <ExpansionPanel>
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography className={classes.heading}>How do I use this?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <Typography variant="body2">
                    Tab on the image icon to take a photo of a dog and drag and drop an image file of a dog on the image icon to classify the dog's breed. Note that only 120 different dog breeds are supported. If your image shows a different dog bread, the prediction will be pretty meaningless.
                </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography className={classes.heading}>What dog breeds does the classifier know?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <Typography variant="body2">
                    This classifier is based on the <Link to="http://vision.stanford.edu/aditya86/ImageNetDogs/">Stanford Dogs Dataset</Link>, which contains 120 different breeds. You can find them in the <Link to="https://github.com/davidpfahler/react-ml-app/blob/master/src/components/classes.js">classes.js file</Link>. 
                </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
                >
                <Typography className={classes.heading}>What is this good for?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <Typography variant="body2">
                    This app is not made to actually classify dog breeds. It does not cover enough breeds and important breeds are missing altogether. Rather, it is an end-to-end example that shows how to train machine learning models and run them in the browser. If you want to learn more, check out the <Link to="https://github.com/davidpfahler/react-ml-app">GitHub repository</Link>.
                </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
                >
                <Typography className={classes.heading}>What happens to my data? (Privacy Policy)</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <Typography variant="body2">
                    No image that you take with or add to this application will be uploaded or stored on my or anyone's servers by this application / website. In fact, your images never leave your device, because all the calculations are done in you browser! Only some general networking data is processed to make this website work (like all websites). Please see my <Link to="https://davidpfahler.com/privacy-policy/">privacy policy</Link> for further details. 
                </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </Container>
  </div>;
        ;
}

export default App;
