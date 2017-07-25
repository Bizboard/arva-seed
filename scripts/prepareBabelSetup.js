/**
 * Created by lundfall on 19/07/2017.
 */

/**
 * Created by lundfall on 19/07/2017.
 */

const changeJspmConfig = require('./babelSetup/changeJspmConfig')
let previousMetaOptions;
global.SystemJS = {
  config: (configOptions) => {
    if(configOptions.packages && configOptions.packages.app){
      previousMetaOptions = configOptions.packages.app.meta;
    }
  }
}



require('../jspm.config');


let compatibilityBabelPlugins = {
  'plugins': [
    'babel-plugin-transform-decorators-legacy',
    'babel-plugin-transform-class-properties',
    [
      'babel-plugin-transform-builtin-extend',
      {
        'globals': [
          'Array'
        ],
        'approximate': true
      }
    ],
    [
      'babel-plugin-transform-es2015-spread',
      {
        'loose': true
      }
    ],
    [
      'babel-plugin-transform-es2015-for-of',
      {
        'loose': true
      }
    ]
  ]
}

let modernBabelPlugin = {
  'plugins': [
    'babel-plugin-transform-es2015-destructuring',
    'babel-plugin-transform-object-rest-spread',
    'babel-plugin-transform-decorators-legacy',
    'babel-plugin-transform-class-properties',
    'babel-plugin-syntax-async-functions',
    'babel-plugin-transform-es2015-spread'
  ],
  'es2016': true,
  'es2015': false,
  'stage3': false,
  'stage2': true,
  'stage1': false
}

let modernBabelSpecialTransform =
  Object.assign({}, modernBabelPlugin,
    {plugins: [...modernBabelPlugin.plugins, 'babel-plugin-transform-runtime-constructor-name']});
let compatibleBabelSpecialTransform = {
  'plugins': [
    'babel-plugin-transform-decorators-legacy',
    'babel-plugin-transform-runtime-constructor-name',
    'babel-plugin-transform-class-properties'
  ]
}

let isCompatibleFlagPassed = process.argv.splice(2).find((arg) => arg === '--compatible')
let overallTranspile = isCompatibleFlagPassed ? compatibilityBabelPlugins : modernBabelPlugin
let specialTranspile = isCompatibleFlagPassed ? compatibleBabelSpecialTransform : modernBabelSpecialTransform

changeJspmConfig({
  babelOptions: overallTranspile,
  packages: {
    app: {
      meta: Object.assign({}, previousMetaOptions, {
        'models/*.js': {
          'loader': 'plugin-babel',
          'babelOptions': specialTranspile
        },
        'controllers/*.js': {
          'loader': 'plugin-babel',
          'babelOptions': specialTranspile
        }
      })
    }
  }
})