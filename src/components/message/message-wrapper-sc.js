import styled from 'styled-components'

const MessageWrapperSC = styled.div`
  display: flex;
  flex-direction: ${props => (props.isOutgoing ? 'row-reverse' : 'row')};
  margin: 8px 0;

  .c-message__avatar {
    flex: 0 0 48px;
    min-width: 0;
  }

  .c-message__bubble {
    flex: 0 1 auto;
    padding: 16px 16px 8px;
    margin: 0 8px;
    border-radius: 8px;
    background: ${props => (props.isOutgoing ? '#a7e7ff' : '#ececec')};
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.3);
  }

  .c-message__time {
    margin-top: 12px;
    color: #909090;
    font-size: 10px;
    text-align: right;
  }
`

export default MessageWrapperSC
