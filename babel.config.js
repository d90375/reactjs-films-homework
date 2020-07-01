module.exports = {
  presets: [
    [
      "@babel/env",
      {
        targets: {
          browsers: "> 0.25%, not dead"
        }
      }
    ],
    "@babel/react"
  ],
  plugins: process.env.NODE_ENV === "development" ? ["react-hot-loader/babel"] : []
};
