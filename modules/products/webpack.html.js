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
      name: 'products',
      remotes: {
        home: "home@http://127.0.0.1:3001/remoteEntry.js"
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
