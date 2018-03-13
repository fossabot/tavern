import React from 'react'
import { mount } from 'enzyme'

import App from '../pages'
import About from '../pages/about'

describe('Rendering should work', () => {
  it('App page title is "Home"', async () => {
    const app = await mount(<App />)
    const toolBarTitleSel = '#toolbarTitle'

    expect(app.find(toolBarTitleSel).text()).toEqual('Home')
  })

  it('About page title is "About"', async () => {
    const app = await mount(<About />)
    const toolBarTitleSel = '#toolbarTitle'

    expect(app.find(toolBarTitleSel).text()).toEqual('About')
  })
})
