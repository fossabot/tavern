import test from 'ava'
import puppeteer from 'puppeteer'
import mkdirp from 'mkdirp'
import { promisify } from 'util'
import { resolve } from 'path'

const goldenDir = resolve(__dirname, './')
const mkdir = promisify(mkdirp)

const takeScreenshot = async (page, route, filePrefix) => {
  const fileName = filePrefix + '/' + (route ? route : 'index')

  await page.goto(`http://localhost:3000/${route}`, { waitUntil: 'networkidle2' })
  await page.screenshot({ path: `${goldenDir}/${fileName}.png` })
}

test.before(async () => {
  await mkdir(`${goldenDir}/wide`)
  await mkdir(`${goldenDir}/narrow`)
})

test.beforeEach(async t => {
  t.context.browser = await puppeteer.launch()
  t.context.page = await t.context.browser.newPage()
})

test.afterEach(async t => {
  await t.context.browser.close()
})

test('narrow screen', async t => {
  const { page } = t.context
  await page.setViewport({ width: 375, height: 667 })

  await takeScreenshot(page, '', 'narrow')

  t.pass()
})

test('wide screen', async t => {
  const { page } = t.context
  await page.setViewport({ width: 800, height: 600 })

  await takeScreenshot(page, '', 'wide')

  t.pass()
})
