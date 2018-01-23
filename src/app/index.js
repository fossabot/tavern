import React from 'react'
import { Link, Route } from 'react-router-dom'

import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import IconButton from 'material-ui/IconButton'
import List, { ListItem } from 'material-ui/List'
import Toolbar from 'material-ui/Toolbar'
import MenuIcon from 'material-ui-icons/Menu'
import HomeIcon from 'material-ui-icons/Home'
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'

import Home from '@app/home'
import { appActions } from './reducer'
import { connect } from 'react-redux'

const App = ({ showDrawer, toggleDrawer, history }) => (
  <div>
    <AppBar position='static' color='primary'>
      <Toolbar disableGutters={true}>
        <IconButton
          color='contrast'
          aria-label='Menu'
          onClick={() => toggleDrawer()}
        >
          <MenuIcon />
        </IconButton>
        <Typography type='title' color='inherit'>
          Title
        </Typography>
      </Toolbar>
    </AppBar>
    <Drawer
      open={showDrawer}
      onClose={(e, reason) => toggleDrawer(false)}
    >
      <IconButton onClick={() => toggleDrawer(false)}>
        <ChevronLeftIcon />
      </IconButton>
      <Divider />
      <List>
        <ListItem>
          <Link to={'/'}>
            <HomeIcon />Home
          </Link>
        </ListItem>
      </List>
    </Drawer>
    <Route exact path="/" component={Home} />
  </div>
)

const mapStateToProps = ({
  app: {
    showDrawer
  }
}) => ({
  showDrawer
})

const mapDispatchToProps = dispatch => ({
  toggleDrawer: show => dispatch(appActions.toggleDrawer(show))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
