import { useState } from 'react'
import movieData from '../assets/movieData.json'
import {
  ContainerFlex,
  Container,
  Body,
  Title,
  Description,
  Image,
} from './styles/Card.style'

export const Card = ({ onVideoChange }) => {
  const [cursorCoords, setCursorCoords] = useState({ x: 0, y: 0 })
  const [xCo, setXCo] = useState(0)
  const [yCo, setYCo] = useState(0)
  const [showDesc, setShowDesc] = useState(false)

  const _onMouseMove = (e) => {
    setCursorCoords({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })
    setXCo(e.nativeEvent.offsetX)
    setYCo(e.nativeEvent.offsetY)
    // console.log(cursorCoords)
  }

  const whenClicked = (e, videoSrc) => {
    e.preventDefault()
    onVideoChange(videoSrc)
  }

  // description follow mouse works on only first one nut displays wrong text.

  return (
    <ContainerFlex>
      {movieData.map((movie) => (
        <Container key={movie.id} onClick={(e) => whenClicked(e, movie.video)}>
          <Image
            src={movie.image}
            onMouseMove={_onMouseMove}
            onMouseEnter={() => setShowDesc(true)}
            onMouseLeave={() => setShowDesc(false)}
          />
          <Title>{movie.name}</Title>
          <Description isVisible={showDesc} x={xCo} y={yCo}>
            {movie.description}
          </Description>
        </Container>
      ))}
    </ContainerFlex>
  )
}
