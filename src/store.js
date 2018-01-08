import { createStore, combineReducers } from 'redux'
import rootReducer from './reducers'

export * from './app/store'
export * from './character/store'

const initialRootState = {}

export const configureStore = () => {
  const store = createStore(
    combineReducers(rootReducer),
    initialRootState,
    typeof devToolsExtension === 'function'
      ? devToolsExtension()
      : undefined
  )

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(rootReducer)
    })
  }

  return store
}

export default configureStore
