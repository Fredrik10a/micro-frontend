const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { dependencies } = require("./package.json");

module.exports = {

  entry: "./src/index.js",

  output: {
    publicPath: "http://localhost:8081/",
    uniqueName: 'REMOTE_APP1' // avoid conflict with other remotes
    // https://webpack.js.org/concepts/module-federation/#collision-between-modules-from-different-remotes
  },

  devServer: {
    port: 8081 // enable dedicated port for localhost
  },

  resolve: {
    extensions: [".css", ".scss", ".js", ".jsx"],
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: {
                filter: (url) => {
                  if (url.startsWith("data:")) {
                    return false;
                  }
                  return true;
                },
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },
    ],
  },
  
  plugins: [
    new ModuleFederationPlugin({
      name: "APP1",
      library: { type: 'var', name: 'APP1' },
      filename: "remoteEntry.js",
      remotes: {
      },
      exposes: {
        "./App": "./src/app.js"
      },
      shared: {
        ...dependencies,
        react: {
          singleton: true,
          requiredVersion: dependencies['react'],
          eager: true,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: dependencies["react-dom"],
          eager: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
};