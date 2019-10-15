[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/davidpfahler/react-ml-app/blob/master/train_dog_classifier_with_fastai_export_to_ONNX.ipynb)

# react-ml-app

This pet project of mine serves as an end-to-end example of how to create a privacy-first machine learning application that run in the browser. It demonstratetes how to train a model in fastai or PyTorch, export it to the ONNX interface format and run it in the browser using onnx.js inside a react app.

## Goal

Because I am a dog lover (sorry cat friends, but you can easily train your own classifier model and build an app for cat breeds!), my goal is to create a simple, yet functional and realistic react app that can classify a dog's breed using an image of dog. The app should be user friendly, so I could actually use it when I am interested in what breed a certain dog is that I encountered.

## Demo

## The model

I used the [Stanford Dogs Dataset](http://vision.stanford.edu/aditya86/ImageNetDogs/), which contains 137 different breeds of dogs with about 150 images per breed.

The training process is described in detail in [this jupyter notebook](train_dog_classifier_with_fastai_to_ONNX.ipynb) (coming soon). Note: You can [run this notebook for free in Google Colabatory](https://colab.research.google.com/github/davidpfahler/react-ml-app/blob/master/train_dog_classifier_with_fastai_to_ONNX.ipynb) if you have a Google account.

I am using a resnet34 architecture, but I am planning to investigate more efficient architectures in the future and will update this project accordingly if I find them to be useful.

## The Frontend

The fairly simple react app was set up using [create-react-app](https://github.com/facebook/create-react-app), see [cra-instructions.md](cra-instructions.md) for the generated README file. On top of react, I am using [Material-UI](https://material-ui.com), a very powerful react imlementation of the [material design language](https://material.io/).

To load and run the model, I am using [onnx.js](https://github.com/microsoft/onnxjs) by Microsoft, which can load ONNX formatted machine learning models in node or the browser.

## The Backend

Therer is no backend! Because the model runs in the browser, you don't need a server that runs the model and you preserve your users privacy. You can have your 🎂 and eat it too!

## The details

If you want to learn more about the details of each aspect of this project, I will publish a detailed article about it on davidpfahler.com soon, which will include tricks and tweaks used during training and to export the model, how to get onnx.js to behave and more.

## License and copyright

For the license of the Stanford Dogs Dataset, please visit [their website](http://vision.stanford.edu/aditya86/ImageNetDogs/). The images used to illustrate the dog breeds included in this repository are either sourced from pixabay.com and are free to use for commercial use without attribution or from Wikipedia and licensed under a version of the Creative Commense License. The required attribution can be found in `[public/images/attribution.md](public/images/attribution.md)`.