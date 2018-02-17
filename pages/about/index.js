import { Component } from 'react'
import { createPortal } from 'react-dom'
import withRedux from 'next-redux-wrapper'
import Head from 'next/head'
import cx from 'classnames'

import makeStore from '@components/store'
import Layout from '@components/layout'
import MenuBar from '@components/menuBar'
import { appActions } from '@components/app/reducer'

import s from './index.scss'

export let About = () => (
  <Layout pageTitle='About'>
    <Head>
      <title>About | Tavern</title>
    </Head>
    <h1 className={cx(s.pageTitle)}>About</h1>
  </Layout>
)

About = withRedux(makeStore, store => store)(About)

export default About
