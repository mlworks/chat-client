import styled from 'styled-components'

const AppHeaderSC = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  background: #2b2b2b;
  color: #fff;

  .app-contents {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 48px;
    padding: 0 16px;
  }

  .c-app-header__start,
  .c-app-header__end {
    flex: 0 0 auto;
  }

  .c-app-header__title {
    flex: 0 1 auto;
  }

  h1 {
    margin: 0;
    font-size: 18px;
  }

  a {
    color: #fff;
    text-decoration: none;

    &:visited {
      color: inherit;
    }
  }
`

export default AppHeaderSC
