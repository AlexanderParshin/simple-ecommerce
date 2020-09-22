import React from 'react'
import { Provider } from 'react-redux'
import store from './redux'

const Root = () => {
  return (
    <Provider store={store}>
      <div>SimpleEcommerce</div>
    </Provider>
  )
}

export default Root