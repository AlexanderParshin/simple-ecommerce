import { createStore, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import createRootReducer from './reducers'
import createHistory from './history'

export const history = createHistory()

const initialState = {}

const composeFunc = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose
const composeEnchanters = composeFunc()
const store = createStore(createRootReducer(history), initialState, composeEnchanters)

export default store