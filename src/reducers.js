import { routerReducer } from 'preact-router-redux'

import { CharactersStore } from './character/store'
import { AppStore } from './app/store'

export * from './app/store'
export * from './character/store'

const initialRootState = {}

export const rootReducer = {
  app: AppStore,
  characters: CharactersStore,
  routing: routerReducer
}

export default rootReducer
