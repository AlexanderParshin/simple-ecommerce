import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import products from './products'
import basketProducts from './basketProducts'

const createRootReducer = (history) =>
  combineReducers({
    products,
    basketProducts,
    router: connectRouter(history)
  })

export default createRootReducer