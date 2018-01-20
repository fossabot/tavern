import React from 'react'
import { render } from 'react-dom'

import App from './app'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

render(<App />, document.getElementById('root'))
registerServiceWorker()
