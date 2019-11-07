import {createReducer} from 'redux-act'
import isEqual from 'lodash/isEqual'
import unionWith from 'lodash/unionWith'

// Actions
import {
  conversationUpdated,
  messageAdded,
  setCurrentUser,
  setUsersList,
  userAdded,
} from './actions'

const messageReducer = (messages, incomingMessages) =>
  unionWith(messages, incomingMessages, isEqual).sort((a, b) =>
    a.timestamp > b.timestamp ? 1 : -1
  )

const initialState = {
  currentUser: null,
  messages: [],
  users: [],
  title: '',
}

const conversation = createReducer(
  {
    [conversationUpdated]: (state, payload) => ({
      ...state,
      messages: messageReducer(state.messages, payload.messages),
      title: payload.title,
    }),
    [messageAdded]: (state, payload) => ({
      ...state,
      messages: messageReducer(state.messages, [payload]),
    }),
    [setUsersList]: (state, payload) => ({
      ...state,
      users: unionWith(state.users, payload, isEqual),
    }),
    [setCurrentUser]: (state, payload) => ({
      ...state,
      currentUser: payload,
    }),
    [userAdded]: (state, payload) => ({
      ...state,
      users: [...state.users, payload],
    }),
  },
  initialState
)
export default conversation
