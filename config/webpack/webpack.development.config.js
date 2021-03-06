const webpack = require("webpack");

module.exports = {
  devtool: "eval-cheap-module-source-map",
  entry: { main: ["webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr&timeout=20000&reload=true"] },
  mode: "development",
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
