import {createAction} from 'redux-act'
import uuidv1 from 'uuid/v1'
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
        content: 'Ok people listen up!',
        timestamp: 1573114909000,
      },
      {
        id: 'message-2',
        userId: 'user-1',
        content: 'I have an announcement to make!',
        timestamp: 1573114909001,
      },
      {
        id: 'message-3',
        userId: 'user-2',
        content: 'Do you have an announcement?',
        timestamp: 1573118509000,
      },
      {
        id: 'message-4',
        userId: 'user-1',
        content: 'I was making it...',
        timestamp: 1573118599000,
      },
    ],
    title: 'Dunder Mifflin',
  }

  dispatch(conversationUpdated(mockResponse))
  dispatch(loadUsersInfo())
}

export const sendMessage = value => (dispatch, getState) => {
  const state = getState()
  const message = {
    id: uuidv1(),
    userId: state.conversation.currentUser,
    content: value,
    timestamp: new Date().getTime(),
  }
  dispatch(messageAdded(message))
}

export const debugMessage = () => (dispatch, getState) => {
  const state = getState()
  const message = {
    id: uuidv1(),
    userId: 'user-1',
    content: 'test message',
    timestamp: new Date().getTime(),
  }
  dispatch(messageAdded(message))
}

export const loadUsersInfo = () => dispatch => {
  // Make server call to get latest and merge with store
  const mockData = [
    {
      id: 'user-1',
      name: 'Dwight Schrute',
      avatarUrl: '/avatar-1.jpg',
    },
    {
      id: 'user-2',
      name: 'Michael Scott',
      avatarUrl: '/avatar-2.jpg',
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
