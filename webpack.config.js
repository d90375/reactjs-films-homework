const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: [
    "webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr&timeout=20000&reload=true",
    "./src/index.js"
  ],
  devtool: "inline-source-map",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "test"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      NODE_PORT : '3000',
      WEBPACK_CONFIG : './webpack.config'
    }),
    new webpack.DefinePlugin(
        Object.keys(process.env).reduce(
            (res, key) => ({ ...res, [key]: JSON.stringify(process.env[key]) }),
            {}
        )
    ),
  ]
};
