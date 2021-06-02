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
    }
}
