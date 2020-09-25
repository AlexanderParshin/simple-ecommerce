import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch, StaticRouter } from 'react-router-dom'

import store, { history } from './redux'

import Index from './components'
import NotFound from './components/404'

const RouterSelector = (props) =>
  typeof window !== 'undefined' ? <ConnectedRouter {...props} /> : <StaticRouter {...props} />

const Root = (props) => {
  return (
    <Provider store={store}>
      <RouterSelector history={history} location={props.location} context={props.context}>
        <Switch>
          <Route exact path="/" component={() => <Index />} />
          <Route component={() => <NotFound />} />
        </Switch>
      </RouterSelector>
    </Provider>
  )
}

export default Root