import PropTypes from 'prop-types'
import Router, { withRouter } from 'next/router'
import { connect } from 'react-redux'

import s from './activeLink.scss'

export const ActiveLink = ({
  href,
  router,
  isNavigating = false,
  navigatingTo = '',
  onNavigate = () => {},
  render: LinkContent = null
}) => {
  Router.onRouteChangeComplete = async url => {
    await onNavigate(url, true)
  }
  Router.onRouteChangeError = async url => {
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
  onNavigate: PropTypes.func,
  render: PropTypes.any
}

ActiveLink.defaultProps = {
  isNavigating: false,
  navigatingTo: '',
  onNavigate: () => {},
  render: null
}

const mapStateToProps = ({
  app: {
    navigatingTo,
    isNavigating
  }
}) => ({
  navigatingTo,
  isNavigating
})

export default withRouter(connect(mapStateToProps, null)(ActiveLink))
