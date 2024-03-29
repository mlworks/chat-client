import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'
import conversation from './conversation'

export default createStore(
  combineReducers({conversation}),
  composeWithDevTools(applyMiddleware(thunk))
)
