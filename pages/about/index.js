import Layout from '@components/layout'
import makeStore from '@reducers/store'
import cx from 'classnames'
import withRedux from 'next-redux-wrapper'
import Head from 'next/head'
import s from './index.scss'

export const About = () => (
  <Layout pageTitle='About'>
    <Head>
      <title>About | Tavern</title>
    </Head>
    <h1 className={cx(s.pageTitle)}>About</h1>
  </Layout>
)

export default withRedux(makeStore, store => store)(About)
