import { appActions } from '@reducers/app'
import { LinearProgress } from 'material-ui/Progress'
import Router from 'next/router'
import PropTypes from 'prop-types'
import { Component } from 'react'
import { connect } from 'react-redux'
import s from './progressBar.scss'

export class ProgressBar extends Component {
  static defaultProps = {
    isNavigating: false
  }

  static propTypes = {
    toggleNavigating: PropTypes.func.isRequired,
    isNavigating: PropTypes.bool
  }

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

const mapStateToProps = ({
  app: { isNavigating }
}) => ({ isNavigating })

const mapDispatchToProps = dispatch => ({
  toggleNavigating: (url, navigating) => dispatch(appActions.toggleNavigating(url, navigating))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProgressBar)
