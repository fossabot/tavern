import getChrome from 'get-chrome'
import puppeteer from 'puppeteer'

(async () => {
  const browser = await puppeteer.launch({
    executablePath: getChrome()
  })
  const page = await browser.newPage()
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' })

  // TODO: Test something

  await browser.close()
})()
