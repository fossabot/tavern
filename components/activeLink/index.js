import PropTypes from 'prop-types'
import Router, { withRouter } from 'next/router'
import { connect } from 'react-redux'

import { appActions } from '@reducers/app'
import s from './activeLink.scss'

export const ActiveLink = ({
  href,
  router,
  isNavigating = false,
  navigatingTo = '',
  toggleNavigating,
  onNavigate = () => {},
  delay = 0,
  render: LinkContent = null
}) => {
  Router.onRouteChangeStart = url => {
    toggleNavigating(url, true)
  }
  Router.onRouteChangeComplete = async url => {
    toggleNavigating(null, false)
    await new Promise(r => setTimeout(r, 100))
    await onNavigate(url, true)
  }
  Router.onRouteChangeError = async url => {
    toggleNavigating(null, false)
    await new Promise(r => setTimeout(r, 100))
    await onNavigate(url, false)
  }

  const isActive = router.pathname === href
  if (!isActive) {
    router.prefetch(href)
  }
  return (
    <a
      href={href}
      className={s.link}
      onClick={async e => {
        e.preventDefault()
        if (!isActive && !isNavigating) {
          await new Promise(r => setTimeout(r, delay))
          router.push(href)
        }
      }}
    >
      <LinkContent isActive={isActive} isLoading={isNavigating && navigatingTo === href} />
    </a>
  )
}

ActiveLink.propTypes = {
  href: PropTypes.string.isRequired,
  router: PropTypes.any.isRequired,
  isNavigating: PropTypes.bool,
  navigatingTo: PropTypes.string,
  toggleNavigating: PropTypes.func.isRequired,
  onNavigate: PropTypes.func,
  delay: PropTypes.number,
  render: PropTypes.any
}

ActiveLink.defaultProps = {
  delay: 0,
  isNavigating: false,
  navigatingTo: '',
  onNavigate: () => {},
  render: null
}

const mapStateToProps = ({ app: {
  navigatingTo,
  isNavigating
} }) => ({
  navigatingTo,
  isNavigating
})

const mapDispatchToProps = dispatch => ({
  toggleNavigating: (url, navigating) => dispatch(appActions.toggleNavigating(url, navigating))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ActiveLink))
