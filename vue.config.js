const path = require('path');

module.exports = {
  configureWebpack: {
      resolve: {
          alias: {
              '@': path.join(__dirname, 'src/')
          }
      }
  },
  devServer: {
    proxy: '192.168.100.25:8080'
  },
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  },
  chainWebpack: config => {
    config.module
      .rule("i18n")
      .resourceQuery(/blockType=i18n/)
      .type('javascript/auto')
      .use("i18n")
      .loader("@kazupon/vue-i18n-loader")
      .end();
  }
}
