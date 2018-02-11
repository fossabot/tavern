import { connect } from 'react-redux'
import cx from 'classnames'

import Divider from 'material-ui/Divider'
import Drawer from 'material-ui/Drawer'
import IconButton from 'material-ui/IconButton'
import List, { ListItem } from 'material-ui/List'
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft'
import HomeIcon from 'material-ui-icons/Home'

import ActiveLink from '@components/activeLink'
import { appActions } from '@components/app/reducer'
import s from './drawer.scss'

export const MenuDrawer = ({
  showDrawer,
  toggleDrawer
}) => (
  <Drawer
    open={showDrawer}
    onClose={() => toggleDrawer(false)}
  >
    <IconButton onClick={() => toggleDrawer(false)}>
      <ChevronLeftIcon />
    </IconButton>
    <Divider />
    <List>
      <ActiveLink
        href='/'
        prefetch
        render={({ active }) => {
          return (
            <ListItem className={cx(s.item, {[s.itemActive]: active})}>
              <HomeIcon /> Home
            </ListItem>
          )
        }}
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
