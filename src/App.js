import { useState } from 'react'
import { GlobalStyles } from './components/GlobalStyles.style'
import { Card } from './components/' // can just keep building Card, Header, thanks to index.js
// instead of having to write new line with Header from compoments/heaer stuffs
import VideoPlayer from './components/VideoPlayer'
import movieData from './assets/movieData.json'

function App() {
  const [currentMovieSrc, setCurrentMovieSrc] = useState(movieData[0].video)

  const onVideoChange = (videoSrc) => {
    setCurrentMovieSrc(videoSrc)
    console.log(currentMovieSrc)
  }

  return (
    <div className="App">
      <GlobalStyles />
      <VideoPlayer videoSrc={currentMovieSrc} />
      <Card onVideoChange={onVideoChange} />
    </div>
  )
}

export default App
