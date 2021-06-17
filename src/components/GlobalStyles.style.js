import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html {
  box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0 auto;
    padding: 0;
    text-align: center;
    background-color: lightgrey;
  }

`
