const withCss = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const { DefinePlugin } = require('webpack')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const { resolve } = require('path')
const paths = require('./config/paths')
const { raw: ENV } = require('./config/env')
const { ANALYZE } = process.env

let config = {
  serverRuntimeConfig: {
    ...ENV
  },
  publicRuntimeConfig: {
    ...ENV
  },
  webpack (config, { dev, buildId/* , isServer, defaultLoaders */ }) {
    if (ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: true
      }))
    }

    const originalEntry = config.entry
    config.entry = async () => {
      const entries = await originalEntry()
      const filteredEntries = {}

      Object.keys(entries)
        .filter(entry => !/\.test\.js/.test(entry))
        .forEach(entry => {
          filteredEntries[entry] = entries[entry]
        })

      return filteredEntries
    }

    config.module.rules.push({
      test: /\.test\.js/,
      loader: 'ignore-loader'
    })

    config.module.rules.push({
      test: /\.(jpe?g|png|svg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 8192,
          fallback: 'file-loader',
          publicPath: '/_next/',
          outputPath: 'static/images/',
          name: '[name]-[hash].[ext]'
        }
      }
    })

    config.plugins.push(new DefinePlugin({
      'process.env': JSON.stringify(ENV)
    }))

    config.plugins.push(new SWPrecacheWebpackPlugin({
      minify: true,
      staticFileGlobs: [
        '.next/main.js',
        '.next/dist/bundles/**/!(_document)*.js',
        '.next/static/**/*.{js,css,jpg,jpeg,png,svg,gif}'
      ],
      staticFileGlobsIgnorePatterns: [/_document\.js/, /\.map/],
      stripPrefixMulti: {
        '.next/dist/bundles/pages/': `/_next/${buildId}/page/`,
        '.next/static/': '/_next/static/',
        '.next/': `/_next/${buildId}/`
      },
      runtimeCaching: [
        { handler: 'networkFirst', urlPattern: /^https?.*/ }
      ],
      templateFilePath: resolve(__dirname, 'components', 'service-worker.js.ejs')
    }))

    if (!dev) {
      config.devtool = 'source-map'
    }

    config.resolve.alias['@components'] = paths.appComponents
    config.resolve.alias['@reducers'] = paths.appReducers
    config.resolve.alias['@pages'] = paths.appPages
    config.resolve.alias['@root'] = paths.appRoot

    return config
  }
}

config = withCss({
  ...config,
  cssModules: true
})

config = withSass({
  ...config,
  cssModules: true
})

module.exports = config
