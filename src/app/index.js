import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Home from '@app/home'

const App = () => (
  <MuiThemeProvider>
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  </MuiThemeProvider>
)

export default App
