import { connect } from 'react-redux'
import Portal from 'material-ui/Portal'

import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import MenuIcon from 'material-ui-icons/Menu'

import { appActions } from '@components/app/reducer'

export const MenuBar = ({
  title,
  toggleDrawer
}) => <AppBar position='static' color='primary'>
    <Toolbar disableGutters={true}>
      <IconButton
        color='contrast'
        aria-label='Menu'
        onClick={() => toggleDrawer()}
      >
        <MenuIcon />
      </IconButton>
      <Typography type='title' color='inherit'>
        {title}
      </Typography>
    </Toolbar>
  </AppBar>

const mapDispatchToProps = dispatch => ({
  toggleDrawer: show => dispatch(appActions.toggleDrawer(show))
})

export default connect(null, mapDispatchToProps)(MenuBar)
