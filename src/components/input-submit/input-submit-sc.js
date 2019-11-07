import styled from 'styled-components'

const InputSubmitSC = styled.form`
  .c-input-submit__label {
    display: inline-block;
    margin-bottom: 8px;
  }

  .c-input-submit__input {
    flex: 1 1 auto;
    min-height: 40px;
    padding: 8px 16px;
    border-radius: 20px;
    border: 1px solid #ccc;
  }

  .c-input-submit__button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    padding: 8px 16px;
    margin-left: 8px;
    border: 0;
    border-radius: 20px;
    min-height: 40px;

    background: #36da36;
    cursor: pointer;
    transition: 0.2s ease-out all;
    -webkit-appearance: none;

    &:active:not([disabled]),
    &:hover:not([disabled]) {
      background: #8dde8d;
    }

    &[disabled] {
      cursor: not-allowed;
    }
  }

  .c-input-submit__controls {
    display: flex;
  }
`

export default InputSubmitSC
