import { h, render } from 'preact'
import { APP_ROOT, App } from './app'

render(<App />, document.body, document.querySelector(`#${APP_ROOT}`))
