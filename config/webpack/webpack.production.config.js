const cssnano = require("cssnano");

const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");

module.exports = {
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
  performance: {
    hints: "warning",
    maxEntrypointSize: 1024000,
    maxAssetSize: 710000
  }
};
