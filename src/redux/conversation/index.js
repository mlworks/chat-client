import {createReducer} from 'redux-act'

// Actions
import {messageAdded} from './actions'

const initialState = {
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
    [messageAdded]: (state, payload) => ({
      ...state,
      messages: [...state.messages, payload],
    }),
  },
  initialState
)
export default conversation
