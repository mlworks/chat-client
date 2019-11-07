import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding-top: 48px;
    color: #3c3c3c;
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

  .app-contents {
    max-width: 640px;
    margin: 0 auto;
  }
`

export default GlobalStyle
