import { h } from 'preact'
import { Link } from 'preact-router/match'

export const App = ({children}) => <div>
  <nav>
    <Link activeClassName="active" href="/">Home</Link>
    <Link activeClassName="active" href="/character">Character</Link>
    <Link activeClassName="active" href="/character/add">Add</Link>
  </nav>
  {children}
</div>

export default App
