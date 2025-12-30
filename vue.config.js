const { defineConfig } = require('@vue/cli-service')
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin
const fs = require('fs')

module.exports = defineConfig({
  devServer: {
    https: {
      key: fs.readFileSync('./localahost-key.pem'),
      cert: fs.readFileSync('./localahost.pem'),
    },
  },
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'otherHrProject',
        filename: 'remoteEntry.js',
        remotes: {
          // 개발 환경에서는 로컬 개발 서버 사용, 배포 환경에서는 배포 URL 사용
          hrProject: process.env.NODE_ENV === 'production'
            ? `hrLnb@https://feature-lnb-hr-work.devoffice.hiworks.com/remoteEntry.js`
            : `hrLnb@https://hr-work.local.hiworks.com:8080/remoteEntry.js`,
        },
      })
    ], 
  },
})
