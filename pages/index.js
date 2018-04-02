import Head from 'next/head'
import withRedux from 'next-redux-wrapper'
import cx from 'classnames'

import Layout from '@components/layout'
import makeStore from '@reducers/store'

import register from '@components/register-sw.js'
import s from './index.scss'

register(global)

export const Home = () => (
  <Layout pageTitle='Home'>
    <Head>
      <title>Home | Tavern</title>
    </Head>
    <h1 className={cx(s.pageTitle)}>Home</h1>
  </Layout>
)

export default withRedux(makeStore, store => store)(Home)
