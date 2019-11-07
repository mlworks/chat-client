import styled from 'styled-components'

const UserItemWrapperSC = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  min-height: 84px;

  & + & {
    border-top: 1px solid #e4e4e4;
  }

  &:nth-child(odd) {
    background: #f7f7f7;
  }

  .c-user-item__avatar {
    flex: 0 0 64px;
    margin-right: 16px;
  }

  .c-user-item__name {
    flex: 1 1 auto;
  }
`

export default UserItemWrapperSC
