import Document, { Head, Main, NextScript } from 'next/document'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'

const theme = createMuiTheme()

class AppDocument extends Document {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <html>
          <Head>
            <title>Narrative RPG online platform | Tavern</title>
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            <link rel='stylesheet' href='/static/styles.css'/>
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </html>
      </MuiThemeProvider>
    )
  }
}

export default AppDocument
