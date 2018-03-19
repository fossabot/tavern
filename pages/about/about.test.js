/* global describe, it, expect */
import React from 'react'
import { mount } from 'enzyme'

import About from './'

describe('Rendering should work', () => {
  it('About page title is "About"', async () => {
    const about = await mount(<About />)
    const toolBarTitleSel = '#toolbarTitle'

    expect(about.find(toolBarTitleSel).text()).toEqual('About')
  })
})
