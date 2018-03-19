import PropTypes from 'prop-types'
import Router, { withRouter } from 'next/router'

export const ActiveLink = ({
  href,
  router,
  onNavigate = () => {},
  delay,
  render: LinkContent = null
}) => {
  const isActive = router.pathname === href
  if (!isActive) {
    Router.prefetch(href)
  }
  return (
    <div
      onClick={async () => {
        if (!isActive) {
          await onNavigate()
          await new Promise(resolve => setTimeout(resolve, delay - 100))
          router.push(href)
        }
      }}
    >
      <LinkContent active={router.pathname === href} />
    </div>
  )
}

ActiveLink.propTypes = {
  href: PropTypes.string.isRequired,
  router: PropTypes.any.isRequired,
  onNavigate: PropTypes.func,
  delay: PropTypes.number.isRequired,
  render: PropTypes.node
}

ActiveLink.defaultProps = {
  onNavigate: () => {},
  render: null
}

export default withRouter(ActiveLink)
