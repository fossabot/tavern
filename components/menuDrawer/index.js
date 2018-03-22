import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import Divider from 'material-ui/Divider'
import Drawer from 'material-ui/Drawer'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'
import List, { ListItem } from 'material-ui/List'

import ChevronLeftIcon from 'material-ui-icons/ChevronLeft'
import HomeIcon from 'material-ui-icons/Home'
import InfoIcon from 'material-ui-icons/Info'
import { CircularProgress } from 'material-ui/Progress'

import ActiveLink from '@components/activeLink'
import { appActions } from '@reducers/app'
import s from './drawer.scss'

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
            <ListItem className={cx(s.item, { [s.itemActive]: isActive })}>
              {isLoading
                ? <CircularProgress
                  color='inherit'
                  className={s.itemLoading}
                  size={26}
                />
                : null
              }
              <Icon color={isActive ? 'disabled' : 'primary'} className={cx(s.itemIcon)} />
              <Typography>{title}</Typography>
            </ListItem>
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
