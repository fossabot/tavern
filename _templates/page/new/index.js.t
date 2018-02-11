---
to: pages/<%= name %>/index.js
---
<%
const classify = () => h.inflection.classify(h.inflection.titleize(name)).replace(/\-/g, '')
const humanize = () => h.inflection.humanize(name).replace(/\-/g, ' ')
%>
import withRedux from 'next-redux-wrapper'
import Head from 'next/head'
import cx from 'classnames'

import Layout from '@components/layout'
import makeStore from '@components/store'

import s from './index.scss'

let <%= classify(name) %> = () => (
  <Layout>
    <Head>
      <title><%= humanize(name) %> | Tavern</title>
    </Head>
    <h1 className={cx(s.pageTitle)}><%= humanize(name) %></h1>
  </Layout>
)

<%= classify(name) %> = withRedux(makeStore, store => store)(<%= classify(name) %>)

export default <%= classify(name) %>
