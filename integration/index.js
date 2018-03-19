import test from 'ava'
import puppeteer from 'puppeteer'
import mkdirp from 'mkdirp'
import pixelmatch from 'pixelmatch'
import { PNG } from 'pngjs'
import { promisify } from 'util'
import { createReadStream } from 'fs'
import { resolve } from 'path'

const testDir = resolve(__dirname, './screenshots')
const goldenDir = resolve(__dirname, './screenshots/golden')
const mkdir = promisify(mkdirp)

const toPNG = async file => new Promise((resolve, reject) => {
  const stream = createReadStream(file)
    .pipe(new PNG())
    .on('parsed', () => resolve(stream))
    .on('error', reject)
})

const compareScreenshots = async fileName => {
  const currentImg = await toPNG(`${testDir}/${fileName}.png`)
  const goldenImg = await toPNG(`${goldenDir}/${fileName}.png`)

  const diff = new PNG({ width: currentImg.width, height: goldenImg.height })
  const numDiffPixels = pixelmatch(
    currentImg.data,
    goldenImg.data,
    diff.data,
    goldenImg.width,
    goldenImg.height,
    { threshold: 0.1 }
  )

  return {
    currentImg,
    goldenImg,
    numDiffPixels,
    diff
  }
}

const takeAndCompareScreenshot = async (page, route, filePrefix) => {
  const fileName = filePrefix + '/' + (route ? route : 'index')

  await page.goto(`http://localhost:3000/${route}`, { waitUntil: 'networkidle2' })
  await page.screenshot({ path: `${testDir}/${fileName}.png` })

  return compareScreenshots(fileName)
}

test.before(async () => {
  await mkdir(`${goldenDir}/wide`)
  await mkdir(`${goldenDir}/narrow`)
  await mkdir(`${testDir}/wide`)
  await mkdir(`${testDir}/narrow`)
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
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' })

  const result = await takeAndCompareScreenshot(page, '', 'narrow')

  t.is(result.numDiffPixels, 0)
})

test('wide screen', async t => {
  const { page } = t.context
  await page.setViewport({ width: 800, height: 600 })
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' })

  const result = await takeAndCompareScreenshot(page, '', 'wide')

  t.is(result.numDiffPixels, 0)
})
