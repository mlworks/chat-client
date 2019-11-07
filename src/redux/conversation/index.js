import {createReducer} from 'redux-act'

const initialState = {
  messages: [
    {
      id: 'message-1',
      content: 'hello world',
    },
    {
      id: 'message-2',
      content: 'foo bar',
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

const conversation = createReducer({}, initialState)
export default conversation
