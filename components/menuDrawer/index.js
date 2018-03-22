import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Divider from 'material-ui/Divider'
import Drawer from 'material-ui/Drawer'
import IconButton from 'material-ui/IconButton'
import List from 'material-ui/List'

import ChevronLeftIcon from 'material-ui-icons/ChevronLeft'
import HomeIcon from 'material-ui-icons/Home'
import InfoIcon from 'material-ui-icons/Info'

import ActiveLink from '@components/activeLink'
import MenuItem from './menuItem'
import { appActions } from '@reducers/app'

const drawerDelay = 300

const pages = [
  { path: '/', title: 'Home', Icon: HomeIcon },
  { path: '/about', title: 'About', Icon: InfoIcon }
]

export const MenuDrawer = ({ showDrawer, toggleDrawer }) => (
  <Drawer
    open={showDrawer}
    onClose={() => toggleDrawer(false)}
    transitionDuration={drawerDelay}
  >
    <IconButton onClick={() => toggleDrawer(false)}>
      <ChevronLeftIcon color='primary' />
    </IconButton>
    <Divider />
    <List>
      {pages.map(({ path, title, Icon }, i) => (
        <ActiveLink
          key={i}
          prefetch
          href={path}
          onNavigate={async (url, success) => {
            await new Promise(r => setTimeout(r, drawerDelay / 2))
            toggleDrawer(!success)
          }}
          render={({ isActive, isLoading }) => (
            <MenuItem
              title={title}
              Icon={Icon}
              isActive={isActive}
              isLoading={isLoading}
            />
          )}
        />
      ))}
    </List>
  </Drawer>
)

MenuDrawer.propTypes = {
  showDrawer: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired
}

const mapStateToProps = ({
  app: { showDrawer }
}) => ({ showDrawer })

const mapDispatchToProps = dispatch => ({
  toggleDrawer: show => dispatch(appActions.toggleDrawer(show))
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuDrawer)
