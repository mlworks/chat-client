import {createAction} from 'redux-act'

export const conversationUpdated = createAction('conversationUpdated')
export const messageAdded = createAction('messageAdded')

export const openConversation = () => dispatch => {
  // Make server call to get latest and merge with store
  const mockData = [
    {
      id: 'message-1',
      userId: 'user-1',
      content: 'hello world',
      timestamp: 1573114909000,
    },
    {
      id: 'message-2',
      userId: 'user-2',
      content: 'foo bar',
      timestamp: 1573118509000,
    },
  ]

  dispatch(conversationUpdated(mockData))
}
