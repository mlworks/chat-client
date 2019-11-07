import {createAction} from 'redux-act'
import uuidv4 from 'uuid/v4'

export const conversationUpdated = createAction('conversationUpdated')
export const messageAdded = createAction('messageAdded')
export const setCurrentUser = createAction('setCurrentUser')
export const setUsersList = createAction('setUsersList')
export const userAdded = createAction('userAdded')

export const openConversation = () => dispatch => {
  // Make server call to get latest and merge with store
  const mockResponse = {
    messages: [
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
    ],
    title: 'Dunder Mifflin',
  }

  dispatch(conversationUpdated(mockResponse))
}

export const loadUsersInfo = () => dispatch => {
  // Make server call to get latest and merge with store
  const mockData = [
    {
      id: 'user-1',
      name: 'Michael Scott',
    },
    {
      id: 'user-2',
      name: 'Dwight Schrute',
    },
  ]

  dispatch(setUsersList(mockData))
}

export const createUser = name => dispatch => {
  const userData = {
    id: uuidv4(),
    name,
  }

  dispatch(setCurrentUser(userData.id))
  dispatch(userAdded(userData))
}
