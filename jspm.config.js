SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/",
    "nl.bizboard.arva.seed/": "src/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.12",
      "babel-plugin-transform-decorators": "npm:babel-plugin-transform-decorators@6.8.0",
      "babel-preset-es2015": "npm:babel-preset-es2015@6.9.0",
      "module": "github:jspm/nodelibs-module@0.2.0-alpha",
      "http": "github:jspm/nodelibs-http@0.2.0-alpha",
      "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
      "url": "github:jspm/nodelibs-url@0.2.0-alpha"
    },
    "packages": {
      "npm:babel-plugin-transform-decorators@6.8.0": {
        "map": {
          "babel-helper-define-map": "npm:babel-helper-define-map@6.9.0",
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-helper-explode-class": "npm:babel-helper-explode-class@6.8.0",
          "babel-plugin-syntax-decorators": "npm:babel-plugin-syntax-decorators@6.8.0",
          "babel-template": "npm:babel-template@6.9.0",
          "babel-types": "npm:babel-types@6.10.0"
        }
      },
      "npm:babel-helper-define-map@6.9.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-types": "npm:babel-types@6.10.0",
          "lodash": "npm:lodash@4.13.1",
          "babel-helper-function-name": "npm:babel-helper-function-name@6.8.0"
        }
      },
      "npm:babel-helper-explode-class@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-types": "npm:babel-types@6.10.0",
          "babel-helper-bindify-decorators": "npm:babel-helper-bindify-decorators@6.8.0",
          "babel-traverse": "npm:babel-traverse@6.9.0"
        }
      },
      "npm:babel-helper-function-name@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-types": "npm:babel-types@6.10.0",
          "babel-template": "npm:babel-template@6.9.0",
          "babel-traverse": "npm:babel-traverse@6.9.0",
          "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.8.0"
        }
      },
      "npm:babel-helper-bindify-decorators@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-traverse": "npm:babel-traverse@6.9.0",
          "babel-types": "npm:babel-types@6.10.0"
        }
      },
      "npm:babel-helper-get-function-arity@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-types": "npm:babel-types@6.10.0"
        }
      },
      "npm:babel-preset-es2015@6.9.0": {
        "map": {
          "babel-plugin-transform-es2015-template-literals": "npm:babel-plugin-transform-es2015-template-literals@6.8.0",
          "babel-plugin-transform-es2015-function-name": "npm:babel-plugin-transform-es2015-function-name@6.9.0",
          "babel-plugin-transform-es2015-literals": "npm:babel-plugin-transform-es2015-literals@6.8.0",
          "babel-plugin-transform-es2015-shorthand-properties": "npm:babel-plugin-transform-es2015-shorthand-properties@6.8.0",
          "babel-plugin-transform-es2015-block-scoped-functions": "npm:babel-plugin-transform-es2015-block-scoped-functions@6.8.0",
          "babel-plugin-transform-es2015-classes": "npm:babel-plugin-transform-es2015-classes@6.9.0",
          "babel-plugin-transform-es2015-arrow-functions": "npm:babel-plugin-transform-es2015-arrow-functions@6.8.0",
          "babel-plugin-transform-es2015-duplicate-keys": "npm:babel-plugin-transform-es2015-duplicate-keys@6.8.0",
          "babel-plugin-transform-es2015-object-super": "npm:babel-plugin-transform-es2015-object-super@6.8.0",
          "babel-plugin-transform-es2015-unicode-regex": "npm:babel-plugin-transform-es2015-unicode-regex@6.8.0",
          "babel-plugin-transform-es2015-sticky-regex": "npm:babel-plugin-transform-es2015-sticky-regex@6.8.0",
          "babel-plugin-check-es2015-constants": "npm:babel-plugin-check-es2015-constants@6.8.0",
          "babel-plugin-transform-es2015-for-of": "npm:babel-plugin-transform-es2015-for-of@6.8.0",
          "babel-plugin-transform-es2015-spread": "npm:babel-plugin-transform-es2015-spread@6.8.0",
          "babel-plugin-transform-es2015-computed-properties": "npm:babel-plugin-transform-es2015-computed-properties@6.8.0",
          "babel-plugin-transform-es2015-typeof-symbol": "npm:babel-plugin-transform-es2015-typeof-symbol@6.8.0",
          "babel-plugin-transform-es2015-destructuring": "npm:babel-plugin-transform-es2015-destructuring@6.9.0",
          "babel-plugin-transform-es2015-block-scoping": "npm:babel-plugin-transform-es2015-block-scoping@6.10.1",
          "babel-plugin-transform-es2015-parameters": "npm:babel-plugin-transform-es2015-parameters@6.9.0",
          "babel-plugin-transform-es2015-modules-commonjs": "npm:babel-plugin-transform-es2015-modules-commonjs@6.8.0",
          "babel-plugin-transform-regenerator": "npm:babel-plugin-transform-regenerator@6.9.0"
        }
      },
      "npm:babel-plugin-transform-es2015-template-literals@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-plugin-transform-es2015-function-name@6.9.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-types": "npm:babel-types@6.10.0",
          "babel-helper-function-name": "npm:babel-helper-function-name@6.8.0"
        }
      },
      "npm:babel-plugin-transform-es2015-literals@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-plugin-transform-es2015-shorthand-properties@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-types": "npm:babel-types@6.10.0"
        }
      },
      "npm:babel-plugin-transform-es2015-block-scoped-functions@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-plugin-transform-es2015-arrow-functions@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-plugin-transform-es2015-classes@6.9.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-types": "npm:babel-types@6.10.0",
          "babel-helper-function-name": "npm:babel-helper-function-name@6.8.0",
          "babel-helper-replace-supers": "npm:babel-helper-replace-supers@6.8.0",
          "babel-helper-optimise-call-expression": "npm:babel-helper-optimise-call-expression@6.8.0",
          "babel-helper-define-map": "npm:babel-helper-define-map@6.9.0",
          "babel-messages": "npm:babel-messages@6.8.0",
          "babel-template": "npm:babel-template@6.9.0",
          "babel-traverse": "npm:babel-traverse@6.9.0"
        }
      },
      "npm:babel-plugin-transform-es2015-duplicate-keys@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-types": "npm:babel-types@6.10.0"
        }
      },
      "npm:babel-plugin-transform-es2015-sticky-regex@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-types": "npm:babel-types@6.10.0",
          "babel-helper-regex": "npm:babel-helper-regex@6.9.0"
        }
      },
      "npm:babel-plugin-transform-es2015-unicode-regex@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-helper-regex": "npm:babel-helper-regex@6.9.0",
          "regexpu-core": "npm:regexpu-core@1.0.0"
        }
      },
      "npm:babel-plugin-transform-es2015-object-super@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-helper-replace-supers": "npm:babel-helper-replace-supers@6.8.0"
        }
      },
      "npm:babel-plugin-transform-es2015-spread@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-plugin-transform-es2015-computed-properties@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-helper-define-map": "npm:babel-helper-define-map@6.9.0",
          "babel-template": "npm:babel-template@6.9.0"
        }
      },
      "npm:babel-plugin-check-es2015-constants@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-plugin-transform-es2015-typeof-symbol@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-plugin-transform-es2015-for-of@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-plugin-transform-es2015-destructuring@6.9.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-plugin-transform-es2015-block-scoping@6.10.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-types": "npm:babel-types@6.10.0",
          "babel-template": "npm:babel-template@6.9.0",
          "babel-traverse": "npm:babel-traverse@6.9.0",
          "lodash": "npm:lodash@4.13.1"
        }
      },
      "npm:babel-plugin-transform-es2015-parameters@6.9.0": {
        "map": {
          "babel-types": "npm:babel-types@6.10.0",
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-template": "npm:babel-template@6.9.0",
          "babel-traverse": "npm:babel-traverse@6.9.0",
          "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.8.0",
          "babel-helper-call-delegate": "npm:babel-helper-call-delegate@6.8.0"
        }
      },
      "npm:babel-plugin-transform-es2015-modules-commonjs@6.8.0": {
        "map": {
          "babel-types": "npm:babel-types@6.10.0",
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-template": "npm:babel-template@6.9.0",
          "babel-plugin-transform-strict-mode": "npm:babel-plugin-transform-strict-mode@6.8.0"
        }
      },
      "npm:babel-plugin-transform-regenerator@6.9.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-types": "npm:babel-types@6.10.0",
          "babel-plugin-transform-es2015-block-scoping": "npm:babel-plugin-transform-es2015-block-scoping@6.10.1",
          "babel-plugin-transform-es2015-for-of": "npm:babel-plugin-transform-es2015-for-of@6.8.0",
          "babel-traverse": "npm:babel-traverse@6.9.0",
          "babel-core": "npm:babel-core@6.9.1",
          "babylon": "npm:babylon@6.8.1",
          "private": "npm:private@0.1.6",
          "babel-plugin-syntax-async-functions": "npm:babel-plugin-syntax-async-functions@6.8.0"
        }
      },
      "npm:babel-helper-replace-supers@6.8.0": {
        "map": {
          "babel-messages": "npm:babel-messages@6.8.0",
          "babel-helper-optimise-call-expression": "npm:babel-helper-optimise-call-expression@6.8.0",
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-traverse": "npm:babel-traverse@6.9.0",
          "babel-template": "npm:babel-template@6.9.0",
          "babel-types": "npm:babel-types@6.10.0"
        }
      },
      "npm:babel-helper-optimise-call-expression@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-types": "npm:babel-types@6.10.0"
        }
      },
      "npm:babel-helper-regex@6.9.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-types": "npm:babel-types@6.10.0",
          "lodash": "npm:lodash@4.13.1"
        }
      },
      "npm:babel-core@6.9.1": {
        "map": {
          "babel-messages": "npm:babel-messages@6.8.0",
          "babel-template": "npm:babel-template@6.9.0",
          "babel-traverse": "npm:babel-traverse@6.9.0",
          "babylon": "npm:babylon@6.8.1",
          "private": "npm:private@0.1.6",
          "babel-types": "npm:babel-types@6.10.0",
          "lodash": "npm:lodash@4.13.1",
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "source-map": "npm:source-map@0.5.6",
          "debug": "npm:debug@2.2.0",
          "babel-code-frame": "npm:babel-code-frame@6.8.0",
          "babel-register": "npm:babel-register@6.9.0",
          "babel-helpers": "npm:babel-helpers@6.8.0",
          "slash": "npm:slash@1.0.0",
          "path-is-absolute": "npm:path-is-absolute@1.0.0",
          "path-exists": "npm:path-exists@1.0.0",
          "shebang-regex": "npm:shebang-regex@1.0.0",
          "convert-source-map": "npm:convert-source-map@1.2.0",
          "json5": "npm:json5@0.4.0",
          "babel-generator": "npm:babel-generator@6.10.0",
          "minimatch": "npm:minimatch@2.0.10"
        }
      },
      "npm:babel-helper-call-delegate@6.8.0": {
        "map": {
          "babel-traverse": "npm:babel-traverse@6.9.0",
          "babel-types": "npm:babel-types@6.10.0",
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-helper-hoist-variables": "npm:babel-helper-hoist-variables@6.8.0"
        }
      },
      "npm:regexpu-core@1.0.0": {
        "map": {
          "regjsparser": "npm:regjsparser@0.1.5",
          "regjsgen": "npm:regjsgen@0.2.0",
          "regenerate": "npm:regenerate@1.3.1"
        }
      },
      "npm:babel-plugin-transform-strict-mode@6.8.0": {
        "map": {
          "babel-types": "npm:babel-types@6.10.0",
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-register@6.9.0": {
        "map": {
          "lodash": "npm:lodash@4.13.1",
          "babel-core": "npm:babel-core@6.9.1",
          "path-exists": "npm:path-exists@1.0.0",
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "core-js": "npm:core-js@2.4.0",
          "home-or-tmp": "npm:home-or-tmp@1.0.0",
          "mkdirp": "npm:mkdirp@0.5.1",
          "source-map-support": "npm:source-map-support@0.2.10"
        }
      },
      "npm:babel-helpers@6.8.0": {
        "map": {
          "babel-template": "npm:babel-template@6.9.0",
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-generator@6.10.0": {
        "map": {
          "babel-messages": "npm:babel-messages@6.8.0",
          "babel-types": "npm:babel-types@6.10.0",
          "lodash": "npm:lodash@4.13.1",
          "source-map": "npm:source-map@0.5.6",
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "detect-indent": "npm:detect-indent@3.0.1"
        }
      },
      "npm:babel-helper-hoist-variables@6.8.0": {
        "map": {
          "babel-types": "npm:babel-types@6.10.0",
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-plugin-syntax-async-functions@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:regjsparser@0.1.5": {
        "map": {
          "jsesc": "npm:jsesc@0.5.0"
        }
      },
      "npm:minimatch@2.0.10": {
        "map": {
          "brace-expansion": "npm:brace-expansion@1.1.4"
        }
      },
      "npm:source-map-support@0.2.10": {
        "map": {
          "source-map": "npm:source-map@0.1.32"
        }
      },
      "npm:home-or-tmp@1.0.0": {
        "map": {
          "os-tmpdir": "npm:os-tmpdir@1.0.1",
          "user-home": "npm:user-home@1.1.1"
        }
      },
      "npm:detect-indent@3.0.1": {
        "map": {
          "repeating": "npm:repeating@1.1.3",
          "get-stdin": "npm:get-stdin@4.0.1",
          "minimist": "npm:minimist@1.2.0"
        }
      },
      "npm:brace-expansion@1.1.4": {
        "map": {
          "concat-map": "npm:concat-map@0.0.1",
          "balanced-match": "npm:balanced-match@0.4.1"
        }
      },
      "npm:source-map@0.1.32": {
        "map": {
          "amdefine": "npm:amdefine@1.0.0"
        }
      },
      "npm:mkdirp@0.5.1": {
        "map": {
          "minimist": "npm:minimist@0.0.8"
        }
      },
      "npm:repeating@1.1.3": {
        "map": {
          "is-finite": "npm:is-finite@1.0.1"
        }
      },
      "npm:is-finite@1.0.1": {
        "map": {
          "number-is-nan": "npm:number-is-nan@1.0.0"
        }
      },
      "github:jspm/nodelibs-http@0.2.0-alpha": {
        "map": {
          "http-browserify": "npm:stream-http@2.3.0"
        }
      },
      "npm:stream-http@2.3.0": {
        "map": {
          "inherits": "npm:inherits@2.0.1",
          "readable-stream": "npm:readable-stream@2.1.4",
          "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
          "xtend": "npm:xtend@4.0.1",
          "to-arraybuffer": "npm:to-arraybuffer@1.0.1"
        }
      },
      "github:jspm/nodelibs-url@0.2.0-alpha": {
        "map": {
          "url-browserify": "npm:url@0.11.0"
        }
      },
      "npm:url@0.11.0": {
        "map": {
          "punycode": "npm:punycode@1.3.2",
          "querystring": "npm:querystring@0.2.0"
        }
      }
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "nl.bizboard.arva.seed": {
      "main": "main.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel",
          "babelOptions": {
            "presets": [
              "babel-preset-es2015"
            ],
            "plugins": [
              "babel-plugin-transform-decorators-legacy"
            ]
          }
        },
        "*.css": {
          "loader": "systemjs/plugin-css"
        },
        "*.svg": {
          "loader": "arva-js/utils/ImageLoader.js"
        },
        "*.gif": {
          "loader": "arva-js/utils/ImageLoader.js"
        },
        "*.png": {
          "loader": "arva-js/utils/ImageLoader.js"
        },
        "*.jpg": {
          "loader": "arva-js/utils/ImageLoader.js"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "arva-js": "github:bizboard/arva-js@develop",
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "babel-plugin-transform-decorators-legacy": "npm:babel-plugin-transform-decorators-legacy@1.3.4",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "di": "github:bizboard/di.js@master",
    "events": "github:jspm/nodelibs-events@0.2.0-alpha",
    "famous": "github:bizboard/famous@develop",
    "famous-flex": "github:bizboard/famous-flex@master",
    "fastclick": "npm:fastclick@1.0.6",
    "firebase": "github:firebase/firebase-bower@3.0.5",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "lodash": "npm:lodash@4.13.1",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
    "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
    "systemjs/plugin-css": "github:systemjs/plugin-css@0.1.23",
    "timers": "github:jspm/nodelibs-timers@0.2.0-alpha",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha",
    "vm": "github:jspm/nodelibs-vm@0.2.0-alpha"
  },
  packages: {
    "github:bizboard/arva-js@develop": {
      "map": {
        "ordered-hashmap": "npm:ordered-hashmap@1.0.0",
        "camelcase": "npm:camelcase@2.1.1",
        "bowser": "npm:bowser@1.3.0",
        "eventemitter3": "npm:eventemitter3@1.2.0",
        "lodash": "npm:lodash@4.13.1",
        "di": "github:bizboard/di.js@master",
        "fs": "github:jspm/nodelibs-fs@0.1.2",
        "path": "github:jspm/nodelibs-path@0.1.0",
        "firebase": "github:firebase/firebase-bower@3.0.5",
        "request-animation-frame-mock": "github:erykpiast/request-animation-frame-mock@0.1.8",
        "famous-flex": "github:bizboard/famous-flex@master",
        "famous": "github:bizboard/famous@develop",
        "SPSoapAdapter": "github:bizboard/SPSoapAdapter@develop"
      }
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "map": {
        "path-browserify": "npm:path-browserify@0.0.0"
      }
    },
    "github:bizboard/SPSoapAdapter@develop": {
      "map": {
        "eventemitter3": "npm:eventemitter3@1.2.0",
        "lodash": "npm:lodash@4.13.1",
        "xml2js": "npm:xml2js@0.4.16",
        "json-query": "npm:json-query@1.8.0",
        "arva-utils": "github:bizboard/arva-utils@develop"
      }
    },
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.6.0"
      }
    },
    "npm:buffer@4.6.0": {
      "map": {
        "isarray": "npm:isarray@1.0.0",
        "base64-js": "npm:base64-js@1.1.2",
        "ieee754": "npm:ieee754@1.1.6"
      }
    },
    "npm:xml2js@0.4.16": {
      "map": {
        "sax": "npm:sax@1.2.1",
        "xmlbuilder": "npm:xmlbuilder@4.2.1"
      }
    },
    "npm:xmlbuilder@4.2.1": {
      "map": {
        "lodash": "npm:lodash@4.13.1"
      }
    },
    "github:bizboard/arva-utils@develop": {
      "map": {
        "bowser": "npm:bowser@1.3.0",
        "calmelcase": "npm:camelcase@2.1.1",
        "lodash": "npm:lodash@4.13.1",
        "di": "github:bizboard/di.js@master",
        "fs": "github:jspm/nodelibs-fs@0.1.2",
        "path": "github:jspm/nodelibs-path@0.1.0"
      }
    },
    "github:jspm/nodelibs-string_decoder@0.2.0-alpha": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "github:jspm/nodelibs-stream@0.2.0-alpha": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "readable-stream": "npm:readable-stream@2.1.4",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:readable-stream@2.1.4": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "isarray": "npm:isarray@1.0.0",
        "string_decoder": "npm:string_decoder@0.10.31",
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "core-util-is": "npm:core-util-is@1.0.2",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "github:jspm/nodelibs-timers@0.2.0-alpha": {
      "map": {
        "timers-browserify": "npm:timers-browserify@1.4.2"
      }
    },
    "npm:timers-browserify@1.4.2": {
      "map": {
        "process": "npm:process@0.11.5"
      }
    },
    "npm:babel-plugin-syntax-decorators@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2"
      }
    },
    "npm:babel-template@6.9.0": {
      "map": {
        "babel-types": "npm:babel-types@6.10.0",
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "lodash": "npm:lodash@4.13.1",
        "babel-traverse": "npm:babel-traverse@6.9.0",
        "babylon": "npm:babylon@6.8.1"
      }
    },
    "npm:babel-types@6.10.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "lodash": "npm:lodash@4.13.1",
        "babel-traverse": "npm:babel-traverse@6.9.0",
        "to-fast-properties": "npm:to-fast-properties@1.0.2",
        "esutils": "npm:esutils@2.0.2"
      }
    },
    "npm:babel-runtime@6.9.2": {
      "map": {
        "regenerator-runtime": "npm:regenerator-runtime@0.9.5",
        "core-js": "npm:core-js@2.4.0"
      }
    },
    "npm:babel-traverse@6.9.0": {
      "map": {
        "lodash": "npm:lodash@4.13.1",
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "babel-types": "npm:babel-types@6.10.0",
        "babylon": "npm:babylon@6.8.1",
        "babel-messages": "npm:babel-messages@6.8.0",
        "invariant": "npm:invariant@2.2.1",
        "debug": "npm:debug@2.2.0",
        "babel-code-frame": "npm:babel-code-frame@6.8.0",
        "globals": "npm:globals@8.18.0"
      }
    },
    "npm:babylon@6.8.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2"
      }
    },
    "npm:babel-messages@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2"
      }
    },
    "npm:babel-code-frame@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "esutils": "npm:esutils@2.0.2",
        "chalk": "npm:chalk@1.1.3",
        "js-tokens": "npm:js-tokens@1.0.3"
      }
    },
    "npm:invariant@2.2.1": {
      "map": {
        "loose-envify": "npm:loose-envify@1.2.0"
      }
    },
    "npm:debug@2.2.0": {
      "map": {
        "ms": "npm:ms@0.7.1"
      }
    },
    "npm:loose-envify@1.2.0": {
      "map": {
        "js-tokens": "npm:js-tokens@1.0.3"
      }
    },
    "npm:chalk@1.1.3": {
      "map": {
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "ansi-styles": "npm:ansi-styles@2.2.1",
        "has-ansi": "npm:has-ansi@2.0.0",
        "supports-color": "npm:supports-color@2.0.0",
        "strip-ansi": "npm:strip-ansi@3.0.1"
      }
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:babel-plugin-transform-decorators-legacy@1.3.4": {
      "map": {
        "babel-plugin-syntax-decorators": "npm:babel-plugin-syntax-decorators@6.8.0",
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "babel-template": "npm:babel-template@6.9.0"
      }
    }
  }
});
