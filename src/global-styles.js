import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding-top: 48px;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  p {
    margin: 0;

    + p {
      margin-top: 16px;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }
`

export default GlobalStyle
