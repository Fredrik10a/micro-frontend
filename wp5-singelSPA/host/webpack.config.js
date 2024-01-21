const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './index.js',
  output: {
    publicPath: 'http://localhost:8080/',
  },
  devServer: {
    devMiddleware: {
      // Ensure that source maps are enabled
      writeToDisk: true,
    },
    port: 8080,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  
  devtool: 'source-map',

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
      name: 'host',
      remotes: {
        "app1": 'app1@http://localhost:8081/remoteEntry.js',
     //   app2: 'app2@http://localhost:8082/remoteEntry.js',
      },
      shared: {
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
  ],
};
