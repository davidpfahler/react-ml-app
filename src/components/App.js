import React from 'react';
import Classifier from './Classifier'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function App() {
  return <Container>
      <Typography variant="h4" component="h1" gutterBottom>Dog Breed Classifier</Typography>
      <Typography gutterBottom>Tab on the image icon to take a photo of a dog and drag and drop an image file of a dog on the image icon to classify the dog's breed.
      This classifier is based on the <Link to="http://vision.stanford.edu/aditya86/ImageNetDogs/">Stanford Dogs Dataset</Link>.
      You can find out more about how to train a model like this yourself and run it in the browser in a privay-friendly manner here (coming soon).</Typography>
      <Classifier />
  </Container>;
}

export default App;
