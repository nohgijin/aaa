const { defineConfig } = require('@vue/cli-service')
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'my_project',
        filename: 'remoteEntry.js',
        exposes: {
          './HelloWorld': './src/components/HelloWorld.vue'
        },
        shared: {
          vue: {
            singleton: true,
            requiredVersion: '^2.7.0',
            eager: false
          }
        }
      })
    ]
  },
  devServer: {
    port: 8080,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
})
