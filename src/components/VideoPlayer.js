import { useEffect, useRef } from 'react'

const VideoPlayer = ({ videoSrc }) => {
  const videoRef = useRef()
  const previousVideoSrc = useRef(videoSrc)

  useEffect(() => {
    if (previousVideoSrc.current === videoSrc) {
      return
    }

    if (videoRef.current) {
      videoRef.current.load()
      videoRef.current.play()
    }

    previousVideoSrc.current = videoSrc
  }, [videoSrc])

  return (
    <video controls ref={videoRef}>
      <source src={videoSrc} type="video/mp4"></source>
    </video>
  )
}

export default VideoPlayer
