const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: './src/app.js', // Adjust the entry file as needed
  output: {
    publicPath: 'http://localhost:8081/', // Adjust the URL as needed
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 8081,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'app1',
      library: { type: 'var', name: 'app1' },
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App',
      },
      shared: {
      },
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
};
