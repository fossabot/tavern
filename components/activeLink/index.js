import Link from 'next/link'
import { withRouter } from 'next/router'

export const ActiveLink = ({
  href,
  router,
  prefetch,
  render: LinkContent
}) => {
  return (
  <Link href={href} prefetch={prefetch}>
    <LinkContent active={router.pathname === href} />
  </Link>
)
}

export default withRouter(ActiveLink)
