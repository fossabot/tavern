const { createServer } = require('http')
const { resolve } = require('path')
const { parse } = require('url')
const next = require('next')
const { publicUrl } = require('./config/paths')
const app = next()
const handle = app.getRequestHandler()
const env = require('./config/env')
const fs = require('fs')

const { APP_PORT, PUBLIC_URL, NODE_ENV } = env.raw
const isDev = NODE_ENV !== 'production'
const serverDomain = isDev ? `${PUBLIC_URL}:${APP_PORT}` : PUBLIC_URL

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
    .listen(APP_PORT, () => {
      console.log(`> Ready on ${serverDomain}`)
    })
  })
