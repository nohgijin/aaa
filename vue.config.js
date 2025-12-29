const { defineConfig } = require('@vue/cli-service')
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: 'https://aaa-pi-indol.vercel.app/',
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'myProject',
        filename: 'remoteEntry.js',
        exposes: {
          './HelloWorld': './src/components/HelloWorld.vue'
        },
      })
    ], 
  },
  devServer: {
    port: 8080,
    host: 'localhost',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    },
    allowedHosts: 'all'
  }
})
