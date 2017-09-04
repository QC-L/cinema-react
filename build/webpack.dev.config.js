const merge = require('webpack-merge')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

const baseWebpackConfig = require('./webpack.base.config')
const config = require('../config')

// 修改 webpack 配置的 entry
baseWebpackConfig.entry = ['./build/dev-client'].concat(baseWebpackConfig.entry)

// 合并 base 与 dev 的配置
module.exports = merge(baseWebpackConfig, {
    // 在base配置基础上, 添加插件
  plugins: [
        // 在html中引入编译后的资源
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    }),
        // webpack 的默认配置
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
        // webpack 的热模块替换插件
    new webpack.HotModuleReplacementPlugin(),
        // webpack 不触发 error 事件插件
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrorsPlugin()
  ]
})
