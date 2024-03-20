const { defineConfig } = require('@vue/cli-service');
const { CodeInspectorPlugin } = require('code-inspector-plugin');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      CodeInspectorPlugin({
        bundler: 'webpack'
        // 其他选项
      })
    ]
  },
  devServer: {
    // 在这里添加 devServer 配置
    port: 8080, // 指定开发服务器端口
    host: 'localhost', // 指定开发服务器主机
    proxy: {
      // 配置代理
      '/api': {
        target: 'http://120.46.34.178',
        changeOrigin: true
      },
      // 配置代理
      '/socket.io': {
        target: 'http://120.46.34.178',
        changeOrigin: true
      }
    }
  }
});
