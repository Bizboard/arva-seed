/**
 * Created by lundfall on 19/07/2017.
 */

/**
 * Created by lundfall on 19/07/2017.
 */

const changeBabelConfig   = require('./babelSetup/changeBabelConfig');

let compatibilityBabelPlugins = {
  "plugins": [
    "babel-plugin-transform-decorators-legacy",
    "babel-plugin-transform-class-properties",
    [
      "babel-plugin-transform-builtin-extend",
      {
        "globals": [
          "Array"
        ],
        "approximate": true
      }
    ],
    [
      "babel-plugin-transform-es2015-spread",
      {
        "loose": true
      }
    ],
    [
      "babel-plugin-transform-es2015-for-of",
      {
        "loose": true
      }
    ]
  ]
}

let modernBabelPlugin = {
  'plugins': ['babel-plugin-transform-decorators-legacy', 'babel-plugin-transform-class-properties'],
  'es2015': false,
  'stage3': true,
  'stage2': true,
  'stage1': false
};


changeBabelConfig(process.argv.splice(2).find((arg) => arg === '--compatible') ? compatibilityBabelPlugins : modernBabelPlugin);