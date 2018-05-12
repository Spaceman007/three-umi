
const path = require('path')
const srcDir = path.resolve('.', 'src')

export default {
  alias: {
    '@': srcDir
  },
  cssModulesExcludes: [
    path.resolve('.', 'src', 'components', 'layout', 'Layout.css')
  ]
}
