const express = require("express");
require("dotenv").config();
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");

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

console.log("env port", port);

app.use("/public", express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

// app.get('*', function(req, res) {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Listening on port ${port}!\n`);
});
