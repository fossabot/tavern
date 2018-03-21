import Document, { Head, Main, NextScript } from 'next/document'

class AppDocument extends Document {
  render() {
    return (
      <html lang='en'>
        <Head>
          <title>Narrative RPG online platform | Tavern</title>
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <meta name='theme-color' content='#283618' />
          <link rel='manifest' href='/static/manifest.json' />
          <link rel='stylesheet' href='/_next/static/style.css' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default AppDocument
