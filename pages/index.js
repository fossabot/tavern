import { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import Head from 'next/head'
import cx from 'classnames'

import makeStore from '@components/store'
import Layout from '@components/layout'
import { appActions } from '@components/app/reducer'

import register from './sw.js'
import s from './index.scss'

register(global)

class Home extends Component {
  constructor ({ setPageTitle }) {
    super()
    this.setPageTitle = setPageTitle
  }

  componentDidMount () {
    this.setPageTitle('Home')
  }

  componentWillUnmount () {
    this.setPageTitle('')
  }

  render () {
    return (
      <Layout>
        <Head>
          <title>Home | Tavern</title>
        </Head>
        <h1 className={cx(s.pageTitle)}>Home</h1>
      </Layout>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  setPageTitle: (title) => dispatch(appActions.setPageTitle(title))
})

Home = withRedux(makeStore, store => store, mapDispatchToProps)(Home)

export default Home
