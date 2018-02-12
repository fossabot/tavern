import { Component } from 'react'
import { createPortal } from 'react-dom'
import withRedux from 'next-redux-wrapper'
import Head from 'next/head'
import cx from 'classnames'

import makeStore from '@components/store'
import Layout from '@components/layout'
import { appActions } from '@components/app/reducer'

import s from './index.scss'

export class About extends Component {
  constructor ({ setPageTitle }) {
    super()
    this.setPageTitle = setPageTitle
  }

  componentDidMount () {
    this.setPageTitle('About')
  }

  componentWillUnmount () {
    this.setPageTitle('')
  }

  render () {
    return (
      <Layout>
        <Head>
          <title>About | Tavern</title>
        </Head>
        <h1 className={cx(s.pageTitle)}>About</h1>
      </Layout>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  setPageTitle: (title) => dispatch(appActions.setPageTitle(title))
})

About = withRedux(makeStore, store => store, mapDispatchToProps)(About)

export default About
