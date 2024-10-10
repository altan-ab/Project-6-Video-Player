import { useState } from 'react'
import Menu from './Menu'
import Video from './Video'

function App() {
  const [selectedVideo, setSelectedVideo] = useState('geyik') // Varsayılan video

  const handleVideoChange = (newVideo) => {
    setSelectedVideo(newVideo)
  }

  return (
    <div className="app">
      <h1>Project 6: Video Player</h1>
      <Menu onVideoChange={handleVideoChange} selectedVideo={selectedVideo} />
      <Video selectedVideo={selectedVideo} />
    </div>
  )
}

export default App
