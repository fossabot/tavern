import React, { render, unmountComponentAtNode } from 'nervjs'
import App from './App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<App />, div)
  unmountComponentAtNode(div)
})
