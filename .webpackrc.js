
const path = require('path')
const srcDir = path.resolve('.', 'src')

export default {
  alias: {
    '@': srcDir
  },
  publicPath: '/three-umi/static/',
  cssModulesExcludes: [
    path.resolve('.', 'src', 'components', 'layout', 'Layout.css')
  ]
}
