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
      "github:bizboard/arva-js@develop": "../arva-js"
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
      "module": "github:jspm/nodelibs-module@0.2.0-alpha",
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
          "lodash": "npm:lodash@4.15.0",
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
      "npm:loose-envify@1.2.0": {
        "map": {
          "js-tokens": "npm:js-tokens@1.0.3"
        }
      },
      "npm:babel-helper-define-map@6.9.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-types": "npm:babel-types@6.11.1",
          "lodash": "npm:lodash@4.15.0",
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
          "lodash": "npm:lodash@4.15.0",
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
          "lodash": "npm:lodash@4.15.0",
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
          "lodash": "npm:lodash@4.15.0"
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
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json",
    "bitbucket:*/*.json"
  ],
  map: {
    "arva-js": "github:bizboard/arva-js@develop",
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "babel-polyfill": "npm:babel-polyfill@6.9.1",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
    "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
    "crypto": "github:jspm/nodelibs-crypto@0.2.0-alpha",
    "css": "github:systemjs/plugin-css@0.1.23",
    "dgram": "github:jspm/nodelibs-dgram@0.2.0-alpha",
    "dns": "github:jspm/nodelibs-dns@0.2.0-alpha",
    "ecc-jsbn": "npm:ecc-jsbn@0.1.1",
    "electron": "npm:electron@1.3.3",
    "events": "github:jspm/nodelibs-events@0.2.0-alpha",
    "famous": "github:bizboard/famous@0.3.7",
    "famous-flex": "github:bizboard/famous-flex@master",
    "fastclick": "npm:fastclick@1.0.6",
    "firebase": "github:firebase/firebase-bower@3.3.0",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "http": "github:jspm/nodelibs-http@0.2.0-alpha",
    "https": "github:jspm/nodelibs-https@0.2.0-alpha",
    "jodid25519": "npm:jodid25519@1.0.2",
    "jsbn": "npm:jsbn@0.1.0",
    "lodash": "npm:lodash@4.15.0",
    "net": "github:jspm/nodelibs-net@0.2.0-alpha",
    "os": "github:jspm/nodelibs-os@0.2.0-alpha",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "punycode": "github:jspm/nodelibs-punycode@0.2.0-alpha",
    "querystring": "github:jspm/nodelibs-querystring@0.2.0-alpha",
    "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
    "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
    "text": "github:systemjs/plugin-text@0.0.8",
    "timers": "github:jspm/nodelibs-timers@0.2.0-alpha",
    "tls": "github:jspm/nodelibs-tls@0.2.0-alpha",
    "tty": "github:jspm/nodelibs-tty@0.2.0-alpha",
    "tweetnacl": "npm:tweetnacl@0.13.3",
    "url": "github:jspm/nodelibs-url@0.2.0-alpha",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha",
    "vm": "github:jspm/nodelibs-vm@0.2.0-alpha",
    "zlib": "github:jspm/nodelibs-zlib@0.2.0-alpha"
  },
  packages: {
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.9.1"
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
        "readable-stream": "npm:readable-stream@2.1.5",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "github:jspm/nodelibs-timers@0.2.0-alpha": {
      "map": {
        "timers-browserify": "npm:timers-browserify@1.4.2"
      }
    },
    "npm:timers-browserify@1.4.2": {
      "map": {
        "process": "npm:process@0.11.8"
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
    "npm:readable-stream@2.1.5": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "string_decoder": "npm:string_decoder@0.10.31",
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "core-util-is": "npm:core-util-is@1.0.2",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "npm:buffer@4.9.1": {
      "map": {
        "isarray": "npm:isarray@1.0.0",
        "base64-js": "npm:base64-js@1.1.2",
        "ieee754": "npm:ieee754@1.1.6"
      }
    },
    "github:jspm/nodelibs-crypto@0.2.0-alpha": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "create-hmac": "npm:create-hmac@1.1.4",
        "create-hash": "npm:create-hash@1.1.2",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "randombytes": "npm:randombytes@2.0.3",
        "pbkdf2": "npm:pbkdf2@3.0.4"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "elliptic": "npm:elliptic@6.3.1",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "cipher-base": "npm:cipher-base@1.0.2",
        "ripemd160": "npm:ripemd160@1.0.1",
        "sha.js": "npm:sha.js@2.4.5"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "miller-rabin": "npm:miller-rabin@4.0.0",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "randombytes": "npm:randombytes@2.0.3",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "elliptic": "npm:elliptic@6.3.1",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:pbkdf2@3.0.4": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:elliptic@6.3.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "brorand": "npm:brorand@1.0.5",
        "hash.js": "npm:hash.js@1.0.3",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "pbkdf2": "npm:pbkdf2@3.0.4",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "asn1.js": "npm:asn1.js@4.8.0"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "browserify-des": "npm:browserify-des@1.0.0",
        "browserify-aes": "npm:browserify-aes@1.0.6"
      }
    },
    "npm:cipher-base@1.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "brorand": "npm:brorand@1.0.5",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "cipher-base": "npm:cipher-base@1.0.2",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "cipher-base": "npm:cipher-base@1.0.2",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:asn1.js@4.8.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "bn.js": "npm:bn.js@4.11.6",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:sha.js@2.4.5": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "github:jspm/nodelibs-os@0.2.0-alpha": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "github:bizboard/arva-js@develop": {
      "map": {
        "bowser": "npm:bowser@1.4.4",
        "eventemitter3": "npm:eventemitter3@1.2.0",
        "camelcase": "npm:camelcase@2.1.1",
        "ordered-hashmap": "npm:ordered-hashmap@1.0.0",
        "lodash": "npm:lodash@4.15.0",
        "fastclick": "npm:fastclick@1.0.6",
        "xml2js": "npm:xml2js@0.4.17",
        "fs": "github:jspm/nodelibs-fs@0.1.2",
        "path": "github:jspm/nodelibs-path@0.1.0",
        "firebase": "github:firebase/firebase-bower@3.3.0",
        "request-animation-frame-mock": "github:erykpiast/request-animation-frame-mock@0.1.8",
        "famous": "github:bizboard/famous@0.3.7",
        "famous-flex": "github:bizboard/famous-flex@master"
      }
    },
    "npm:xml2js@0.4.17": {
      "map": {
        "xmlbuilder": "npm:xmlbuilder@4.2.1",
        "sax": "npm:sax@1.2.1"
      }
    },
    "npm:xmlbuilder@4.2.1": {
      "map": {
        "lodash": "npm:lodash@4.15.0"
      }
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "map": {
        "path-browserify": "npm:path-browserify@0.0.0"
      }
    },
    "github:jspm/nodelibs-http@0.2.0-alpha": {
      "map": {
        "http-browserify": "npm:stream-http@2.3.1"
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
    "npm:debug@2.2.0": {
      "map": {
        "ms": "npm:ms@0.7.1"
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
    "npm:electron@1.3.3": {
      "map": {
        "extract-zip": "npm:extract-zip@1.5.0",
        "electron-download": "npm:electron-download@2.1.2"
      }
    },
    "npm:extract-zip@1.5.0": {
      "map": {
        "debug": "npm:debug@0.7.4",
        "mkdirp": "npm:mkdirp@0.5.0",
        "concat-stream": "npm:concat-stream@1.5.0",
        "yauzl": "npm:yauzl@2.4.1"
      }
    },
    "npm:electron-download@2.1.2": {
      "map": {
        "debug": "npm:debug@2.2.0",
        "mv": "npm:mv@2.1.1",
        "home-path": "npm:home-path@1.0.3",
        "path-exists": "npm:path-exists@1.0.0",
        "nugget": "npm:nugget@1.6.2",
        "rc": "npm:rc@1.1.6",
        "mkdirp": "npm:mkdirp@0.5.1",
        "minimist": "npm:minimist@1.2.0"
      }
    },
    "npm:mv@2.1.1": {
      "map": {
        "mkdirp": "npm:mkdirp@0.5.1",
        "ncp": "npm:ncp@2.0.0",
        "rimraf": "npm:rimraf@2.4.5"
      }
    },
    "npm:nugget@1.6.2": {
      "map": {
        "debug": "npm:debug@2.2.0",
        "minimist": "npm:minimist@1.2.0",
        "throttleit": "npm:throttleit@0.0.2",
        "single-line-log": "npm:single-line-log@0.4.1",
        "pretty-bytes": "npm:pretty-bytes@1.0.4",
        "progress-stream": "npm:progress-stream@1.2.0",
        "request": "npm:request@2.74.0"
      }
    },
    "npm:mkdirp@0.5.0": {
      "map": {
        "minimist": "npm:minimist@0.0.8"
      }
    },
    "npm:rc@1.1.6": {
      "map": {
        "minimist": "npm:minimist@1.2.0",
        "ini": "npm:ini@1.3.4",
        "deep-extend": "npm:deep-extend@0.4.1",
        "strip-json-comments": "npm:strip-json-comments@1.0.4"
      }
    },
    "npm:mkdirp@0.5.1": {
      "map": {
        "minimist": "npm:minimist@0.0.8"
      }
    },
    "npm:concat-stream@1.5.0": {
      "map": {
        "readable-stream": "npm:readable-stream@2.0.6",
        "inherits": "npm:inherits@2.0.1",
        "typedarray": "npm:typedarray@0.0.6"
      }
    },
    "npm:readable-stream@2.0.6": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "core-util-is": "npm:core-util-is@1.0.2",
        "isarray": "npm:isarray@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "string_decoder": "npm:string_decoder@0.10.31",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:yauzl@2.4.1": {
      "map": {
        "fd-slicer": "npm:fd-slicer@1.0.1"
      }
    },
    "npm:pretty-bytes@1.0.4": {
      "map": {
        "get-stdin": "npm:get-stdin@4.0.1",
        "meow": "npm:meow@3.7.0"
      }
    },
    "npm:progress-stream@1.2.0": {
      "map": {
        "speedometer": "npm:speedometer@0.1.4",
        "through2": "npm:through2@0.2.3"
      }
    },
    "npm:fd-slicer@1.0.1": {
      "map": {
        "pend": "npm:pend@1.2.0"
      }
    },
    "npm:through2@0.2.3": {
      "map": {
        "readable-stream": "npm:readable-stream@1.1.14",
        "xtend": "npm:xtend@2.1.2"
      }
    },
    "npm:meow@3.7.0": {
      "map": {
        "minimist": "npm:minimist@1.2.0",
        "camelcase-keys": "npm:camelcase-keys@2.1.0",
        "decamelize": "npm:decamelize@1.2.0",
        "map-obj": "npm:map-obj@1.0.1",
        "read-pkg-up": "npm:read-pkg-up@1.0.1",
        "normalize-package-data": "npm:normalize-package-data@2.3.5",
        "trim-newlines": "npm:trim-newlines@1.0.0",
        "redent": "npm:redent@1.0.0",
        "loud-rejection": "npm:loud-rejection@1.6.0",
        "object-assign": "npm:object-assign@4.1.0"
      }
    },
    "npm:rimraf@2.4.5": {
      "map": {
        "glob": "npm:glob@6.0.4"
      }
    },
    "npm:glob@6.0.4": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "path-is-absolute": "npm:path-is-absolute@1.0.0",
        "inflight": "npm:inflight@1.0.5",
        "once": "npm:once@1.3.3",
        "minimatch": "npm:minimatch@3.0.3"
      }
    },
    "npm:readable-stream@1.1.14": {
      "map": {
        "isarray": "npm:isarray@0.0.1",
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "string_decoder": "npm:string_decoder@0.10.31",
        "stream-browserify": "npm:stream-browserify@1.0.0"
      }
    },
    "npm:request@2.74.0": {
      "map": {
        "is-typedarray": "npm:is-typedarray@1.0.0",
        "aws-sign2": "npm:aws-sign2@0.6.0",
        "forever-agent": "npm:forever-agent@0.6.1",
        "isstream": "npm:isstream@0.1.2",
        "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
        "oauth-sign": "npm:oauth-sign@0.8.2",
        "stringstream": "npm:stringstream@0.0.5",
        "tunnel-agent": "npm:tunnel-agent@0.4.3",
        "caseless": "npm:caseless@0.11.0",
        "extend": "npm:extend@3.0.0",
        "combined-stream": "npm:combined-stream@1.0.5",
        "http-signature": "npm:http-signature@1.1.1",
        "node-uuid": "npm:node-uuid@1.4.7",
        "form-data": "npm:form-data@1.0.0-rc4",
        "bl": "npm:bl@1.1.2",
        "har-validator": "npm:har-validator@2.0.6",
        "mime-types": "npm:mime-types@2.1.11",
        "aws4": "npm:aws4@1.4.1",
        "qs": "npm:qs@6.2.1",
        "tough-cookie": "npm:tough-cookie@2.3.1",
        "hawk": "npm:hawk@3.1.3"
      }
    },
    "npm:camelcase-keys@2.1.0": {
      "map": {
        "map-obj": "npm:map-obj@1.0.1",
        "camelcase": "npm:camelcase@2.1.1"
      }
    },
    "npm:stream-browserify@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@1.1.14"
      }
    },
    "npm:form-data@1.0.0-rc4": {
      "map": {
        "combined-stream": "npm:combined-stream@1.0.5",
        "mime-types": "npm:mime-types@2.1.11",
        "async": "npm:async@1.5.2"
      }
    },
    "npm:inflight@1.0.5": {
      "map": {
        "once": "npm:once@1.3.3",
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:bl@1.1.2": {
      "map": {
        "readable-stream": "npm:readable-stream@2.0.6"
      }
    },
    "npm:read-pkg-up@1.0.1": {
      "map": {
        "find-up": "npm:find-up@1.1.2",
        "read-pkg": "npm:read-pkg@1.1.0"
      }
    },
    "npm:normalize-package-data@2.3.5": {
      "map": {
        "is-builtin-module": "npm:is-builtin-module@1.0.0",
        "validate-npm-package-license": "npm:validate-npm-package-license@3.0.1",
        "hosted-git-info": "npm:hosted-git-info@2.1.5",
        "semver": "npm:semver@5.3.0"
      }
    },
    "npm:redent@1.0.0": {
      "map": {
        "indent-string": "npm:indent-string@2.1.0",
        "strip-indent": "npm:strip-indent@1.0.1"
      }
    },
    "npm:xtend@2.1.2": {
      "map": {
        "object-keys": "npm:object-keys@0.4.0"
      }
    },
    "npm:har-validator@2.0.6": {
      "map": {
        "pinkie-promise": "npm:pinkie-promise@2.0.1",
        "chalk": "npm:chalk@1.1.3",
        "is-my-json-valid": "npm:is-my-json-valid@2.13.1",
        "commander": "npm:commander@2.9.0"
      }
    },
    "npm:loud-rejection@1.6.0": {
      "map": {
        "currently-unhandled": "npm:currently-unhandled@0.4.1",
        "signal-exit": "npm:signal-exit@3.0.0"
      }
    },
    "npm:http-signature@1.1.1": {
      "map": {
        "jsprim": "npm:jsprim@1.3.0",
        "assert-plus": "npm:assert-plus@0.2.0",
        "sshpk": "npm:sshpk@1.9.2"
      }
    },
    "npm:combined-stream@1.0.5": {
      "map": {
        "delayed-stream": "npm:delayed-stream@1.0.0"
      }
    },
    "npm:once@1.3.3": {
      "map": {
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:find-up@1.1.2": {
      "map": {
        "path-exists": "npm:path-exists@2.1.0",
        "pinkie-promise": "npm:pinkie-promise@2.0.1"
      }
    },
    "npm:minimatch@3.0.3": {
      "map": {
        "brace-expansion": "npm:brace-expansion@1.1.6"
      }
    },
    "npm:read-pkg@1.1.0": {
      "map": {
        "normalize-package-data": "npm:normalize-package-data@2.3.5",
        "path-type": "npm:path-type@1.1.0",
        "load-json-file": "npm:load-json-file@1.1.0"
      }
    },
    "npm:strip-indent@1.0.1": {
      "map": {
        "get-stdin": "npm:get-stdin@4.0.1"
      }
    },
    "npm:mime-types@2.1.11": {
      "map": {
        "mime-db": "npm:mime-db@1.23.0"
      }
    },
    "npm:sshpk@1.9.2": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0",
        "getpass": "npm:getpass@0.1.6",
        "asn1": "npm:asn1@0.2.3",
        "dashdash": "npm:dashdash@1.14.0"
      }
    },
    "npm:indent-string@2.1.0": {
      "map": {
        "repeating": "npm:repeating@2.0.1"
      }
    },
    "npm:hawk@3.1.3": {
      "map": {
        "cryptiles": "npm:cryptiles@2.0.5",
        "sntp": "npm:sntp@1.0.9",
        "boom": "npm:boom@2.10.1",
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:is-my-json-valid@2.13.1": {
      "map": {
        "xtend": "npm:xtend@4.0.1",
        "generate-function": "npm:generate-function@2.0.0",
        "generate-object-property": "npm:generate-object-property@1.2.0",
        "jsonpointer": "npm:jsonpointer@2.0.0"
      }
    },
    "npm:pinkie-promise@2.0.1": {
      "map": {
        "pinkie": "npm:pinkie@2.0.4"
      }
    },
    "npm:path-exists@2.1.0": {
      "map": {
        "pinkie-promise": "npm:pinkie-promise@2.0.1"
      }
    },
    "npm:is-builtin-module@1.0.0": {
      "map": {
        "builtin-modules": "npm:builtin-modules@1.1.1"
      }
    },
    "npm:validate-npm-package-license@3.0.1": {
      "map": {
        "spdx-correct": "npm:spdx-correct@1.0.2",
        "spdx-expression-parse": "npm:spdx-expression-parse@1.0.2"
      }
    },
    "npm:cryptiles@2.0.5": {
      "map": {
        "boom": "npm:boom@2.10.1"
      }
    },
    "npm:jsprim@1.3.0": {
      "map": {
        "json-schema": "npm:json-schema@0.2.2",
        "extsprintf": "npm:extsprintf@1.0.2",
        "verror": "npm:verror@1.3.6"
      }
    },
    "npm:currently-unhandled@0.4.1": {
      "map": {
        "array-find-index": "npm:array-find-index@1.0.1"
      }
    },
    "npm:sntp@1.0.9": {
      "map": {
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:commander@2.9.0": {
      "map": {
        "graceful-readlink": "npm:graceful-readlink@1.0.1"
      }
    },
    "npm:brace-expansion@1.1.6": {
      "map": {
        "concat-map": "npm:concat-map@0.0.1",
        "balanced-match": "npm:balanced-match@0.4.2"
      }
    },
    "npm:load-json-file@1.1.0": {
      "map": {
        "pinkie-promise": "npm:pinkie-promise@2.0.1",
        "parse-json": "npm:parse-json@2.2.0",
        "strip-bom": "npm:strip-bom@2.0.0",
        "pify": "npm:pify@2.3.0",
        "graceful-fs": "npm:graceful-fs@4.1.5"
      }
    },
    "npm:path-type@1.1.0": {
      "map": {
        "pinkie-promise": "npm:pinkie-promise@2.0.1",
        "pify": "npm:pify@2.3.0",
        "graceful-fs": "npm:graceful-fs@4.1.5"
      }
    },
    "npm:boom@2.10.1": {
      "map": {
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:getpass@0.1.6": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0"
      }
    },
    "npm:verror@1.3.6": {
      "map": {
        "extsprintf": "npm:extsprintf@1.0.2"
      }
    },
    "npm:ecc-jsbn@0.1.1": {
      "map": {
        "jsbn": "npm:jsbn@0.1.0"
      }
    },
    "npm:jodid25519@1.0.2": {
      "map": {
        "jsbn": "npm:jsbn@0.1.0"
      }
    },
    "npm:repeating@2.0.1": {
      "map": {
        "is-finite": "npm:is-finite@1.0.1"
      }
    },
    "npm:dashdash@1.14.0": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0"
      }
    },
    "npm:spdx-correct@1.0.2": {
      "map": {
        "spdx-license-ids": "npm:spdx-license-ids@1.2.2"
      }
    },
    "npm:spdx-expression-parse@1.0.2": {
      "map": {
        "spdx-license-ids": "npm:spdx-license-ids@1.2.2",
        "spdx-exceptions": "npm:spdx-exceptions@1.0.5"
      }
    },
    "npm:generate-object-property@1.2.0": {
      "map": {
        "is-property": "npm:is-property@1.0.2"
      }
    },
    "npm:is-finite@1.0.1": {
      "map": {
        "number-is-nan": "npm:number-is-nan@1.0.0"
      }
    },
    "npm:strip-bom@2.0.0": {
      "map": {
        "is-utf8": "npm:is-utf8@0.2.1"
      }
    },
    "npm:parse-json@2.2.0": {
      "map": {
        "error-ex": "npm:error-ex@1.3.0"
      }
    },
    "npm:error-ex@1.3.0": {
      "map": {
        "is-arrayish": "npm:is-arrayish@0.2.1"
      }
    },
    "npm:stream-http@2.3.1": {
      "map": {
        "readable-stream": "npm:readable-stream@2.1.5",
        "xtend": "npm:xtend@4.0.1",
        "inherits": "npm:inherits@2.0.1",
        "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1"
      }
    },
    "github:jspm/nodelibs-zlib@0.2.0-alpha": {
      "map": {
        "zlib-browserify": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.1.5",
        "pako": "npm:pako@0.2.9"
      }
    },
    "github:jspm/nodelibs-punycode@0.2.0-alpha": {
      "map": {
        "punycode-browserify": "npm:punycode@1.4.1"
      }
    }
  }
});
