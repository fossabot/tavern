import withRedux from 'next-redux-wrapper'
import Head from 'next/head'
import cx from 'classnames'

import Layout from '@components/layout'
import makeStore from '@components/store'

import register from './sw.js'
import s from './index.scss'

register(global)

let Home = () => (
  <Layout>
    <Head>
      <title>Home | Tavern</title>
    </Head>
    <h1 className={cx(s.pageTitle)}>Home</h1>
  </Layout>
)

Home = withRedux(makeStore, store => store)(Home)

export default Home
