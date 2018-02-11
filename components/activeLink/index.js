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
    onClick={() => {
      if (router.pathname !== href) {
        onNavigate && onNavigate()
        setTimeout(() => router.push(href), delay)
      }
    }}
  >
    <LinkContent active={router.pathname === href} />
  </div>
)

export default withRouter(ActiveLink)
