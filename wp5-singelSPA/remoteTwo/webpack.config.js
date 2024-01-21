const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/app.js', // Adjust the entry file as needed
  output: {
    publicPath: 'http://localhost:8082/', // Adjust the URL as needed
  },
  devServer: {
    port: 8082,
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
      name: 'app2',
      filename: 'remoteEntry.js',
      exposes: {
        './App2': './src/App',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: '^17.0.0',
        },
        'react-dom': {
          singleton: true,
          requiredVersion: '^17.0.0',
        },
        // Add other shared dependencies here
      },
    }),
  ],
};
