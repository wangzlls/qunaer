module.exports = {
  publicPath: './',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        changeOrigin: true,
        pathRewrite: {
          '^/api' : '/mock'
        }
      }
    }
  },
  configureWebpack: {
    //重新保存一些配置
    resolve: {
      //配置路径
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        'styles': 'src/assets/styles',
        'common': 'src/common'
      }
    }
  },
}
