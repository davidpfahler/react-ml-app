import React, {useRef, useEffect, useState} from 'react';
import './App.css';
import loadImage from 'blueimp-load-image';
import beagle from './beagle.jpg'

const imgConfig = {
  maxWidth: 229,
  maxHeight: 229,
  cover: true,
  crop: true,
  canvas: true,
  crossOrigin: 'Anonymous',
}

const getImage = url => new Promise((res, rej) => {
  loadImage(url, img => res(img), imgConfig)
})

const wait = ms => new Promise((res, rej) => {
  global.setTimeout(() => res(), ms)
})

const fetchImage = async (url, canvas, setData) => {
  const img = await getImage(url)
  if (img.type === "error") throw new Error("could not load image")
  const ctx = canvas.getContext('2d')
  ctx.drawImage(img, 0, 0)
  await wait(0)
  const data = ctx.getImageData(0, 0, canvas.width, canvas.height)
  setData(new Float32Array(data.data))
}

function Predictor({url}) {
  const canvas = useRef(null)
  const [data, setData] = useState(new Float32Array())
  useEffect(() => {
    if (canvas.current == null) return;
    fetchImage(url, canvas.current, setData)
  }, [url])
  return (
    // display the image in a canvas
    <canvas ref={canvas}  width={229} height={229} />
    // display predictions
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Predictor url={beagle} />
      </header>
    </div>
  );
}

export default App;
