---
to: pages/<%= name %>/index.js
---
<%
  const classify = x => h.inflection.classify(h.inflection.titleize(x)).replace(/\-/g,   '')
  const humanize = x => h.inflection.humanize(x).replace(/\-/g, ' ')
%>import { Component } from 'react'
import { createPortal } from 'react-dom'
import withRedux from 'next-redux-wrapper'
import Head from 'next/head'
import cx from 'classnames'

import makeStore from '@reducers/store'
import Layout from '@components/layout'
import { appActions } from '@reducers/app'

import s from './index.scss'

export class <%= classify(name) %> extends Component {
  constructor ({ setPageTitle }) {
    super()
    this.setPageTitle = setPageTitle
  }

  componentDidMount () {
    this.setPageTitle('<%= humanize(name) %>')
  }

  componentWillUnmount () {
    this.setPageTitle('')
  }

  render () {
    return (
      <Layout>
        <Head>
          <title><%= humanize(name) %> | Tavern</title>
        </Head>
        <h1 className={cx(s.pageTitle)}><%= humanize(name) %></h1>
      </Layout>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  setPageTitle: (title) => dispatch(appActions.setPageTitle(title))
})

<%= classify(name) %> = withRedux(makeStore, store => store, mapDispatchToProps)(<%= classify(name) %>)

export default <%= classify(name) %>
