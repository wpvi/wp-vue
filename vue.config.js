const path = require('path')

module.exports = {
  chainWebpack: config => {
    config.module
      .rule('aot')
      .test(/\.aot$/)
      .set('enforce', 'post')
      .use('aot-loader')
      .loader('aot-loader')
      .end()
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'stylus',
      patterns: [
        path.resolve(__dirname, 'src/styles/abstracts/variables.styl'),
        path.resolve(__dirname, 'src/styles/abstracts/mixins.styl'),
        path.resolve(__dirname, 'src/styles/abstracts/placeholders.styl')
      ]
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: `https://public-api.wordpress.com/rest/v1.1/sites`,
        changeOrigin: true,
        pathRewrite: {
          'api': '/'
        }
      }
    }
  },
  pwa: {
    workboxOptions: {
      exclude: [
        '_redirects'
      ],
      runtimeCaching: [{
        urlPattern: /api/,
        handler: 'cacheFirst'
      }]
    }
  }
}
