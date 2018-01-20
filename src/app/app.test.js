import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import App from './index'

it('renders Home without crashing', () => {
  const div = document.createElement('div')
  render(<App />, div)
  unmountComponentAtNode(div)
})
