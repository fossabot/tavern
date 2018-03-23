const { createServer } = require('http')
const { resolve } = require('path')
const { parse } = require('url')
const next = require('next')
const app = next()
const handle = app.getRequestHandler()
const env = require('./config/env')

const { APP_PORT, PUBLIC_URL, NOW_URL } = env.raw

app.prepare()
  .then(() => {
    createServer((req, res) => {
      const parsedUrl = parse(req.url, true)
      const { pathname } = parsedUrl

      if (pathname === '/service-worker.js') {
        const filePath = resolve(__dirname, `.next${pathname}`)

        app.serveStatic(req, res, filePath)
      } else {
        handle(req, res, parsedUrl)
      }
    })
      .listen(APP_PORT, () => console.log(`> Ready on ${NOW_URL || PUBLIC_URL}`))
  })
