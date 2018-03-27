---
to: pages/<%= name %>/<%= name %>.test.js
---
<%
  const classify = x => h.inflection.classify(h.inflection.titleize(x)).replace(/\-/g,   '')
  const humanize = x => h.inflection.humanize(x).replace(/\-/g, ' ')
%>/* global describe, it, expect */
import React from 'react'
import { mount } from 'enzyme'

import <%= classify(name) %> from './'

describe('Rendering should work', () => {
  it('<%= classify(name) %> page title is "<%= humanize(name) %>"', async () => {
    const about = await mount(<<%= classify(name) %> />)
    const toolBarTitleSel = '#toolbarTitle'

    expect(about.find(toolBarTitleSel).text()).toEqual('<%= humanize(name) %>')
  })
})
