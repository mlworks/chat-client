import {createReducer} from 'redux-act'
import isEqual from 'lodash/isEqual'
import unionWith from 'lodash/unionWith'

// Actions
import {conversationUpdated, messageAdded} from './actions'

const messageReducer = (messages, incomingMessages) =>
  unionWith(messages, incomingMessages, isEqual).sort((a, b) =>
    a.timestamp > b.timestamp ? 1 : -1
  )

const initialState = {
  messages: [],
  users: [
    {
      id: 'user-1',
      name: 'Michael Scott',
    },
    {
      id: 'user-2',
      name: 'Dwight Schrute',
    },
  ],
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
  },
  initialState
)
export default conversation
