const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;

module.exports = {
  entry: "src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "index_bundle.js",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'home',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App.js',
      },
      // shared: {
      //   ...deps,
      //   react: { singleton: true, eager: false, requiredVersion: deps.react },
      //   'react-dom': {
      //     singleton: true,
      //     eager: false,
      //     requiredVersion: deps['react-dom'],
      //   },
      // },
    }),
    new HtmlWebpackPlugin({
      title: "Custom template",
      // Load a custom template (lodash by default)
      template: "src/base.html",
    }),
  ],
};
