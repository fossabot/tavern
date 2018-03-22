import PropTypes from 'prop-types'
import Router from 'next/router'
import { Component } from 'react'
import { connect } from 'react-redux'

import { LinearProgress } from 'material-ui/Progress'

import { appActions } from '@reducers/app'
import s from './progressBar.scss'

export class ProgressBar extends Component {
  componentDidMount () {
    const { toggleNavigating } = this.props
    toggleNavigating(null, false)

    Router.onRouteChangeStart = url => toggleNavigating(url, true)
    Router.onRouteChangeComplete = () => toggleNavigating(null, false)
    Router.onRouteChangeError = () => toggleNavigating(null, false)
  }

  render () {
    const { isNavigating } = this.props

    return (
      isNavigating
        ? <div className={s.progressBar}>
          <LinearProgress />
        </div>
        : null
    )
  }
}

ProgressBar.propTypes = {
  toggleNavigating: PropTypes.func.isRequired,
  isNavigating: PropTypes.bool
}

ProgressBar.defaultProps = {
  isNavigating: false
}

const mapStateToProps = ({
  app: { isNavigating }
}) => ({ isNavigating })

const mapDispatchToProps = dispatch => ({
  toggleNavigating: (url, navigating) => dispatch(appActions.toggleNavigating(url, navigating))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProgressBar)
