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
};
