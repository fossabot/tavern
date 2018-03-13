const withCss = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { ANALYZE } = process.env
const paths = require('./config/paths')

require('./config/env');

module.exports = withCss(withSass({
  cssModules: true,
  webpack (config, { buildId, dev, isServer, defaultLoaders }) {
    if (ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: true
      }))
    }

    if(!dev) {
      config.devtool = 'source-map'
    }

    config.resolve.alias['@components'] = paths.appComponents
    config.resolve.alias['@reducers'] = paths.appReducers
    config.resolve.alias['@pages'] = paths.appPages

    return config // Important: return the modified config
  }
}))
