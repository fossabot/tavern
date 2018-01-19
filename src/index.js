import React, { render } from 'nervjs'

import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

render(<App />, document.getElementById('root'))
registerServiceWorker()
