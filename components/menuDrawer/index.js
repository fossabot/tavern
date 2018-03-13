import { connect } from 'react-redux'
import cx from 'classnames'

import Divider from 'material-ui/Divider'
import Drawer from 'material-ui/Drawer'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'
import List, { ListItem } from 'material-ui/List'

import ChevronLeftIcon from 'material-ui-icons/ChevronLeft'
import HomeIcon from 'material-ui-icons/Home'
import InfoIcon from 'material-ui-icons/Info'

import ActiveLink from '@components/activeLink'
import { appActions } from '@reducers/app'
import s from './drawer.scss'

const drawerDelay = 300

const pages = [
  { path: '/', title: 'Home', Icon: HomeIcon },
  { path: '/about', title: 'About', Icon: InfoIcon }
]

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
      {pages.map(({ path, title, Icon }, i) => (
        <ActiveLink
          key={i}
          prefetch
          href={path}
          delay={drawerDelay}
          onNavigate={() => toggleDrawer(false)}
          render={({ active }) => (
            <ListItem  className={cx(s.item, {[s.itemActive]: active})}>
              <Icon color='primary' className={cx(s.itemIcon)} />
              <Typography color='primary'>{title}</Typography>
            </ListItem>
          )}
        />
      ))}
    </List>
  </Drawer>
)

const mapStateToProps = ({ app }) => app

const mapDispatchToProps = dispatch => ({
  toggleDrawer: show => dispatch(appActions.toggleDrawer(show))
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuDrawer)
0
