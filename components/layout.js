import { Children, cloneElement } from 'react'
import { SheetsRegistry } from 'react-jss/lib/jss'
import JssProvider from 'react-jss/lib/JssProvider'
import { minify } from 'csso'
import Head from 'next/head'

import { MuiThemeProvider, createMuiTheme, createGenerateClassName } from 'material-ui/styles'
import { teal, lime, orange } from 'material-ui/colors'

import MenuBar from '@components/menuBar'
import MenuDrawer from '@components/menuDrawer'

const sheetsRegistry = new SheetsRegistry()
const generateClassName = createGenerateClassName()

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: { light: teal[700], main: teal[800], dark: teal[900] },
    secondary: { light: lime[700], main: lime[800], dark: lime[900] },
    error: { light: orange[700], main: orange[800], dark: orange[900] },
    contrastThreshold: 3,
    tonalOffset: 0.2
  }
}, {
  userAgent: 'all'
})

const Layout = ({ pageTitle, children }) => (
  <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
    <MuiThemeProvider theme={theme}>
      <Head>
        <style id='jss-server-side'>{minify(sheetsRegistry.toString()).css}</style>
      </Head>
      <div id='__layoutRoot'>
        <MenuBar title={pageTitle} />
        <MenuDrawer />
        {children}
      </div>
    </MuiThemeProvider>
  </JssProvider>
)

export default Layout
