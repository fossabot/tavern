import React, { render } from 'nervjs'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

const Render = () => <MuiThemeProvider>
  <App />
</MuiThemeProvider>

render(<Render />, document.getElementById('root'))
registerServiceWorker()
