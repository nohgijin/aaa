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
          hrProject: `hrLnb@https://feature-lnb-hr-work.devoffice.hiworks.com/remoteEntry.js`,
        },
      })
    ], 
  },
})
