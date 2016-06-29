SystemJS.config({
  babelOptions: {
    "plugins": [
      "babel-plugin-transform-decorators-legacy",
      "babel-plugin-transform-class-properties"
    ]
  },
  arvaOptions: {
    "fileMappings": {
      "github:bizboard/arva-js@develop": "../arva-js"
    }
  },
  paths: {
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/",
    "app/": "src/"
  },
  browserConfig: {
    "baseURL": "/arva-seed"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.12",
      "babel-plugin-transform-decorators": "npm:babel-plugin-transform-decorators@6.8.0",
      "module": "github:jspm/nodelibs-module@0.2.0-alpha",
      "http": "github:jspm/nodelibs-http@0.2.0-alpha",
      "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
      "url": "github:jspm/nodelibs-url@0.2.0-alpha",
      "babel-plugin-transform-decorators-legacy": "npm:babel-plugin-transform-decorators-legacy@1.3.4",
      "core-js": "npm:core-js@2.4.0",
      "babel-plugin-syntax-decorators": "npm:babel-plugin-syntax-decorators@6.8.0",
      "babel-plugin-transform-async-functions": "npm:babel-plugin-transform-async-functions@6.8.0",
      "babel-plugin-transform-runtime-constructor-name": "github:bizboard/babel-plugin-transform-runtime-constructor-name@master",
      "babel-plugin-transform-class-properties": "npm:babel-plugin-transform-class-properties@6.10.2",
      "babel-plugin-transform-es2015-classes": "npm:babel-plugin-transform-es2015-classes@6.9.0"
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
      "npm:babel-helper-explode-class@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-types": "npm:babel-types@6.10.0",
          "babel-helper-bindify-decorators": "npm:babel-helper-bindify-decorators@6.8.0",
          "babel-traverse": "npm:babel-traverse@6.9.0"
        }
      },
      "npm:babel-helper-bindify-decorators@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-traverse": "npm:babel-traverse@6.9.0",
          "babel-types": "npm:babel-types@6.10.0"
        }
      },
      "npm:babel-plugin-syntax-async-functions@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
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
      },
      "npm:babel-plugin-syntax-decorators@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-plugin-transform-decorators-legacy@1.3.4": {
        "map": {
          "babel-plugin-syntax-decorators": "npm:babel-plugin-syntax-decorators@6.8.0",
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-template": "npm:babel-template@6.9.0"
        }
      },
      "npm:babel-plugin-transform-async-functions@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-plugin-syntax-async-functions": "npm:babel-plugin-syntax-async-functions@6.8.0"
        }
      },
      "npm:babel-plugin-syntax-class-properties@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-plugin-transform-class-properties@6.10.2": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-plugin-syntax-class-properties": "npm:babel-plugin-syntax-class-properties@6.8.0"
        }
      },
      "npm:babel-template@6.9.0": {
        "map": {
          "babel-types": "npm:babel-types@6.11.1",
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "lodash": "npm:lodash@4.13.1",
          "babel-traverse": "npm:babel-traverse@6.10.4",
          "babylon": "npm:babylon@6.8.2"
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
      "npm:babel-helper-define-map@6.9.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-types": "npm:babel-types@6.11.1",
          "lodash": "npm:lodash@4.13.1",
          "babel-helper-function-name": "npm:babel-helper-function-name@6.8.0"
        }
      },
      "npm:babel-helper-function-name@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-types": "npm:babel-types@6.11.1",
          "babel-template": "npm:babel-template@6.9.0",
          "babel-traverse": "npm:babel-traverse@6.10.4",
          "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.8.0"
        }
      },
      "npm:babel-helper-get-function-arity@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-types": "npm:babel-types@6.11.1"
        }
      },
      "npm:babel-plugin-transform-es2015-classes@6.9.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-types": "npm:babel-types@6.11.1",
          "babel-helper-function-name": "npm:babel-helper-function-name@6.8.0",
          "babel-helper-replace-supers": "npm:babel-helper-replace-supers@6.8.0",
          "babel-helper-optimise-call-expression": "npm:babel-helper-optimise-call-expression@6.8.0",
          "babel-helper-define-map": "npm:babel-helper-define-map@6.9.0",
          "babel-messages": "npm:babel-messages@6.8.0",
          "babel-template": "npm:babel-template@6.9.0",
          "babel-traverse": "npm:babel-traverse@6.10.4"
        }
      },
      "npm:babel-helper-replace-supers@6.8.0": {
        "map": {
          "babel-messages": "npm:babel-messages@6.8.0",
          "babel-helper-optimise-call-expression": "npm:babel-helper-optimise-call-expression@6.8.0",
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-traverse": "npm:babel-traverse@6.10.4",
          "babel-template": "npm:babel-template@6.9.0",
          "babel-types": "npm:babel-types@6.11.1"
        }
      },
      "npm:babel-helper-optimise-call-expression@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-types": "npm:babel-types@6.11.1"
        }
      },
      "npm:babel-traverse@6.10.4": {
        "map": {
          "babel-messages": "npm:babel-messages@6.8.0",
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-types": "npm:babel-types@6.11.1",
          "lodash": "npm:lodash@4.13.1",
          "debug": "npm:debug@2.2.0",
          "globals": "npm:globals@8.18.0",
          "invariant": "npm:invariant@2.2.1",
          "babel-code-frame": "npm:babel-code-frame@6.11.0",
          "babylon": "npm:babylon@6.8.2"
        }
      },
      "npm:babel-types@6.11.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-traverse": "npm:babel-traverse@6.10.4",
          "lodash": "npm:lodash@4.13.1",
          "esutils": "npm:esutils@2.0.2",
          "to-fast-properties": "npm:to-fast-properties@1.0.2"
        }
      },
      "npm:babel-code-frame@6.11.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "esutils": "npm:esutils@2.0.2",
          "js-tokens": "npm:js-tokens@2.0.0",
          "chalk": "npm:chalk@1.1.3"
        }
      },
      "npm:babylon@6.8.2": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      }
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "app": {
      "main": "main.js",
      "format": "",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        },
        "models/*.js": {
          "loader": "plugin-babel",
          "babelOptions": {
            "plugins": [
              "babel-plugin-transform-decorators-legacy",
              "babel-plugin-transform-runtime-constructor-name",
              "babel-plugin-transform-class-properties"
            ]
          }
        },
        "controllers/*.js": {
          "loader": "plugin-babel",
          "babelOptions": {
            "plugins": [
              "babel-plugin-transform-decorators-legacy",
              "babel-plugin-transform-runtime-constructor-name",
              "babel-plugin-transform-class-properties"
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
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "css": "github:systemjs/plugin-css@0.1.23",
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
        "xml2js": "npm:xml2js@0.4.16"
      }
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "map": {
        "path-browserify": "npm:path-browserify@0.0.0"
      }
    },
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.7.0"
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
    "npm:buffer@4.7.0": {
      "map": {
        "isarray": "npm:isarray@1.0.0",
        "base64-js": "npm:base64-js@1.1.2",
        "ieee754": "npm:ieee754@1.1.6"
      }
    }
  }
});
