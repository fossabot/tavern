import React from 'react'
import { Provider } from 'react-redux'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import Document, { Head, Main, NextScript } from 'next/document'
import {
  createStore,
  combineReducers
} from 'redux'

import reducers from '@components/reducers'

const store = createStore(
  combineReducers(reducers)
)

const theme = createMuiTheme()

export default class MyDocument extends Document {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <html>
            <Head>
              <title>Narrative RPG online platform | Tavern</title>
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
              <link rel="stylesheet" href="/static/styles.css"/>
            </Head>
            <body>
              <Main />
              <NextScript />
            </body>
          </html>
        </Provider>
      </MuiThemeProvider>
    )
  }
}
