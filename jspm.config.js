SystemJS.config({
  babelOptions: {
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
  },
  arvaOptions: {
    "fileMappings": {
      "github:bizboard/arva-js@develop": "../arva-js",
      "github:bizboard/famous-flex@master": "../famous-flex"
    },
    "iconOptions": {
      "form": "rounded",
      "thickness": "bold"
    }
  },
  paths: {
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/",
    "app/": "src/",
    "bitbucket:": "jspm_packages/bitbucket/"
  },
  browserConfig: {
    "baseURL": "/arva-seed"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.12",
      "babel-plugin-transform-decorators": "npm:babel-plugin-transform-decorators@6.8.0",
      "module": "npm:jspm-nodelibs-module@0.2.0",
      "http": "npm:jspm-nodelibs-http@0.2.0",
      "url": "npm:jspm-nodelibs-url@0.2.0",
      "babel-plugin-transform-decorators-legacy": "npm:babel-plugin-transform-decorators-legacy@1.3.4",
      "core-js": "npm:core-js@2.4.1",
      "babel-plugin-syntax-decorators": "npm:babel-plugin-syntax-decorators@6.8.0",
      "babel-plugin-transform-async-functions": "npm:babel-plugin-transform-async-functions@6.8.0",
      "babel-plugin-transform-runtime-constructor-name": "github:bizboard/babel-plugin-transform-runtime-constructor-name@master",
      "babel-plugin-transform-class-properties": "npm:babel-plugin-transform-class-properties@6.10.2",
      "babel-plugin-transform-es2015-classes": "npm:babel-plugin-transform-es2015-classes@6.9.0",
      "babel-plugin-transform-builtin-extend": "npm:babel-plugin-transform-builtin-extend@1.1.0",
      "babel-plugin-transform-es2015-spread": "npm:babel-plugin-transform-es2015-spread@6.8.0",
      "babel-plugin-transform-es2015-for-of": "npm:babel-plugin-transform-es2015-for-of@6.8.0"
    },
    "packages": {
      "npm:babel-plugin-transform-decorators@6.8.0": {
        "map": {
          "babel-helper-define-map": "npm:babel-helper-define-map@6.9.0",
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-helper-explode-class": "npm:babel-helper-explode-class@6.8.0",
          "babel-plugin-syntax-decorators": "npm:babel-plugin-syntax-decorators@6.8.0",
          "babel-template": "npm:babel-template@6.9.0",
          "babel-types": "npm:babel-types@6.11.1"
        }
      },
      "npm:babel-helper-explode-class@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-types": "npm:babel-types@6.11.1",
          "babel-helper-bindify-decorators": "npm:babel-helper-bindify-decorators@6.8.0",
          "babel-traverse": "npm:babel-traverse@6.10.4"
        }
      },
      "npm:babel-helper-bindify-decorators@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-traverse": "npm:babel-traverse@6.10.4",
          "babel-types": "npm:babel-types@6.11.1"
        }
      },
      "npm:babel-plugin-syntax-async-functions@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
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
          "lodash": "npm:lodash@4.17.4",
          "babel-traverse": "npm:babel-traverse@6.11.4",
          "babylon": "npm:babylon@6.8.4"
        }
      },
      "npm:babel-messages@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
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
          "lodash": "npm:lodash@4.17.4",
          "babel-helper-function-name": "npm:babel-helper-function-name@6.8.0"
        }
      },
      "npm:babel-helper-function-name@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-types": "npm:babel-types@6.11.1",
          "babel-template": "npm:babel-template@6.9.0",
          "babel-traverse": "npm:babel-traverse@6.11.4",
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
          "babel-traverse": "npm:babel-traverse@6.11.4"
        }
      },
      "npm:babel-helper-replace-supers@6.8.0": {
        "map": {
          "babel-messages": "npm:babel-messages@6.8.0",
          "babel-helper-optimise-call-expression": "npm:babel-helper-optimise-call-expression@6.8.0",
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-traverse": "npm:babel-traverse@6.11.4",
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
          "lodash": "npm:lodash@4.17.4",
          "debug": "npm:debug@2.2.0",
          "globals": "npm:globals@8.18.0",
          "invariant": "npm:invariant@2.2.1",
          "babel-code-frame": "npm:babel-code-frame@6.11.0",
          "babylon": "npm:babylon@6.8.4"
        }
      },
      "npm:babel-types@6.11.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-traverse": "npm:babel-traverse@6.11.4",
          "lodash": "npm:lodash@4.17.4",
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
      "npm:babel-plugin-transform-builtin-extend@1.1.0": {
        "map": {
          "babel-template": "npm:babel-template@6.9.0",
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babylon@6.8.4": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-plugin-transform-es2015-for-of@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-plugin-transform-es2015-spread@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-traverse@6.11.4": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-types": "npm:babel-types@6.11.1",
          "babylon": "npm:babylon@6.8.4",
          "babel-messages": "npm:babel-messages@6.8.0",
          "babel-code-frame": "npm:babel-code-frame@6.11.0",
          "debug": "npm:debug@2.2.0",
          "globals": "npm:globals@8.18.0",
          "invariant": "npm:invariant@2.2.1",
          "lodash": "npm:lodash@4.17.4"
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
      "npm:jspm-nodelibs-http@0.2.0": {
        "map": {
          "http-browserify": "npm:stream-http@2.3.0"
        }
      },
      "npm:jspm-nodelibs-url@0.2.0": {
        "map": {
          "url-browserify": "npm:url@0.11.0"
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
          "loader": "css"
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
  },
  map: {
    "text": "github:bizboard/arva-js@develop/utils/IconLoader.js"
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json",
    "bitbucket:*/*.json",
    "bitbucket:*.json"
  ],
  map: {
    "double-ended-queue": "npm:double-ended-queue@2.1.0-0",
    "bizboard/arva-kit": "bitbucket:bizboard/arva-kit@0.0.7",
    "eventemitter3": "npm:eventemitter3@2.0.2",
    "observe-js": "npm:observe-js@0.5.7",
    "object-assign": "npm:object-assign@4.1.1",
    "fastclick": "npm:fastclick@1.0.6",
    "famous-autosizetextarea": "github:ijzerenhein/famous-autosizetextarea@0.3.1",
    "es6-map": "npm:es6-map@0.1.5",
    "arva-js": "github:bizboard/arva-js@develop",
    "assert": "npm:jspm-nodelibs-assert@0.2.0",
    "babel-polyfill": "npm:babel-polyfill@6.9.1",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.0",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.0",
    "constants": "npm:jspm-nodelibs-constants@0.2.0",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.0",
    "css": "github:systemjs/plugin-css@0.1.23",
    "events": "npm:jspm-nodelibs-events@0.2.0",
    "famous": "github:bizboard/famous@develop",
    "famous-flex": "github:bizboard/famous-flex@master",
    "firebase": "github:firebase/firebase-bower@3.9.0",
    "fs": "npm:jspm-nodelibs-fs@0.2.0",
    "lodash": "npm:lodash@4.17.4",
    "os": "npm:jspm-nodelibs-os@0.2.0",
    "path": "npm:jspm-nodelibs-path@0.2.0",
    "process": "npm:jspm-nodelibs-process@0.2.1",
    "stream": "npm:jspm-nodelibs-stream@0.2.0",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.0",
    "timers": "npm:jspm-nodelibs-timers@0.2.0",
    "util": "npm:jspm-nodelibs-util@0.2.0",
    "vm": "npm:jspm-nodelibs-vm@0.2.0",
    "weakee": "npm:weakee@1.0.0"
  },
  packages: {
    "npm:stream-browserify@2.0.1": {
      "map": {
        "readable-stream": "npm:readable-stream@2.3.2",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:timers-browserify@1.4.2": {
      "map": {
        "process": "npm:process@0.11.10"
      }
    },
    "npm:babel-runtime@6.9.2": {
      "map": {
        "regenerator-runtime": "npm:regenerator-runtime@0.9.5",
        "core-js": "npm:core-js@2.4.1"
      }
    },
    "npm:babel-polyfill@6.9.1": {
      "map": {
        "regenerator-runtime": "npm:regenerator-runtime@0.9.5",
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "core-js": "npm:core-js@2.4.1"
      }
    },
    "npm:buffer@4.9.1": {
      "map": {
        "isarray": "npm:isarray@1.0.0",
        "base64-js": "npm:base64-js@1.2.1",
        "ieee754": "npm:ieee754@1.1.8"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "browserify-sign": "npm:browserify-sign@4.0.4",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "create-hmac": "npm:create-hmac@1.1.6",
        "create-hash": "npm:create-hash@1.1.3",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "randombytes": "npm:randombytes@2.0.5",
        "pbkdf2": "npm:pbkdf2@3.0.12"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.5",
        "miller-rabin": "npm:miller-rabin@4.0.0",
        "bn.js": "npm:bn.js@4.11.7"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "randombytes": "npm:randombytes@2.0.5",
        "parse-asn1": "npm:parse-asn1@5.1.0",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "bn.js": "npm:bn.js@4.11.7"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "elliptic": "npm:elliptic@6.4.0",
        "bn.js": "npm:bn.js@4.11.7"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "randombytes": "npm:randombytes@2.0.5",
        "bn.js": "npm:bn.js@4.11.7"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "browserify-des": "npm:browserify-des@1.0.0",
        "browserify-aes": "npm:browserify-aes@1.0.6"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "brorand": "npm:brorand@1.1.0",
        "bn.js": "npm:bn.js@4.11.7"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.3",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.3",
        "create-hash": "npm:create-hash@1.1.3",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "github:bizboard/arva-js@develop": {
      "map": {
        "bowser": "npm:bowser@1.4.4",
        "eventemitter3": "npm:eventemitter3@1.2.0",
        "camelcase": "npm:camelcase@2.1.1",
        "observe-js": "npm:observe-js@0.5.7",
        "ordered-hashmap": "npm:ordered-hashmap@1.0.0",
        "lodash": "npm:lodash@4.17.4",
        "fastclick": "npm:fastclick@1.0.6",
        "xml2js": "npm:xml2js@0.4.17",
        "fs": "npm:jspm-nodelibs-fs@0.2.0",
        "path": "npm:jspm-nodelibs-path@0.2.0",
        "firebase": "github:firebase/firebase-bower@3.9.0",
        "request-animation-frame-mock": "github:erykpiast/request-animation-frame-mock@0.1.8",
        "famous": "github:bizboard/famous@develop",
        "famous-flex": "github:bizboard/famous-flex@master",
        "lodash-decorators": "npm:lodash-decorators@3.0.1"
      }
    },
    "npm:xml2js@0.4.17": {
      "map": {
        "xmlbuilder": "npm:xmlbuilder@4.2.1",
        "sax": "npm:sax@1.2.4"
      }
    },
    "npm:xmlbuilder@4.2.1": {
      "map": {
        "lodash": "npm:lodash@4.17.4"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.0": {
      "map": {
        "buffer-browserify": "npm:buffer@4.9.1"
      }
    },
    "npm:jspm-nodelibs-os@0.2.0": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.0": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:jspm-nodelibs-timers@0.2.0": {
      "map": {
        "timers-browserify": "npm:timers-browserify@1.4.2"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.0": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.0": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "github:bizboard/famous-flex@master": {
      "map": {
        "es6-map": "npm:es6-map@0.1.5"
      }
    },
    "npm:lodash-decorators@3.0.1": {
      "map": {
        "lodash": "npm:lodash@4.0.1"
      }
    },
    "bitbucket:bizboard/arva-kit@0.0.7": {
      "map": {
        "color": "npm:color@0.11.4",
        "rgbcolor": "npm:rgbcolor@0.0.4",
        "bowser": "npm:bowser@1.4.3",
        "degrees-radians": "npm:degrees-radians@1.0.3",
        "lodash": "npm:lodash@4.17.4",
        "famous-autosizetextarea": "github:ijzerenhein/famous-autosizetextarea@0.3.1",
        "famous-flex": "github:bizboard/famous-flex@1.4.1",
        "arva-js": "github:bizboard/arva-js@1.3.1",
        "famous-bkimagesurface": "github:bizboard/famous-bkimagesurface@master",
        "famous": "github:bizboard/famous@0.4.1"
      }
    },
    "npm:color@0.11.4": {
      "map": {
        "clone": "npm:clone@1.0.2",
        "color-convert": "npm:color-convert@1.9.0",
        "color-string": "npm:color-string@0.3.0"
      }
    },
    "npm:color-string@0.3.0": {
      "map": {
        "color-name": "npm:color-name@1.1.2"
      }
    },
    "npm:color-convert@1.9.0": {
      "map": {
        "color-name": "npm:color-name@1.1.2"
      }
    },
    "npm:browserify-sign@4.0.4": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "create-hmac": "npm:create-hmac@1.1.6",
        "create-hash": "npm:create-hash@1.1.3",
        "bn.js": "npm:bn.js@4.11.7",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.1.0",
        "elliptic": "npm:elliptic@6.4.0"
      }
    },
    "github:bizboard/arva-js@1.3.1": {
      "map": {
        "bowser": "npm:bowser@1.7.0",
        "lodash": "npm:lodash@4.17.4",
        "famous": "github:bizboard/famous@0.4.1",
        "famous-flex": "github:bizboard/famous-flex@1.4.1",
        "camelcase": "npm:camelcase@2.1.1",
        "lodash-decorators": "npm:lodash-decorators@3.0.2",
        "xml2js": "npm:xml2js@0.4.17",
        "ordered-hashmap": "npm:ordered-hashmap@1.0.0",
        "fastclick": "npm:fastclick@1.0.6",
        "eventemitter3": "npm:eventemitter3@1.2.0",
        "request-animation-frame-mock": "github:erykpiast/request-animation-frame-mock@0.1.8",
        "firebase": "github:firebase/firebase-bower@3.9.0"
      }
    },
    "npm:create-hash@1.1.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "ripemd160": "npm:ripemd160@2.0.1",
        "cipher-base": "npm:cipher-base@1.0.3",
        "sha.js": "npm:sha.js@2.4.8"
      }
    },
    "npm:create-hmac@1.1.6": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "create-hash": "npm:create-hash@1.1.3",
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "ripemd160": "npm:ripemd160@2.0.1",
        "cipher-base": "npm:cipher-base@1.0.3",
        "sha.js": "npm:sha.js@2.4.8"
      }
    },
    "npm:pbkdf2@3.0.12": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.6",
        "create-hash": "npm:create-hash@1.1.3",
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "ripemd160": "npm:ripemd160@2.0.1",
        "sha.js": "npm:sha.js@2.4.8"
      }
    },
    "npm:randombytes@2.0.5": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "github:bizboard/famous-flex@1.4.1": {
      "map": {
        "es6-map": "npm:es6-map@0.1.5"
      }
    },
    "npm:ripemd160@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "hash-base": "npm:hash-base@2.0.2"
      }
    },
    "npm:elliptic@6.4.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "bn.js": "npm:bn.js@4.11.7",
        "hmac-drbg": "npm:hmac-drbg@1.0.1",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
        "brorand": "npm:brorand@1.1.0",
        "hash.js": "npm:hash.js@1.1.2",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:parse-asn1@5.1.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "create-hash": "npm:create-hash@1.1.3",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.12",
        "asn1.js": "npm:asn1.js@4.9.1"
      }
    },
    "npm:cipher-base@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:sha.js@2.4.8": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:lodash-decorators@3.0.2": {
      "map": {
        "lodash": "npm:lodash@4.17.4"
      }
    },
    "npm:es6-map@0.1.5": {
      "map": {
        "d": "npm:d@1.0.0",
        "es6-iterator": "npm:es6-iterator@2.0.1",
        "event-emitter": "npm:event-emitter@0.3.5",
        "es6-symbol": "npm:es6-symbol@3.1.1",
        "es6-set": "npm:es6-set@0.1.5",
        "es5-ext": "npm:es5-ext@0.10.23"
      }
    },
    "npm:hash.js@1.1.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:es6-symbol@3.1.1": {
      "map": {
        "es5-ext": "npm:es5-ext@0.10.23",
        "d": "npm:d@1.0.0"
      }
    },
    "npm:event-emitter@0.3.5": {
      "map": {
        "es5-ext": "npm:es5-ext@0.10.23",
        "d": "npm:d@1.0.0"
      }
    },
    "npm:es6-iterator@2.0.1": {
      "map": {
        "es5-ext": "npm:es5-ext@0.10.23",
        "es6-symbol": "npm:es6-symbol@3.1.1",
        "d": "npm:d@1.0.0"
      }
    },
    "npm:hash-base@2.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:es6-set@0.1.5": {
      "map": {
        "es5-ext": "npm:es5-ext@0.10.23",
        "es6-iterator": "npm:es6-iterator@2.0.1",
        "es6-symbol": "npm:es6-symbol@3.1.1",
        "event-emitter": "npm:event-emitter@0.3.5",
        "d": "npm:d@1.0.0"
      }
    },
    "npm:es5-ext@0.10.23": {
      "map": {
        "es6-iterator": "npm:es6-iterator@2.0.1",
        "es6-symbol": "npm:es6-symbol@3.1.1"
      }
    },
    "npm:d@1.0.0": {
      "map": {
        "es5-ext": "npm:es5-ext@0.10.23"
      }
    },
    "npm:hmac-drbg@1.0.1": {
      "map": {
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
        "hash.js": "npm:hash.js@1.1.2"
      }
    },
    "npm:asn1.js@4.9.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
        "bn.js": "npm:bn.js@4.11.7"
      }
    },
    "npm:readable-stream@2.3.2": {
      "map": {
        "string_decoder": "npm:string_decoder@1.0.3",
        "inherits": "npm:inherits@2.0.3",
        "isarray": "npm:isarray@1.0.0",
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "core-util-is": "npm:core-util-is@1.0.2",
        "process-nextick-args": "npm:process-nextick-args@1.0.7"
      }
    },
    "npm:string_decoder@1.0.3": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    }
  }
});
