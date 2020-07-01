const { resolve } = require("path");

const cssnano = require("cssnano");

const merge = require("webpack-merge");

const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const commonConfig = require("./webpack.common.config");

module.exports = merge(commonConfig, {
  devtool: false,
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [
      new TerserJSPlugin({ parallel: true, cache: true, sourceMap: true }),
      new OptimizeCSSAssetsPlugin({
        cssProcessor: cssnano,
        cssProcessorPluginOptions: {
          preset: ["default", { discardComments: { removeAll: true } }]
        }
      })
    ]
  },
  devServer: {
    hot: false,
    contentBase: resolve(__dirname, "build"),
    watchContentBase: true,
    host: "localhost",
    port: 8099,
    disableHostCheck: true,
    open: true,
    historyApiFallback: true,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  performance: {
    hints: "warning",
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
});
