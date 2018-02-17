import React from 'react'
import { mount } from 'enzyme'

import App from '../pages'

describe('With Enzyme', () => {
  it('App shows "Home"', async () => {
    const app = await mount(<App />)

    expect(app.find('h2').text()).toEqual('Home')
  })
})
