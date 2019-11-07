import {createReducer} from 'redux-act'

const initialState = {
  messages: [],
}

const conversation = createReducer({}, initialState)
export default conversation
