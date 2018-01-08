import { h } from 'preact'
import { connect } from 'preact-redux'
import { Link } from 'preact-router/match'
import c from 'classnames'

import Icon from 'preact-material-components/Icon'
import Toolbar from 'preact-material-components/Toolbar'
import 'preact-material-components/Toolbar/style.css'
import Drawer from 'preact-material-components/Drawer'
import 'preact-material-components/Drawer/style.css'
import List from 'preact-material-components/List'
import 'preact-material-components/List/style.css'

import { AppActions } from './store'
import s from './app.scss'

const render = ({
  isDrawerOpen,
  openDrawer,
  closeDrawer,
  children
}) => <div className={s.App}>
  <Toolbar>
    <Toolbar.Row>
      <Toolbar.Section className={s.Links} align-start={true}>
        <Toolbar.Icon
          menu={true}
          onClick={openDrawer}
        >
          <Icon>menu</Icon>
        </Toolbar.Icon>
      </Toolbar.Section>
    </Toolbar.Row>
  </Toolbar>
  <Drawer.TemporaryDrawer
    open={isDrawerOpen}
    onClose={closeDrawer}
  >
    <Drawer.TemporaryDrawerHeader
      className={s.DrawerHeader}
    >
      <img className={s.DrawerHeaderBg} src="http://6d6rpg.com/wp-content/uploads/sites/2/2009/04/fantasyart.jpg" alt="Fantasy"/>
    </Drawer.TemporaryDrawerHeader>
    <Drawer.TemporaryDrawerContent>
      <List>
        <Link
          activeClassName={s.active}
          href="/"
        >
          <List.LinkItem onClick={closeDrawer}>Home</List.LinkItem>
        </Link>
        <Link
          activeClassName={s.active}
          href="/character"
        >
          <List.LinkItem onClick={closeDrawer}>Character</List.LinkItem>
        </Link>
        <Link
          activeClassName={s.active}
          href="/character/add"
        >
          <List.LinkItem onClick={closeDrawer}>Add</List.LinkItem>
        </Link>
      </List>
    </Drawer.TemporaryDrawerContent>
  </Drawer.TemporaryDrawer>
  {children}
</div>

const mapStateToProps = ({
  app: { isDrawerOpen }
}) => ({ isDrawerOpen })

const mapDispatchToProps = dispatch => ({
  openDrawer: () => dispatch(AppActions.openDrawer()),
  closeDrawer: () => dispatch(AppActions.closeDrawer())
})

export const App = connect(mapStateToProps, mapDispatchToProps)(render)

export default App
