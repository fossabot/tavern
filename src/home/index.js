import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'

import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import IconButton from 'material-ui/IconButton'
import { ListItem } from 'material-ui/List'
import Toolbar from 'material-ui/Toolbar'
import MenuIcon from 'material-ui-icons/Menu'
import Typography from 'material-ui/Typography'

import { homeActions } from './reducer'

const Home = ({ showDrawer, toggleDrawer }) => (
  <div>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <AppBar position='static' color='primary'>
      <Toolbar disableGutters={true}>
        <IconButton
          color="contrast"
          aria-label="Menu"
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
      <ListItem>Menu Item</ListItem>
      <ListItem>Menu Item 2</ListItem>
    </Drawer>
  </div>
)

const mapStateToProps = ({
  home: {
    showDrawer
  }
}) => ({
  showDrawer
})

const mapDispatchToProps = dispatch => ({
  toggleDrawer: show => dispatch(homeActions.toggleDrawer(show))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
