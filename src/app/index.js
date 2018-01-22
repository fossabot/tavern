import React from 'react'
import { Route, Router } from 'react-router-dom'

import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware
} from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { routerReducer, routerMiddleware } from 'react-router-redux'

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'

import Home from '@app/home'
import rootReducer from '@app/reducers'

const history = createHistory()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  combineReducers({
    ...rootReducer,
    routing: routerReducer
  }),
  composeEnhancers(
    applyMiddleware(routerMiddleware(history))
  )
)

const theme = createMuiTheme()

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <Router history={history}>
        <Route exact path="/" component={Home} />
      </Router>
    </Provider>
  </MuiThemeProvider>
)

export default App
