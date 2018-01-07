import { h } from 'preact'
import { Router, Route } from 'preact-router'
import App from './app'
import { Home } from './home'
import { Character, AddCharacter } from './character'

export const MOUNT_POINT = 'app-root'

export const Routes = ({ history }) => <main id={MOUNT_POINT}>
  <App>
    <Router history={history}>
      <Home path="/" />
      <Character path="/character" />
      <AddCharacter path="/character/add" />
    </Router>
  </App>
</main>

export default Routes
