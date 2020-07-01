const { resolve } = require("path");

require("dotenv").config();

// const objectHash = require("object-hash");

const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const eslintCacheIdentifier = objectHash(require("./.eslintrc"));

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
    { loader: "css-loader", options: { sourceMap: false } }
  ];

  if (extra) {
    const extraModify = { loader: extra, options: { sourceMap: false } };
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
      options: babelOptions()
    }
  ];
  if (isDev) {
    loaders.push({
      loader: "eslint-loader"
      // options: {
      //   cache: true,
      //   cacheIdentifer: isDev ? [] : eslintCacheIdentifier
      // }
    });
  }

  return loaders;
};

const config = {
  entry: ["./index.js"],
  output: {
    filename: filename("js"),
    path: resolve(__dirname, "build")
  },
  context: resolve(__dirname, "src"),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: /src/,
        use: jsLoaders()
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        include: /src/,
        loader: {
          loader: "babel-loader",
          options: babelOptions("@babel/preset-react")
        }
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
        test: /\.less$/,
        use: cssLoaders("less-loader")
      },
      {
        enforce: "pre",
        test: /\.(jpg|png|gif|svg|webp)$/,
        loader: "image-webpack-loader"
      },
      {
        test: /\.(jpg|png|gif|webp)$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      },
      {
        test: /\.eot$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      },
      {
        test: /\.woff(2)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/"
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
              outputPath: "fonts/"
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
    new CopyWebpackPlugin(
      {
        patterns: [
          { from: "assets/images", to: "assets/images" },
          { from: "assets/fonts", to: "assets/fonts" }
        ]
      },
      { parallel: 100 }
    ),
    new MiniCssExtractPlugin({
      filename: filename("css"),
      ignoreOrder: false
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      inject: true,
      template: resolve(__dirname, "src", "index.html"),
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    CONSTANTS
  ]
};
module.exports = config;
