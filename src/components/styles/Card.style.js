import styled from 'styled-components'

export const ContainerFlex = styled.div`
  display: flex;
  flex-direction: row;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  max-width: 250px;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  overflow: hidden;
  // margin: 10px; fix it later
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
`

export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0;
`

export const Description = styled.p`
  display: ${(props) => (props.isVisible === true ? 'block' : 'none')};
  left: 0;
  top: 0;
  transform: translate(${(props) => props.x}px, ${(props) => props.y}px);
  background-color: white;
  padding: 8px;
  position: absolute;
  z-index: 1;
  font-size: 12px;
  width: 300px;
  pointer-events: none;
  text-align: left;
`

export const Image = styled.img`
  width: 100%;
`
