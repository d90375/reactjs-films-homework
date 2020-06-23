const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
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
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false })
  ]
};
