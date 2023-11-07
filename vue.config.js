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
  }
});
