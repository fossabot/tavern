import { h } from 'preact'
import { Router, Route } from 'preact-router'

import App from './app'
import Home from './home'
import NotFound from './not-found'
import { CharacterList, AddCharacter } from './character'
import './index.scss'

export const MOUNT_POINT = 'app-root' // must be the same referenced in index.scss

export const Routes = ({ history }) => <main id={MOUNT_POINT}>
  <App>
    <Router history={history}>
      <Home path="/" />
      <CharacterList path="/character" />
      <AddCharacter path="/character/add" />
      <NotFound default />
    </Router>
  </App>
</main>

export default Routes
