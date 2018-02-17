import Router, { withRouter } from 'next/router'

export const ActiveLink = ({
  href,
  router,
  prefetch,
  onNavigate,
  delay,
  render: LinkContent
}) => {
  const isActive = router.pathname === href
  if (!isActive) {
    Router.prefetch(href)
  }
  return (
    <div
      onClick={async () => {
        if (!isActive) {
          onNavigate && await onNavigate()
          await new Promise(resolve => setTimeout(resolve, delay - 100))
          router.push(href)
        }
      }}
    >
      <LinkContent active={router.pathname === href} />
    </div>
  )
}

export default withRouter(ActiveLink)
