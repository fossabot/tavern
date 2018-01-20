import getChrome from 'get-chrome'
import puppeteer from 'puppeteer'

import paths from '../config/paths'

(async () => {
  console.log('browser')
  const browser = await puppeteer.launch({
    executablePath: getChrome()
  })
  console.log('page')
  const page = await browser.newPage()
  console.log('goto')
  await page.goto('http://localhost:3001', { waitUntil: 'networkidle2' })
  console.log('screenshot')
  await page.screenshot({
    path: `${paths.integrationPath}/example.png`
  })

  console.log('close')
  await browser.close()
})()
