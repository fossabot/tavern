import React from 'react'
import { mount } from 'enzyme'

import App from '../pages'
import About from '../pages/about'

describe('Rendering should work', () => {
  it('App page title is "Home"', async () => {
    const app = await mount(<App />)

    expect(app.find('h2').text()).toEqual('Home')
  })

  it('About page title is "About"', async () => {
    const app = await mount(<About />)

    expect(app.find('h2').text()).toEqual('About')
  })
})
