const { defineConfig } = require('@vue/cli-service')
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'otherHrProject',
        filename: 'remoteEntry.js',
        remotes: {
          hrProject: `hrLnb@https://hr-work.local.hiworks.com:8081/remoteEntry.js`,
        },
      })
    ], 
  },
})
