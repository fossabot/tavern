import { h, render } from 'preact'
import { Provider, connect } from 'preact-redux'
import { Router } from 'preact-router'
import { syncHistoryWithStore } from 'preact-router-redux'
import createBrowserHistory from 'history/createBrowserHistory'

import { MOUNT_POINT, Routes } from './routes'
import configureStore from './store'
import './index.scss'

const initialRootState = {}

const store = configureStore()

const browserHistory = createBrowserHistory()
export const history = syncHistoryWithStore(browserHistory, store)

const Main = () => (
  <Provider store={store}>
    <Routes history={history} />
  </Provider>
)

render(<Main />, document.body, document.querySelector(`#${MOUNT_POINT}`))
