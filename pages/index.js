import React from 'react'
import Head from 'next/head'
import cx from 'classnames'
import s from '@pages/index.scss'
import register from './sw.js'

register(global)

const Home = () => (
  <div>
    <Head>
      <title>Home | Tavern</title>
    </Head>
    <h1 className={cx(s.pageTitle)}>Home</h1>
  </div>
)

export default Home
