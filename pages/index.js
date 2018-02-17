import { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import Head from 'next/head'
import cx from 'classnames'

import makeStore from '@components/store'
import Layout from '@components/layout'
import MenuBar from '@components/menuBar'
import { appActions } from '@components/app/reducer'

import register from './sw.js'
import s from './index.scss'

register(global)

export let Home = () => (
  <Layout pageTitle='Home'>
    <Head>
      <title>Home | Tavern</title>
    </Head>
    <h1 className={cx(s.pageTitle)}>Home</h1>
  </Layout>
)

Home = withRedux(makeStore, store => store)(Home)

export default Home
