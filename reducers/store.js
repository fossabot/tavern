import { combineReducers, createStore } from 'redux'

import app from './app'
import drawer from './drawer'
import login from './login'

export const rootReducer = {
  app,
  drawer,
  login
}

export const makeStore = initialState => createStore(
  combineReducers(rootReducer),
  initialState,
  (process.browser && window.__REDUX_DEVTOOLS_EXTENSION__)
    && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default makeStore
