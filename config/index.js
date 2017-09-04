const path = require('path')
module.exports = {
    // 开发环境配置
  dev: {
    env: require('./dev.env'),
    assetsPublicPath: '/',
    assetsSubDirectory: 'static',
    port: 5000,
    autoOpenBrowser: true,
    proxyTable: {}
  },
    // 生产环境配置
  build: {
    env: require('./prod.env'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsPublicPath: '',
    assetsSubDirectory: 'static'
  }
}
