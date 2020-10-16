module.exports = {
  env: {
    test: {
      presets: [
        [
          "@babel/preset-env",
          {
            modules: "commonjs",
            debug: false
          }
        ],
        "@babel/preset-react"
      ],
      plugins: [
        "@babel/plugin-transform-modules-commonjs",
        "@babel/plugin-syntax-jsx",
        "@babel/plugin-syntax-dynamic-import"
      ]
    },
    production: {
      presets: [["@babel/preset-env", { modules: false }], "@babel/preset-react"],
      plugins: ["@babel/plugin-syntax-dynamic-import"]
    },
    development: {
      presets: [["@babel/preset-env", { modules: false }], "@babel/preset-react"],
      plugins: ["@babel/plugin-syntax-dynamic-import"]
    }
  }
};

//  "babel": {
//    "presets": [
//      "@babel/preset-env",
//      "@babel/preset-react"
//    ],
//    "plugins": [
//      [
//        "@babel/plugin-proposal-class-properties"
//      ]
//    ]
//  },
