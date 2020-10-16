const { merge } = require("webpack-merge");
const commonConfig = require("./config/webpack/webpack.common.config");
const productionConfig = require("./config/webpack/webpack.production.config");
const developmentConfig = require("./config/webpack/webpack.development.config");

module.exports = (env) => {
  switch (env) {
    case "development":
      return merge(commonConfig, developmentConfig);
    case "production":
      return merge(commonConfig, productionConfig);
    default:
      throw new Error("No matching configuration was found!");
  }
};
