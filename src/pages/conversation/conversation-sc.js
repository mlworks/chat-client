import styled from 'styled-components'

const ConversationSC = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: calc(100vh - 48px);

  .t-conversation__messages {
    flex: 0 1 auto;
    padding: 16px; 0;
    overflow-y: auto;
  }

  .t-conversation__compose {
    flex: 0 0 auto;
    padding: 16px;
    background: #ececec;

    .c-input-submit__label {
      display: none;
    }
  }

`

export default ConversationSC
