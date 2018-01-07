import { h, render } from 'preact'
import { Provider, connect } from 'preact-redux'
import { Router } from 'preact-router'
import createBrowserHistory from 'history/createBrowserHistory'
import { syncHistoryWithStore, routerReducer } from 'preact-router-redux'
import { createStore, combineReducers } from 'redux'

import { MOUNT_POINT, Routes } from './routes'
import { initialAppState, AppReducer } from './reducers'

const initialRootState = {
  app: initialAppState
}

const store = createStore(combineReducers({
  app: AppReducer,
  routing: routerReducer
}),
  initialRootState,
  typeof devToolsExtension === 'function'
    ? devToolsExtension()
    : undefined
)

const browserHistory = createBrowserHistory()
const history = syncHistoryWithStore(browserHistory, store)

const Main = () => (
  <Provider store={store}>
    <Routes history={history} />
  </Provider>
)

render(<Main />, document.body, document.querySelector(`#${MOUNT_POINT}`))
