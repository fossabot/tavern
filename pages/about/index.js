
import withRedux from 'next-redux-wrapper'
import Head from 'next/head'
import cx from 'classnames'

import Layout from '@components/layout'
import makeStore from '@components/store'

import s from './index.scss'

let About = () => (
  <Layout>
    <Head>
      <title>About | Tavern</title>
    </Head>
    <h1 className={cx(s.pageTitle)}>About</h1>
  </Layout>
)

About = withRedux(makeStore, store => store)(About)

export default About
