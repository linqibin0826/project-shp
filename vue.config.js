const { defineConfig } = require('@vue/cli-service')
const path = require('path');


module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  },
  devServer: {
    proxy: {
      "/api": {                   // 匹配所有以/api开头的请求
        target: "http://gmall-h5-api.atguigu.cn",  // 后端服务器地址
        changeOrigin: true,       // 允许跨域
      }
    }
  }
});
