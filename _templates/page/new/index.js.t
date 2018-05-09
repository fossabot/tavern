---
to: pages/<%= name %>/index.js
---
<%
  const classify = x => h.inflection.classify(h.inflection.titleize(x)).replace(/\-/g,   '')
  const humanize = x => h.inflection.humanize(x).replace(/\-/g, ' ')
%>import withRedux from 'next-redux-wrapper'
import Head from 'next/head'
import cx from 'classnames'

import makeStore from '@reducers/store'
import Layout from '@components/layout'

import s from './index.scss'

export const <%= classify(name) %> = () => (
  <Layout pageTitle='<%= humanize(name) %>'>
    <Head>
      <title><%= humanize(name) %> | Tavern</title>
    </Head>
    <h1 className={cx(s.pageTitle)}><%= humanize(name) %></h1>
  </Layout>
)

export default withRedux(makeStore, store => store)(<%= classify(name) %>)
