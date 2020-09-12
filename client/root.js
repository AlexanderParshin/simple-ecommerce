import React from 'react'
import { Provider } from 'react-redux'
import store from './redux'
import Users from './my-users'

const RootComponent = () => {
  return <Provider store={store}>
    <Users />
  </Provider>
}

export default RootComponent
