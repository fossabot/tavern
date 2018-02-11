import { connect } from 'react-redux'
import cx from 'classnames'

import Divider from 'material-ui/Divider'
import Drawer from 'material-ui/Drawer'
import IconButton from 'material-ui/IconButton'
import List, { ListItem } from 'material-ui/List'

import ChevronLeftIcon from 'material-ui-icons/ChevronLeft'
import HomeIcon from 'material-ui-icons/Home'
import InfoIcon from 'material-ui-icons/Info'

import ActiveLink from '@components/activeLink'
import { appActions } from '@components/app/reducer'
import s from './drawer.scss'

const drawerDelay = 300

export const MenuDrawer = ({
  showDrawer,
  toggleDrawer
}) => (
  <Drawer
    open={showDrawer}
    onClose={() => toggleDrawer(false)}
    transitionDuration={drawerDelay}
  >
    <IconButton onClick={() => toggleDrawer(false)}>
      <ChevronLeftIcon />
    </IconButton>
    <Divider />
    <List>
      <ActiveLink href='/' prefetch
        delay={drawerDelay}
        onNavigate={() => toggleDrawer(false)}
        render={({ active }) => (
          <ListItem className={cx(s.item, {[s.itemActive]: active})}>
            <HomeIcon className={cx(s.itemIcon)} />
            Home
          </ListItem>
        )}
      />
      <ActiveLink href='/about' prefetch
        delay={drawerDelay}
        onNavigate={() => toggleDrawer(false)}
        render={({ active }) => (
          <ListItem className={cx(s.item, {[s.itemActive]: active})}>
            <InfoIcon className={cx(s.itemIcon)} />
            About
          </ListItem>
        )}
      />
    </List>
  </Drawer>
)

const mapStateToProps = ({ app }) => app

const mapDispatchToProps = dispatch => ({
  toggleDrawer: show => dispatch(appActions.toggleDrawer(show))
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuDrawer)
0
