import styled from 'styled-components'

const DialogOverlaySC = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.6);
`

export default DialogOverlaySC
