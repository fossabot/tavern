import Layout from '@components/layout'
import register from '@components/register-sw.js'
import makeStore from '@reducers/store'
import cx from 'classnames'
import withRedux from 'next-redux-wrapper'
import Head from 'next/head'
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
