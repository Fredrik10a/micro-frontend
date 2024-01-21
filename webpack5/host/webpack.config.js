const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { dependencies } = require("./package.json");

module.exports = {
  entry: "./src/index.js",

  output: {
    publicPath: "http://localhost:8080/",
    uniqueName: 'HOST' // avoid conflict with other remotes
  },

  devServer: {
    port: 8080
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
        test: /\.jsx?$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "HOST_APP",
      filename: "remoteEntry.js",
      remotes: {
        APP1: "APP1@http://localhost:8081/remoteEntry.js",
        APP2: "APP2@http://localhost:8082/remoteEntry.js"
      },
      exposes: {},
      shared: {
        ...dependencies,
        react: {
          singleton: true,
          requiredVersion: dependencies["react"],
          eager: true
        },
        "react-dom": {
          singleton: true,
          requiredVersion: dependencies["react-dom"],
          eager: true
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
};