module.exports = {
  env: {
    test: {
      presets: [
        [
          "@babel/preset-env",
          {
            debug: false
          }
        ],
        "@babel/preset-react"
      ]
    }
  }
};
