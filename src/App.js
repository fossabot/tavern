import React from 'nervjs'
import ActionHome from 'material-ui/svg-icons/action/home'
// import c from 'classnames'
import s from './App.scss'

const App = () => (
  <div className={s.App}>
    <header className={s.header}>
      <ActionHome />
      <h1 className={s.title}>Welcome to React</h1>
    </header>
    <p className={s.intro}>
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
)

export default App
