/* global describe, it, expect */
import React from 'react'
import { mount } from 'enzyme'
import App from './'

describe('Rendering should work', () => {
  it('App page title is "Home"', async () => {
    const app = await mount(<App />)
    const toolBarTitleSel = '#toolbarTitle'

    expect(app.find(toolBarTitleSel).text()).toEqual('Home')
  })
})
