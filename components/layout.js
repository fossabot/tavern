import { SheetsRegistry } from 'react-jss/lib/jss'
import JssProvider from 'react-jss/lib/JssProvider'

import { MuiThemeProvider, createMuiTheme, createGenerateClassName } from 'material-ui/styles'
import { lightGreen, lime, orange } from 'material-ui/colors'

import MenuBar from '@components/menuBar'
import MenuDrawer from '@components/menuDrawer'

const sheetsRegistry = new SheetsRegistry()
const generateClassName = createGenerateClassName()

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: lightGreen,
    secondary: lime,
    error: orange,
    contrastThreshold: 3,
    tonalOffset: 0.2
  }
}, {
  userAgent: 'all'
})

const Layout = ({ children }) => (
  <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
    <MuiThemeProvider theme={theme}>
      <MenuBar />
      <MenuDrawer />
      {children}
    </MuiThemeProvider>
  </JssProvider>
)

export default Layout
