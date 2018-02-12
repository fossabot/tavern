import Link from 'next/link'
import { withRouter } from 'next/router'

export const ActiveLink = ({
  href,
  router,
  prefetch,
  onNavigate,
  delay,
  render: LinkContent
}) => (
  <div
    onClick={async () => {
      if (router.pathname !== href) {
        onNavigate && await onNavigate()
        await new Promise(resolve => setTimeout(resolve, delay - 100))
        router.push(href)
      }
    }}
  >
    <LinkContent active={router.pathname === href} />
  </div>
)

export default withRouter(ActiveLink)
