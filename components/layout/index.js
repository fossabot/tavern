import MenuBar from '@components/menuBar'
import MenuDrawer from '@components/menuDrawer'

export const Layout = ({ children }) => (
  <div>
    <MenuBar />
    <MenuDrawer />
    {children}
  </div>
)

export default Layout
