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

  .message-transition-enter {
    opacity: 0;
    transform: translateY(50%);
  }
  .message-transition-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: all 200ms ease-out;
  }
  .message-transition-exit {
    opacity: 1;
  }
  .message-transition-exit-active {
    opacity: 0;
    transition: all 200ms ease-out;
  }
`

export default GlobalStyle
