import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

import MenuIcon from 'material-ui-icons/Menu'

import LoginButton from '@components/loginButton'
import { appActions } from '@reducers/store'
import s from './menuBar.scss'

export const MenuBar = ({
  title = '',
  toggleDrawer
}) => (
  <AppBar position='sticky' color='primary'>
    <Toolbar title={title} className={s.toolbar}>
      <IconButton
        color='inherit'
        aria-label='Menu'
        onClick={() => toggleDrawer()}
      >
        <MenuIcon />
      </IconButton>
      <Typography style={{ flex: 1 }} title={title} variant='title' color='inherit'>
        <span id='toolbarTitle' className={s.toolbarTitle}>{title}</span>
      </Typography>
      <LoginButton />
    </Toolbar>
  </AppBar>
)

MenuBar.propTypes = {
  title: PropTypes.string,
  toggleDrawer: PropTypes.func.isRequired
}

MenuBar.defaultProps = {
  title: ''
}

const mapDispatchToProps = dispatch => ({
  toggleDrawer: show => dispatch(appActions.toggleDrawer(show))
})

export default connect(null, mapDispatchToProps)(MenuBar)
