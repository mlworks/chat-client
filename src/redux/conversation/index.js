import {createReducer} from 'redux-act'
import isEqual from 'lodash/isEqual'
import unionWith from 'lodash/unionWith'

// Actions
import {conversationUpdated, messageAdded, setUsersList} from './actions'

const messageReducer = (messages, incomingMessages) =>
  unionWith(messages, incomingMessages, isEqual).sort((a, b) =>
    a.timestamp > b.timestamp ? 1 : -1
  )

const initialState = {
  messages: [],
  users: [],
}

const conversation = createReducer(
  {
    [conversationUpdated]: (state, payload) => ({
      ...state,
      messages: messageReducer(state.messages, payload),
    }),
    [messageAdded]: (state, payload) => ({
      ...state,
      messages: messageReducer(state.messages, [payload]),
    }),
    [setUsersList]: (state, payload) => ({
      ...state,
      users: payload,
    }),
  },
  initialState
)
export default conversation
