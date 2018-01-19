import React, { Component } from 'react'
import ActionHome from 'material-ui/svg-icons/action/home'
// import c from 'classnames'
import s from './App.scss'

class App extends Component {
  render() {
    return (
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
  }
}

export default App
