const webpack = require("webpack");
const merge = require("webpack-merge");

const commonConfig = require("./webpack.common.config");

module.exports = merge(commonConfig, {
  devtool: "cheap-module-eval-source-map",
  entry: ["webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr&timeout=20000&reload=true"],
  mode: "development",
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom"
    }
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
