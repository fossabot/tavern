import { createStore, combineReducers } from 'redux'

import app from './app/reducer'

export * from './app/reducer'

export const rootReducer = {
  app
}

export const makeStore = (initialState) => createStore(
  combineReducers(rootReducer),
  initialState,
  (process.browser && window.__REDUX_DEVTOOLS_EXTENSION__)
    && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default makeStore
