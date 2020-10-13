const express = require("express");
const { resolve, join } = require("path");

require("dotenv").config();

const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const config = require("../webpack.config");

const withModeConfig = config("development");

const app = express();
const compiler = webpack(withModeConfig);

const installPort = (port) => {
  app.listen(port, (err) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(err);
      return;
    }
    // eslint-disable-next-line no-console
    console.log(`Listening on port ${port}!\n`);
  });
};

switch (process.env.NODE_ENV) {
  case "development":
    app.use(
      webpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath: withModeConfig.output.publicPath
      })
    );

    app.use(
      webpackHotMiddleware(compiler, {
        log: false,
        path: "/__webpack_hmr",
        heartbeat: 10 * 1000
      })
    );

    app.use("*", (req, res, next) => {
      const filename = join(compiler.outputPath, "/index.html");
      compiler.outputFileSystem.readFile(filename, (err, result) => {
        if (err) {
          return next(err);
        }
        res.set("content-type", "text/html");
        res.send(result);
        return res.end();
      });
    });

    installPort(process.env.PORT || 3000);
    break;
  case "production":
    app.use(express.static(resolve("build")));

    app.get("*", (req, res) => {
      res.sendFile(resolve("build", "./index.html"));
    });

    installPort(process.env.PORT || 4000);
    break;
  default:
    throw new Error("No matching configuration was found!");
}
