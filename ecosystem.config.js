module.exports = {
  apps: [
    {
      name: 'tavern-web-dev',
      script: './node_modules/next/dist/bin/next',
      env: {
        NODE_ENV: 'development',
        BABEL_DISABLE_CACHE: 1
      },
      node_args: [
        '--inspect=9230'
      ],
      watch: [
        './ecosystem.config.js',
        './config'
      ]
    }
  ]
}
