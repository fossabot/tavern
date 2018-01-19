import React from 'nervjs'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ActionHome from 'material-ui/svg-icons/action/home'
import c from 'classnames'

import s from './App.scss'

const App = () => (
  <MuiThemeProvider>
    <div className={c(s.App)}>
      <header className={c(s.header)}>
        <ActionHome />
        <h1 className={c(s.title)}>Welcome to React</h1>
      </header>
      <p className={c(s.intro)}>
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  </MuiThemeProvider>
)

export default App
