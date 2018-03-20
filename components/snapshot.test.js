/* global describe, it, expect */
import React from 'react'
import renderer from 'react-test-renderer'

import App from '../pages/index.js'

describe('With Snapshot Testing', () => {
  it('App match snapshot', () => {
    const component = renderer.create(<App />)
    expect(component.toJSON()).toMatchSnapshot()
  })
})
