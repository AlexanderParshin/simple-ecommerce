import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Root from './root'

import './assets/scss/main.scss'

const target = document.getElementById('root')

const render = (Component) => {
  ;(module.hot ? ReactDOM.render : ReactDOM.hydrate)(
    <AppContainer>
      <Component />
    </AppContainer>,
    target
  )
}

render(Root)

if (module.hot) {
  module.hot.accept('./root', () => {
    const newApp = require('./root').default
    render(newApp)
  })
}
