const withSCSS = require('@zeit/next-sass')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withSCSS({
  assetPrefix: isProd ? 'https://djyde.github.io/Picas' : ''
})
