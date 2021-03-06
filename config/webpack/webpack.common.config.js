const { resolve } = require("path");

require("dotenv").config();

const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const CONSTANTS = new webpack.DefinePlugin(
  Object.keys(process.env).reduce((res, key) => ({ ...res, [key]: JSON.stringify(process.env[key]) }), {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV)
  })
);

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const filename = (ext) => (isDev ? `${ext}/[name].${ext}` : `${ext}/[name].[hash].${ext}`);

const cssLoaders = (extra) => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: isDev,
        reloadAll: true
      }
    },
    {
      loader: "css-loader",
      options: {
        modules: {
          localIdentName: "[name]__[local]___[hash:base64:5]"
        }
      }
    }
  ];

  if (extra) {
    const extraModify = { loader: extra };
    loaders.push(extraModify);
  }

  return loaders;
};

const babelOptions = (preset) => {
  const opts = {
    presets: ["@babel/preset-env"]
  };

  if (preset) {
    opts.presets.push(preset);
  }

  return opts;
};

const jsLoaders = () => {
  const loaders = [
    {
      loader: "babel-loader",
      options: babelOptions("@babel/preset-react")
    }
  ];
  if (isDev) {
    loaders.push({
      loader: "eslint-loader"
    });
  }

  return loaders;
};

module.exports = {
  entry: { main: ["@babel/polyfill", `./index.js`] },
  output: {
    filename: filename("js"),
    path: resolve("build"),
    publicPath: "/"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  context: resolve("src"),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: jsLoaders()
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: jsLoaders()
      },
      {
        test: /\.css$/,
        use: cssLoaders()
      },

      {
        test: /\.s[ac]ss$/,
        use: cssLoaders("sass-loader")
      },
      {
        enforce: "pre",
        test: /\.(jpg|png|gif|svg|webp)$/,
        loader: "image-webpack-loader"
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "img/",
              publicPath: "/img"
            }
          }
        ]
      },
      {
        test: /\.eot$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
              publicPath: "/fonts"
            }
          }
        ]
      },
      {
        test: /\.woff(2)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
              publicPath: "/fonts"
            }
          }
        ]
      },
      {
        test: /\.[ot]tf$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
              publicPath: "/fonts"
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10 * 1024,
              noquotes: true
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "favicon.ico"
        }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: filename("css"),
      ignoreOrder: false
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      inject: true,
      template: "index.html",
      minify: {
        collapseWhitespace: isProd
      }
    }),
    CONSTANTS
  ]
};
