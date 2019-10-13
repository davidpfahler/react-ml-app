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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import credits from './credits';
import Button from '@material-ui/core/Button';
import breeds from './classes'
import {getBreed} from './utils'

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
    table: {
        width: '100%',
    },
    footer: {
        padding: theme.spacing(2),
        marginTop: 'auto',
    },
    button: {
        margin: theme.spacing(1),
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
                    Tab on the image icon to take a photo of a dog and drag and drop an image file of a dog on the image icon to classify the dog's breed. Note that only {breeds.length} different dog breeds are supported. If your image shows a different dog bread, the prediction will be pretty meaningless.
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
                    This classifier is based on the <Link to="http://vision.stanford.edu/aditya86/ImageNetDogs/">Stanford Dogs Dataset</Link>, which contains {breeds.length} different breeds.
                    Here is a list of all of them: {breeds.map(breed => getBreed(breed)).join(', ')}. 
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
                <Typography className={classes.heading}>What happens to my data?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <Typography variant="body2">
                    No image that you take with or add to this application will be uploaded or stored on my or anyone's servers by this application / website. In fact, your images never leave your device, because all the calculations are done in you browser! Only some general networking data is processed to make this website work (like all websites). Please see my <Link to="https://davidpfahler.com/privacy-policy/">privacy policy</Link> for further details. 
                </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
                >
                <Typography className={classes.heading}>Image credits</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Container>
                        <Typography variant="body2">
                            Most images to illustrate the different dog breeds are sourced from pixabay.com, which are free for commercial use and do not require attribution.
                            Some images are sourced from Wikipedia or Wikimedia and are licensed under a variant of the Creative Commons License. The below table contains the required attribution:
                        </Typography>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell>Breed</TableCell>
                                    <TableCell>Source Link</TableCell>
                                    <TableCell>Author</TableCell>
                                    <TableCell>License</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {credits.map(row => (
                                <TableRow key={row.breed}>
                                    <TableCell><Avatar
                                        alt={`image of ${row.breed}`}
                                        src={row.img}
                                    /></TableCell>
                                    <TableCell component="th" scope="row">
                                        {row.breed}
                                    </TableCell>
                                    <TableCell><Link to={row.source}>Link to source</Link></TableCell>
                                    <TableCell>{row.author}</TableCell>
                                    <TableCell>{row.license}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </Container>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <footer className={classes.footer}>
                <Button className={classes.button} href="https://davidpfahler.com/privacy-policy/">Privacy Policy</Button>
                <Button className={classes.button} href="https://davidpfahler.com/impressum/">Impressum</Button>
            </footer>
        </Container>
  </div>;
}

export default App;
