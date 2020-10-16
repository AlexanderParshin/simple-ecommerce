import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import createRootReducer from './reducers'
import createHistory from './history'

export const history = createHistory()

const middleware = [thunk]

const initialState = {}

const composeFunc = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose
const composeEnchanters = composeFunc(applyMiddleware(...middleware) )
const store = createStore(createRootReducer(history), initialState, composeEnchanters)

export default store