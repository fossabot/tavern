const withCss = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withOffline = require('next-offline')
const { DefinePlugin } = require('webpack')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { ANALYZE } = process.env
const paths = require('./config/paths')
const { raw: ENV } = require('./config/env')

const customConfig = {
  cssModules: true,
  webpack (config, { buildId, dev, isServer, defaultLoaders }) {
    if (ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: true
      }))
    }

    config.plugins.push(new DefinePlugin({
      'process.env': JSON.stringify(ENV)
    }))

    if(!dev) {
      config.devtool = 'source-map'
    }

    config.resolve.alias['@components'] = paths.appComponents
    config.resolve.alias['@reducers'] = paths.appReducers
    config.resolve.alias['@pages'] = paths.appPages

    return config // Important: return the modified config
  }
}

module.exports = withOffline({
  dontAutoRegisterSw: true,
  ...withCss(
    withSass(customConfig)
  )
})
