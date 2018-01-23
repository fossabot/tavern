import React from 'react'
import { render } from 'react-dom'
import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware
} from 'redux'
import createHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { routerReducer, routerMiddleware } from 'react-router-redux'

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'

import rootReducer from '@app/reducers'
import App from './app'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

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

const Main = () => (
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <Router history={history}>
        <App history={history} />
      </Router>
    </Provider>
  </MuiThemeProvider>
)
render(<Main />, document.getElementById('root'))
registerServiceWorker()
