const express = require("express");
require("dotenv").config();
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const path = require("path");

const config = require("../webpack.development.config");

const app = express();
const port = process.env.PORT || 3000;
const compiler = webpack(config);

app.use(
  webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
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
  const filename = path.join(compiler.outputPath, "/index.html");
  compiler.outputFileSystem.readFile(filename, (err, result) => {
    if (err) {
      return next(err);
    }
    res.set("content-type", "text/html");
    res.send(result);
    return res.end();
  });
});

// eslint-disable-next-line no-console
console.log("env port", port);

app.use("/public", express.static("public"));

app.listen(port, (err) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    return;
  }
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${port}!\n`);
});
