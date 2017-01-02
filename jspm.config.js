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
      "github:bizboard/famous-flex@master": "../famous-flex",
      "bitbucket:bizboard/nl.bizboard.mrbox.shared@develop": "../nl.bizboard.mrbox.shared",
      "bitbucket:bizboard/arva-kit@master": "../arva-kit"
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
      "babel-plugin-transform-decorators": "npm:babel-plugin-transform-decorators@6.13.0",
      "babel-plugin-transform-decorators-legacy": "npm:babel-plugin-transform-decorators-legacy@1.3.4",
      "core-js": "npm:core-js@2.4.1",
      "babel-plugin-syntax-decorators": "npm:babel-plugin-syntax-decorators@6.13.0",
      "babel-plugin-transform-async-functions": "npm:babel-plugin-transform-async-functions@6.8.0",
      "babel-plugin-transform-runtime-constructor-name": "github:bizboard/babel-plugin-transform-runtime-constructor-name@master",
      "babel-plugin-transform-class-properties": "npm:babel-plugin-transform-class-properties@6.19.0",
      "babel-plugin-transform-es2015-classes": "npm:babel-plugin-transform-es2015-classes@6.18.0",
      "babel-plugin-transform-builtin-extend": "npm:babel-plugin-transform-builtin-extend@1.1.0",
      "babel-plugin-transform-es2015-spread": "npm:babel-plugin-transform-es2015-spread@6.8.0",
      "babel-plugin-transform-es2015-for-of": "npm:babel-plugin-transform-es2015-for-of@6.18.0"
    },
    "packages": {
      "npm:babel-plugin-transform-decorators-legacy@1.3.4": {
        "map": {
          "babel-plugin-syntax-decorators": "npm:babel-plugin-syntax-decorators@6.13.0",
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-template": "npm:babel-template@6.16.0"
        }
      },
      "npm:babel-plugin-transform-async-functions@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-plugin-syntax-async-functions": "npm:babel-plugin-syntax-async-functions@6.13.0"
        }
      },
      "npm:babel-messages@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0"
        }
      },
      "npm:babel-plugin-transform-builtin-extend@1.1.0": {
        "map": {
          "babel-template": "npm:babel-template@6.16.0",
          "babel-runtime": "npm:babel-runtime@6.18.0"
        }
      },
      "npm:babel-plugin-transform-es2015-spread@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0"
        }
      },
      "npm:babel-plugin-transform-decorators@6.13.0": {
        "map": {
          "babel-plugin-syntax-decorators": "npm:babel-plugin-syntax-decorators@6.13.0",
          "babel-template": "npm:babel-template@6.16.0",
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-helper-define-map": "npm:babel-helper-define-map@6.18.0",
          "babel-helper-explode-class": "npm:babel-helper-explode-class@6.18.0",
          "babel-types": "npm:babel-types@6.19.0"
        }
      },
      "npm:babel-plugin-transform-class-properties@6.19.0": {
        "map": {
          "babel-helper-function-name": "npm:babel-helper-function-name@6.18.0",
          "babel-plugin-syntax-class-properties": "npm:babel-plugin-syntax-class-properties@6.13.0",
          "babel-template": "npm:babel-template@6.16.0",
          "babel-runtime": "npm:babel-runtime@6.18.0"
        }
      },
      "npm:babel-plugin-transform-es2015-classes@6.18.0": {
        "map": {
          "babel-helper-function-name": "npm:babel-helper-function-name@6.18.0",
          "babel-messages": "npm:babel-messages@6.8.0",
          "babel-template": "npm:babel-template@6.16.0",
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-helper-optimise-call-expression": "npm:babel-helper-optimise-call-expression@6.18.0",
          "babel-helper-replace-supers": "npm:babel-helper-replace-supers@6.18.0",
          "babel-helper-define-map": "npm:babel-helper-define-map@6.18.0",
          "babel-types": "npm:babel-types@6.19.0",
          "babel-traverse": "npm:babel-traverse@6.19.0"
        }
      },
      "npm:babel-plugin-transform-es2015-for-of@6.18.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0"
        }
      },
      "npm:babel-helper-function-name@6.18.0": {
        "map": {
          "babel-types": "npm:babel-types@6.19.0",
          "babel-traverse": "npm:babel-traverse@6.19.0",
          "babel-template": "npm:babel-template@6.16.0",
          "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.18.0",
          "babel-runtime": "npm:babel-runtime@6.18.0"
        }
      },
      "npm:babel-helper-optimise-call-expression@6.18.0": {
        "map": {
          "babel-types": "npm:babel-types@6.19.0",
          "babel-runtime": "npm:babel-runtime@6.18.0"
        }
      },
      "npm:babel-helper-replace-supers@6.18.0": {
        "map": {
          "babel-messages": "npm:babel-messages@6.8.0",
          "babel-helper-optimise-call-expression": "npm:babel-helper-optimise-call-expression@6.18.0",
          "babel-traverse": "npm:babel-traverse@6.19.0",
          "babel-template": "npm:babel-template@6.16.0",
          "babel-types": "npm:babel-types@6.19.0",
          "babel-runtime": "npm:babel-runtime@6.18.0"
        }
      },
      "npm:babel-helper-define-map@6.18.0": {
        "map": {
          "lodash": "npm:lodash@4.17.2",
          "babel-types": "npm:babel-types@6.19.0",
          "babel-helper-function-name": "npm:babel-helper-function-name@6.18.0",
          "babel-runtime": "npm:babel-runtime@6.18.0"
        }
      },
      "npm:babel-helper-explode-class@6.18.0": {
        "map": {
          "babel-traverse": "npm:babel-traverse@6.19.0",
          "babel-types": "npm:babel-types@6.19.0",
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-helper-bindify-decorators": "npm:babel-helper-bindify-decorators@6.18.0"
        }
      },
      "npm:babel-types@6.19.0": {
        "map": {
          "lodash": "npm:lodash@4.17.2",
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "to-fast-properties": "npm:to-fast-properties@1.0.2",
          "esutils": "npm:esutils@2.0.2"
        }
      },
      "npm:babel-traverse@6.19.0": {
        "map": {
          "babel-messages": "npm:babel-messages@6.8.0",
          "lodash": "npm:lodash@4.17.2",
          "babel-types": "npm:babel-types@6.19.0",
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "invariant": "npm:invariant@2.2.2",
          "babel-code-frame": "npm:babel-code-frame@6.16.0",
          "globals": "npm:globals@9.13.0",
          "debug": "npm:debug@2.3.2",
          "babylon": "npm:babylon@6.14.1"
        }
      },
      "npm:babel-template@6.16.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "lodash": "npm:lodash@4.17.2",
          "babel-traverse": "npm:babel-traverse@6.19.0",
          "babel-types": "npm:babel-types@6.19.0",
          "babylon": "npm:babylon@6.14.1"
        }
      },
      "npm:babel-helper-get-function-arity@6.18.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-types": "npm:babel-types@6.19.0"
        }
      },
      "npm:babel-code-frame@6.16.0": {
        "map": {
          "esutils": "npm:esutils@2.0.2",
          "js-tokens": "npm:js-tokens@2.0.0",
          "chalk": "npm:chalk@1.1.3"
        }
      },
      "npm:babel-helper-bindify-decorators@6.18.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-traverse": "npm:babel-traverse@6.19.0",
          "babel-types": "npm:babel-types@6.19.0"
        }
      },
      "npm:invariant@2.2.2": {
        "map": {
          "loose-envify": "npm:loose-envify@1.3.0"
        }
      },
      "npm:loose-envify@1.3.0": {
        "map": {
          "js-tokens": "npm:js-tokens@2.0.0"
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
    "bitbucket:*/*.json"
  ],
  map: {
    "mrbox-shared": "bitbucket:bizboard/nl.bizboard.mrbox.shared@develop",
    "bcrypt-pbkdf": "npm:bcrypt-pbkdf@1.0.0",
    "cordova": "npm:cordova@6.4.0",
    "dgram": "npm:jspm-nodelibs-dgram@0.2.0",
    "dns": "npm:jspm-nodelibs-dns@0.2.0",
    "domain": "npm:jspm-nodelibs-domain@0.2.0",
    "ecc-jsbn": "npm:ecc-jsbn@0.1.1",
    "graceful-fs": "npm:graceful-fs@4.1.10",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "https": "npm:jspm-nodelibs-https@0.2.1",
    "jodid25519": "npm:jodid25519@1.0.2",
    "jsbn": "npm:jsbn@0.1.0",
    "module": "npm:jspm-nodelibs-module@0.2.0",
    "net": "npm:jspm-nodelibs-net@0.2.0",
    "npmlog": "npm:npmlog@3.1.2",
    "querystring": "npm:jspm-nodelibs-querystring@0.2.0",
    "readline": "npm:jspm-nodelibs-readline@0.2.0",
    "repl": "npm:jspm-nodelibs-repl@0.2.0",
    "arva-kit": "bitbucket:bizboard/arva-kit@master",
    "fastclick": "npm:fastclick@1.0.6",
    "famous-autosizetextarea": "github:ijzerenhein/famous-autosizetextarea@0.3.1",
    "es6-map": "npm:es6-map@0.1.4",
    "arva-js": "github:bizboard/arva-js@develop",
    "assert": "npm:jspm-nodelibs-assert@0.2.0",
    "babel-polyfill": "npm:babel-polyfill@6.16.0",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.0",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.0",
    "constants": "npm:jspm-nodelibs-constants@0.2.0",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.0",
    "css": "github:systemjs/plugin-css@0.1.32",
    "events": "npm:jspm-nodelibs-events@0.2.0",
    "famous": "github:bizboard/famous@develop",
    "famous-flex": "github:bizboard/famous-flex@master",
    "firebase": "github:firebase/firebase-bower@3.6.1",
    "fs": "npm:jspm-nodelibs-fs@0.2.0",
    "lodash": "npm:lodash@4.17.2",
    "os": "npm:jspm-nodelibs-os@0.2.0",
    "path": "npm:jspm-nodelibs-path@0.2.1",
    "process": "npm:jspm-nodelibs-process@0.2.0",
    "stream": "npm:jspm-nodelibs-stream@0.2.0",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.0",
    "timers": "npm:jspm-nodelibs-timers@0.2.0",
    "tls": "npm:jspm-nodelibs-tls@0.2.0",
    "tty": "npm:jspm-nodelibs-tty@0.2.0",
    "tweetnacl": "npm:tweetnacl@0.14.3",
    "url": "npm:jspm-nodelibs-url@0.2.0",
    "util": "npm:jspm-nodelibs-util@0.2.1",
    "vm": "npm:jspm-nodelibs-vm@0.2.0",
    "zlib": "npm:jspm-nodelibs-zlib@0.2.0"
  },
  packages: {
    "npm:stream-browserify@2.0.1": {
      "map": {
        "readable-stream": "npm:readable-stream@2.2.2",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:timers-browserify@1.4.2": {
      "map": {
        "process": "npm:process@0.11.9"
      }
    },
    "npm:readable-stream@2.1.5": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
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
        "base64-js": "npm:base64-js@1.2.0",
        "ieee754": "npm:ieee754@1.1.8"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "create-hmac": "npm:create-hmac@1.1.4",
        "create-hash": "npm:create-hash@1.1.2",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "randombytes": "npm:randombytes@2.0.3",
        "pbkdf2": "npm:pbkdf2@3.0.9"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "elliptic": "npm:elliptic@6.3.2",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.3",
        "ripemd160": "npm:ripemd160@1.0.1",
        "sha.js": "npm:sha.js@2.4.8"
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
        "elliptic": "npm:elliptic@6.3.2",
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
        "pbkdf2": "npm:pbkdf2@3.0.9",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "asn1.js": "npm:asn1.js@4.9.0"
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
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "brorand": "npm:brorand@1.0.6",
        "bn.js": "npm:bn.js@4.11.6"
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
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
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
        "lodash": "npm:lodash@4.17.2"
      }
    },
    "npm:cipher-base@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:elliptic@6.3.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.0.6",
        "hash.js": "npm:hash.js@1.0.3"
      }
    },
    "npm:es6-map@0.1.4": {
      "map": {
        "d": "npm:d@0.1.1",
        "es6-iterator": "npm:es6-iterator@2.0.0",
        "event-emitter": "npm:event-emitter@0.3.4",
        "es5-ext": "npm:es5-ext@0.10.12",
        "es6-symbol": "npm:es6-symbol@3.1.0",
        "es6-set": "npm:es6-set@0.1.4"
      }
    },
    "npm:es6-iterator@2.0.0": {
      "map": {
        "d": "npm:d@0.1.1",
        "es5-ext": "npm:es5-ext@0.10.12",
        "es6-symbol": "npm:es6-symbol@3.1.0"
      }
    },
    "npm:d@0.1.1": {
      "map": {
        "es5-ext": "npm:es5-ext@0.10.12"
      }
    },
    "npm:es5-ext@0.10.12": {
      "map": {
        "es6-iterator": "npm:es6-iterator@2.0.0",
        "es6-symbol": "npm:es6-symbol@3.1.0"
      }
    },
    "npm:event-emitter@0.3.4": {
      "map": {
        "es5-ext": "npm:es5-ext@0.10.12",
        "d": "npm:d@0.1.1"
      }
    },
    "npm:es6-symbol@3.1.0": {
      "map": {
        "d": "npm:d@0.1.1",
        "es5-ext": "npm:es5-ext@0.10.12"
      }
    },
    "npm:es6-set@0.1.4": {
      "map": {
        "d": "npm:d@0.1.1",
        "es5-ext": "npm:es5-ext@0.10.12",
        "es6-iterator": "npm:es6-iterator@2.0.0",
        "es6-symbol": "npm:es6-symbol@3.1.0",
        "event-emitter": "npm:event-emitter@0.3.4"
      }
    },
    "github:bizboard/famous-flex@master": {
      "map": {
        "es6-map": "npm:es6-map@0.1.4"
      }
    },
    "github:bizboard/arva-js@develop": {
      "map": {
        "fastclick": "npm:fastclick@1.0.6",
        "lodash": "npm:lodash@4.17.2",
        "firebase": "github:firebase/firebase-bower@3.4.1",
        "bowser": "npm:bowser@1.4.6",
        "camelcase": "npm:camelcase@2.1.1",
        "eventemitter3": "npm:eventemitter3@1.2.0",
        "ordered-hashmap": "npm:ordered-hashmap@1.0.0",
        "xml2js": "npm:xml2js@0.4.17",
        "famous": "github:bizboard/famous@develop",
        "famous-flex": "github:bizboard/famous-flex@master",
        "fs": "npm:jspm-nodelibs-fs@0.2.0",
        "path": "npm:jspm-nodelibs-path@0.2.1",
        "request-animation-frame-mock": "github:erykpiast/request-animation-frame-mock@0.1.8"
      }
    },
    "bitbucket:bizboard/arva-kit@master": {
      "map": {
        "degrees-radians": "npm:degrees-radians@1.0.3",
        "color": "npm:color@0.11.3",
        "lodash": "npm:lodash@4.17.2",
        "bowser": "npm:bowser@1.4.3",
        "rgbcolor": "npm:rgbcolor@0.0.4",
        "famous-bkimagesurface": "github:bizboard/famous-bkimagesurface@master",
        "famous-autosizetextarea": "github:ijzerenhein/famous-autosizetextarea@0.3.1",
        "famous": "github:bizboard/famous@develop",
        "arva-js": "github:bizboard/arva-js@develop",
        "famous-flex": "github:bizboard/famous-flex@master"
      }
    },
    "npm:color@0.11.3": {
      "map": {
        "color-convert": "npm:color-convert@1.5.0",
        "color-string": "npm:color-string@0.3.0",
        "clone": "npm:clone@1.0.2"
      }
    },
    "npm:color-string@0.3.0": {
      "map": {
        "color-name": "npm:color-name@1.1.1"
      }
    },
    "npm:jspm-nodelibs-os@0.2.0": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.0": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:jspm-nodelibs-timers@0.2.0": {
      "map": {
        "timers-browserify": "npm:timers-browserify@1.4.2"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.0": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.0": {
      "map": {
        "buffer-browserify": "npm:buffer@4.9.1"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.0": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
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
    "npm:jspm-nodelibs-http@0.2.0": {
      "map": {
        "http-browserify": "npm:stream-http@2.5.0"
      }
    },
    "npm:jspm-nodelibs-url@0.2.0": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "npm:cordova@6.4.0": {
      "map": {
        "insight": "npm:insight@0.8.3",
        "nopt": "npm:nopt@3.0.1",
        "cordova-common": "npm:cordova-common@1.5.1",
        "underscore": "npm:underscore@1.7.0",
        "update-notifier": "npm:update-notifier@0.5.0",
        "q": "npm:q@1.0.1",
        "cordova-lib": "npm:cordova-lib@6.4.0"
      }
    },
    "npm:insight@0.8.3": {
      "map": {
        "chalk": "npm:chalk@1.1.3",
        "node-uuid": "npm:node-uuid@1.4.7",
        "object-assign": "npm:object-assign@4.1.0",
        "tough-cookie": "npm:tough-cookie@2.3.2",
        "os-name": "npm:os-name@1.0.3",
        "lodash.debounce": "npm:lodash.debounce@3.1.1",
        "configstore": "npm:configstore@1.4.0",
        "inquirer": "npm:inquirer@0.10.1",
        "async": "npm:async@1.5.2",
        "request": "npm:request@2.78.0"
      }
    },
    "npm:cordova-common@1.5.1": {
      "map": {
        "underscore": "npm:underscore@1.8.3",
        "q": "npm:q@1.4.1",
        "semver": "npm:semver@5.3.0",
        "minimatch": "npm:minimatch@3.0.3",
        "ansi": "npm:ansi@0.3.1",
        "bplist-parser": "npm:bplist-parser@0.1.1",
        "elementtree": "npm:elementtree@0.1.6",
        "osenv": "npm:osenv@0.1.3",
        "cordova-registry-mapper": "npm:cordova-registry-mapper@1.1.15",
        "unorm": "npm:unorm@1.4.1",
        "plist": "npm:plist@1.2.0",
        "shelljs": "npm:shelljs@0.5.3",
        "glob": "npm:glob@5.0.15"
      }
    },
    "npm:nopt@3.0.1": {
      "map": {
        "abbrev": "npm:abbrev@1.0.9"
      }
    },
    "npm:update-notifier@0.5.0": {
      "map": {
        "chalk": "npm:chalk@1.1.3",
        "configstore": "npm:configstore@1.4.0",
        "repeating": "npm:repeating@1.1.3",
        "latest-version": "npm:latest-version@1.0.1",
        "string-length": "npm:string-length@1.0.1",
        "is-npm": "npm:is-npm@1.0.0",
        "semver-diff": "npm:semver-diff@2.1.0"
      }
    },
    "npm:tough-cookie@2.3.2": {
      "map": {
        "punycode": "npm:punycode@1.4.1"
      }
    },
    "npm:configstore@1.4.0": {
      "map": {
        "object-assign": "npm:object-assign@4.1.0",
        "osenv": "npm:osenv@0.1.3",
        "graceful-fs": "npm:graceful-fs@4.1.10",
        "uuid": "npm:uuid@2.0.3",
        "os-tmpdir": "npm:os-tmpdir@1.0.2",
        "xdg-basedir": "npm:xdg-basedir@2.0.0",
        "write-file-atomic": "npm:write-file-atomic@1.2.0",
        "mkdirp": "npm:mkdirp@0.5.1"
      }
    },
    "npm:inquirer@0.10.1": {
      "map": {
        "lodash": "npm:lodash@3.10.1",
        "ansi-regex": "npm:ansi-regex@2.0.0",
        "chalk": "npm:chalk@1.1.3",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "cli-width": "npm:cli-width@1.1.1",
        "readline2": "npm:readline2@1.0.1",
        "figures": "npm:figures@1.7.0",
        "through": "npm:through@2.3.8",
        "cli-cursor": "npm:cli-cursor@1.0.2",
        "ansi-escapes": "npm:ansi-escapes@1.4.0",
        "run-async": "npm:run-async@0.1.0",
        "rx-lite": "npm:rx-lite@3.1.2"
      }
    },
    "npm:os-name@1.0.3": {
      "map": {
        "win-release": "npm:win-release@1.1.1",
        "osx-release": "npm:osx-release@1.1.0"
      }
    },
    "npm:plist@1.2.0": {
      "map": {
        "base64-js": "npm:base64-js@0.0.8",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "xmlbuilder": "npm:xmlbuilder@4.0.0",
        "xmldom": "npm:xmldom@0.1.22"
      }
    },
    "npm:osenv@0.1.3": {
      "map": {
        "os-tmpdir": "npm:os-tmpdir@1.0.2",
        "os-homedir": "npm:os-homedir@1.0.2"
      }
    },
    "npm:string-length@1.0.1": {
      "map": {
        "strip-ansi": "npm:strip-ansi@3.0.1"
      }
    },
    "npm:semver-diff@2.1.0": {
      "map": {
        "semver": "npm:semver@5.3.0"
      }
    },
    "npm:lodash.debounce@3.1.1": {
      "map": {
        "lodash._getnative": "npm:lodash._getnative@3.9.1"
      }
    },
    "npm:win-release@1.1.1": {
      "map": {
        "semver": "npm:semver@5.3.0"
      }
    },
    "npm:minimatch@3.0.3": {
      "map": {
        "brace-expansion": "npm:brace-expansion@1.1.6"
      }
    },
    "npm:repeating@1.1.3": {
      "map": {
        "is-finite": "npm:is-finite@1.0.2"
      }
    },
    "npm:elementtree@0.1.6": {
      "map": {
        "sax": "npm:sax@0.3.5"
      }
    },
    "npm:write-file-atomic@1.2.0": {
      "map": {
        "graceful-fs": "npm:graceful-fs@4.1.10",
        "slide": "npm:slide@1.1.6",
        "imurmurhash": "npm:imurmurhash@0.1.4"
      }
    },
    "npm:xdg-basedir@2.0.0": {
      "map": {
        "os-homedir": "npm:os-homedir@1.0.2"
      }
    },
    "npm:figures@1.7.0": {
      "map": {
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "object-assign": "npm:object-assign@4.1.0"
      }
    },
    "npm:request@2.78.0": {
      "map": {
        "node-uuid": "npm:node-uuid@1.4.7",
        "tough-cookie": "npm:tough-cookie@2.3.2",
        "aws-sign2": "npm:aws-sign2@0.6.0",
        "aws4": "npm:aws4@1.5.0",
        "combined-stream": "npm:combined-stream@1.0.5",
        "forever-agent": "npm:forever-agent@0.6.1",
        "extend": "npm:extend@3.0.0",
        "form-data": "npm:form-data@2.1.2",
        "har-validator": "npm:har-validator@2.0.6",
        "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
        "hawk": "npm:hawk@3.1.3",
        "mime-types": "npm:mime-types@2.1.12",
        "is-typedarray": "npm:is-typedarray@1.0.0",
        "stringstream": "npm:stringstream@0.0.5",
        "qs": "npm:qs@6.3.0",
        "tunnel-agent": "npm:tunnel-agent@0.4.3",
        "http-signature": "npm:http-signature@1.1.1",
        "isstream": "npm:isstream@0.1.2",
        "caseless": "npm:caseless@0.11.0",
        "oauth-sign": "npm:oauth-sign@0.8.2"
      }
    },
    "npm:xmlbuilder@4.0.0": {
      "map": {
        "lodash": "npm:lodash@3.10.1"
      }
    },
    "npm:readline2@1.0.1": {
      "map": {
        "mute-stream": "npm:mute-stream@0.0.5",
        "code-point-at": "npm:code-point-at@1.1.0",
        "is-fullwidth-code-point": "npm:is-fullwidth-code-point@1.0.0"
      }
    },
    "npm:latest-version@1.0.1": {
      "map": {
        "package-json": "npm:package-json@1.2.0"
      }
    },
    "npm:glob@5.0.15": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimatch": "npm:minimatch@3.0.3",
        "once": "npm:once@1.4.0",
        "path-is-absolute": "npm:path-is-absolute@1.0.1",
        "inflight": "npm:inflight@1.0.6"
      }
    },
    "npm:brace-expansion@1.1.6": {
      "map": {
        "balanced-match": "npm:balanced-match@0.4.2",
        "concat-map": "npm:concat-map@0.0.1"
      }
    },
    "npm:bplist-parser@0.1.1": {
      "map": {
        "big-integer": "npm:big-integer@1.6.17"
      }
    },
    "npm:run-async@0.1.0": {
      "map": {
        "once": "npm:once@1.4.0"
      }
    },
    "npm:is-finite@1.0.2": {
      "map": {
        "number-is-nan": "npm:number-is-nan@1.0.1"
      }
    },
    "npm:is-fullwidth-code-point@1.0.0": {
      "map": {
        "number-is-nan": "npm:number-is-nan@1.0.1"
      }
    },
    "npm:osx-release@1.1.0": {
      "map": {
        "minimist": "npm:minimist@1.2.0"
      }
    },
    "npm:mkdirp@0.5.1": {
      "map": {
        "minimist": "npm:minimist@0.0.8"
      }
    },
    "npm:cli-cursor@1.0.2": {
      "map": {
        "restore-cursor": "npm:restore-cursor@1.0.1"
      }
    },
    "npm:form-data@2.1.2": {
      "map": {
        "combined-stream": "npm:combined-stream@1.0.5",
        "mime-types": "npm:mime-types@2.1.12",
        "asynckit": "npm:asynckit@0.4.0"
      }
    },
    "npm:har-validator@2.0.6": {
      "map": {
        "chalk": "npm:chalk@1.1.3",
        "pinkie-promise": "npm:pinkie-promise@2.0.1",
        "is-my-json-valid": "npm:is-my-json-valid@2.15.0",
        "commander": "npm:commander@2.9.0"
      }
    },
    "npm:cordova-lib@6.4.0": {
      "map": {
        "nopt": "npm:nopt@3.0.6",
        "request": "npm:request@2.47.0",
        "semver": "npm:semver@4.3.6",
        "shelljs": "npm:shelljs@0.3.0",
        "unorm": "npm:unorm@1.3.3",
        "cordova-common": "npm:cordova-common@1.5.1",
        "cordova-registry-mapper": "npm:cordova-registry-mapper@1.1.15",
        "elementtree": "npm:elementtree@0.1.6",
        "glob": "npm:glob@5.0.15",
        "plist": "npm:plist@1.2.0",
        "q": "npm:q@1.0.1",
        "underscore": "npm:underscore@1.7.0",
        "tar": "npm:tar@1.0.2",
        "cordova-fetch": "npm:cordova-fetch@1.0.1",
        "dep-graph": "npm:dep-graph@1.1.0",
        "cordova-serve": "npm:cordova-serve@1.0.0",
        "opener": "npm:opener@1.4.1",
        "properties-parser": "npm:properties-parser@0.2.3",
        "valid-identifier": "npm:valid-identifier@0.0.1",
        "cordova-create": "npm:cordova-create@1.0.1",
        "aliasify": "npm:aliasify@1.9.0",
        "init-package-json": "npm:init-package-json@1.9.4",
        "xcode": "npm:xcode@0.8.9",
        "cordova-js": "npm:cordova-js@4.2.0",
        "npm": "npm:npm@2.15.11"
      }
    },
    "npm:inflight@1.0.6": {
      "map": {
        "once": "npm:once@1.4.0",
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:package-json@1.2.0": {
      "map": {
        "registry-url": "npm:registry-url@3.1.0",
        "got": "npm:got@3.3.1"
      }
    },
    "npm:hawk@3.1.3": {
      "map": {
        "sntp": "npm:sntp@1.0.9",
        "hoek": "npm:hoek@2.16.3",
        "cryptiles": "npm:cryptiles@2.0.5",
        "boom": "npm:boom@2.10.1"
      }
    },
    "npm:http-signature@1.1.1": {
      "map": {
        "assert-plus": "npm:assert-plus@0.2.0",
        "jsprim": "npm:jsprim@1.3.1",
        "sshpk": "npm:sshpk@1.10.1"
      }
    },
    "npm:mime-types@2.1.12": {
      "map": {
        "mime-db": "npm:mime-db@1.24.0"
      }
    },
    "npm:combined-stream@1.0.5": {
      "map": {
        "delayed-stream": "npm:delayed-stream@1.0.0"
      }
    },
    "npm:once@1.4.0": {
      "map": {
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:request@2.47.0": {
      "map": {
        "caseless": "npm:caseless@0.6.0",
        "forever-agent": "npm:forever-agent@0.5.2",
        "form-data": "npm:form-data@0.1.4",
        "mime-types": "npm:mime-types@1.0.2",
        "qs": "npm:qs@2.3.3",
        "http-signature": "npm:http-signature@0.10.1",
        "oauth-sign": "npm:oauth-sign@0.4.0",
        "hawk": "npm:hawk@1.1.1",
        "aws-sign2": "npm:aws-sign2@0.5.0",
        "combined-stream": "npm:combined-stream@0.0.7",
        "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
        "node-uuid": "npm:node-uuid@1.4.7",
        "tunnel-agent": "npm:tunnel-agent@0.4.3",
        "tough-cookie": "npm:tough-cookie@2.3.2",
        "stringstream": "npm:stringstream@0.0.5",
        "bl": "npm:bl@0.9.5"
      }
    },
    "npm:nopt@3.0.6": {
      "map": {
        "abbrev": "npm:abbrev@1.0.9"
      }
    },
    "npm:form-data@0.1.4": {
      "map": {
        "async": "npm:async@0.9.2",
        "combined-stream": "npm:combined-stream@0.0.7",
        "mime": "npm:mime@1.2.11"
      }
    },
    "npm:http-signature@0.10.1": {
      "map": {
        "assert-plus": "npm:assert-plus@0.1.5",
        "ctype": "npm:ctype@0.5.3",
        "asn1": "npm:asn1@0.1.11"
      }
    },
    "npm:hawk@1.1.1": {
      "map": {
        "hoek": "npm:hoek@0.9.1",
        "sntp": "npm:sntp@0.2.4",
        "cryptiles": "npm:cryptiles@0.2.2",
        "boom": "npm:boom@0.4.2"
      }
    },
    "npm:combined-stream@0.0.7": {
      "map": {
        "delayed-stream": "npm:delayed-stream@0.0.5"
      }
    },
    "npm:restore-cursor@1.0.1": {
      "map": {
        "exit-hook": "npm:exit-hook@1.1.1",
        "onetime": "npm:onetime@1.1.0"
      }
    },
    "npm:sshpk@1.10.1": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0",
        "dashdash": "npm:dashdash@1.14.0",
        "getpass": "npm:getpass@0.1.6",
        "asn1": "npm:asn1@0.2.3"
      }
    },
    "npm:is-my-json-valid@2.15.0": {
      "map": {
        "xtend": "npm:xtend@4.0.1",
        "generate-object-property": "npm:generate-object-property@1.2.0",
        "generate-function": "npm:generate-function@2.0.0",
        "jsonpointer": "npm:jsonpointer@4.0.0"
      }
    },
    "npm:sntp@1.0.9": {
      "map": {
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:tar@1.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "block-stream": "npm:block-stream@0.0.9",
        "fstream": "npm:fstream@1.0.10"
      }
    },
    "npm:sntp@0.2.4": {
      "map": {
        "hoek": "npm:hoek@0.9.1"
      }
    },
    "npm:got@3.3.1": {
      "map": {
        "object-assign": "npm:object-assign@3.0.0",
        "infinity-agent": "npm:infinity-agent@2.0.3",
        "is-redirect": "npm:is-redirect@1.0.0",
        "lowercase-keys": "npm:lowercase-keys@1.0.0",
        "is-stream": "npm:is-stream@1.1.0",
        "prepend-http": "npm:prepend-http@1.0.4",
        "timed-out": "npm:timed-out@2.0.0",
        "nested-error-stacks": "npm:nested-error-stacks@1.0.2",
        "read-all-stream": "npm:read-all-stream@3.1.0",
        "duplexify": "npm:duplexify@3.5.0"
      }
    },
    "npm:cordova-fetch@1.0.1": {
      "map": {
        "shelljs": "npm:shelljs@0.7.5",
        "cordova-common": "npm:cordova-common@1.5.1",
        "q": "npm:q@1.4.1",
        "dependency-ls": "npm:dependency-ls@1.0.0",
        "is-url": "npm:is-url@1.2.2"
      }
    },
    "npm:dep-graph@1.1.0": {
      "map": {
        "underscore": "npm:underscore@1.2.1"
      }
    },
    "npm:cryptiles@0.2.2": {
      "map": {
        "boom": "npm:boom@0.4.2"
      }
    },
    "npm:pinkie-promise@2.0.1": {
      "map": {
        "pinkie": "npm:pinkie@2.0.4"
      }
    },
    "npm:jsprim@1.3.1": {
      "map": {
        "json-schema": "npm:json-schema@0.2.3",
        "verror": "npm:verror@1.3.6",
        "extsprintf": "npm:extsprintf@1.0.2"
      }
    },
    "npm:cordova-serve@1.0.0": {
      "map": {
        "chalk": "npm:chalk@1.1.3",
        "q": "npm:q@1.4.1",
        "compression": "npm:compression@1.6.2",
        "express": "npm:express@4.14.0"
      }
    },
    "npm:cordova-create@1.0.1": {
      "map": {
        "cordova-common": "npm:cordova-common@1.5.1",
        "cordova-fetch": "npm:cordova-fetch@1.0.1",
        "q": "npm:q@1.0.1",
        "shelljs": "npm:shelljs@0.3.0",
        "valid-identifier": "npm:valid-identifier@0.0.1",
        "cordova-app-hello-world": "npm:cordova-app-hello-world@3.11.0"
      }
    },
    "npm:cryptiles@2.0.5": {
      "map": {
        "boom": "npm:boom@2.10.1"
      }
    },
    "npm:shelljs@0.7.5": {
      "map": {
        "glob": "npm:glob@7.1.1",
        "rechoir": "npm:rechoir@0.6.2",
        "interpret": "npm:interpret@1.0.1"
      }
    },
    "npm:init-package-json@1.9.4": {
      "map": {
        "glob": "npm:glob@6.0.4",
        "semver": "npm:semver@5.3.0",
        "read": "npm:read@1.0.7",
        "validate-npm-package-license": "npm:validate-npm-package-license@3.0.1",
        "promzard": "npm:promzard@0.3.0",
        "npm-package-arg": "npm:npm-package-arg@4.2.0",
        "validate-npm-package-name": "npm:validate-npm-package-name@2.2.2",
        "read-package-json": "npm:read-package-json@2.0.4"
      }
    },
    "npm:xcode@0.8.9": {
      "map": {
        "node-uuid": "npm:node-uuid@1.4.7",
        "simple-plist": "npm:simple-plist@0.1.4",
        "pegjs": "npm:pegjs@0.9.0"
      }
    },
    "npm:registry-url@3.1.0": {
      "map": {
        "rc": "npm:rc@1.1.6"
      }
    },
    "npm:boom@0.4.2": {
      "map": {
        "hoek": "npm:hoek@0.9.1"
      }
    },
    "npm:bl@0.9.5": {
      "map": {
        "readable-stream": "npm:readable-stream@1.0.34"
      }
    },
    "npm:glob@6.0.4": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "inflight": "npm:inflight@1.0.6",
        "minimatch": "npm:minimatch@3.0.3",
        "once": "npm:once@1.4.0",
        "path-is-absolute": "npm:path-is-absolute@1.0.1"
      }
    },
    "npm:boom@2.10.1": {
      "map": {
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:verror@1.3.6": {
      "map": {
        "extsprintf": "npm:extsprintf@1.0.2"
      }
    },
    "npm:jodid25519@1.0.2": {
      "map": {
        "jsbn": "npm:jsbn@0.1.0"
      }
    },
    "npm:ecc-jsbn@0.1.1": {
      "map": {
        "jsbn": "npm:jsbn@0.1.0"
      }
    },
    "npm:bcrypt-pbkdf@1.0.0": {
      "map": {
        "tweetnacl": "npm:tweetnacl@0.14.3"
      }
    },
    "npm:dashdash@1.14.0": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0"
      }
    },
    "npm:getpass@0.1.6": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0"
      }
    },
    "npm:glob@7.1.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimatch": "npm:minimatch@3.0.3",
        "inflight": "npm:inflight@1.0.6",
        "once": "npm:once@1.4.0",
        "path-is-absolute": "npm:path-is-absolute@1.0.1",
        "fs.realpath": "npm:fs.realpath@1.0.0"
      }
    },
    "npm:fstream@1.0.10": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "graceful-fs": "npm:graceful-fs@4.1.10",
        "mkdirp": "npm:mkdirp@0.5.1",
        "rimraf": "npm:rimraf@2.5.4"
      }
    },
    "npm:block-stream@0.0.9": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:cordova-js@4.2.0": {
      "map": {
        "browserify": "npm:browserify@13.1.0"
      }
    },
    "npm:rc@1.1.6": {
      "map": {
        "minimist": "npm:minimist@1.2.0",
        "deep-extend": "npm:deep-extend@0.4.1",
        "ini": "npm:ini@1.3.4",
        "strip-json-comments": "npm:strip-json-comments@1.0.4"
      }
    },
    "npm:generate-object-property@1.2.0": {
      "map": {
        "is-property": "npm:is-property@1.0.2"
      }
    },
    "npm:commander@2.9.0": {
      "map": {
        "graceful-readlink": "npm:graceful-readlink@1.0.1"
      }
    },
    "npm:nested-error-stacks@1.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:dependency-ls@1.0.0": {
      "map": {
        "q": "npm:q@1.4.1"
      }
    },
    "npm:browserify@13.1.0": {
      "map": {
        "os-browserify": "npm:os-browserify@0.1.2",
        "buffer": "npm:buffer@4.9.1",
        "crypto-browserify": "npm:crypto-browserify@3.11.0",
        "inherits": "npm:inherits@2.0.3",
        "process": "npm:process@0.11.9",
        "punycode": "npm:punycode@1.4.1",
        "readable-stream": "npm:readable-stream@2.2.2",
        "stream-browserify": "npm:stream-browserify@2.0.1",
        "stream-http": "npm:stream-http@2.5.0",
        "string_decoder": "npm:string_decoder@0.10.31",
        "timers-browserify": "npm:timers-browserify@1.4.2",
        "url": "npm:url@0.11.0",
        "xtend": "npm:xtend@4.0.1",
        "glob": "npm:glob@5.0.15",
        "assert": "npm:assert@1.3.0",
        "browser-resolve": "npm:browser-resolve@1.11.2",
        "browser-pack": "npm:browser-pack@6.0.1",
        "JSONStream": "npm:JSONStream@1.2.1",
        "concat-stream": "npm:concat-stream@1.5.2",
        "browserify-zlib": "npm:browserify-zlib@0.1.4",
        "console-browserify": "npm:console-browserify@1.1.0",
        "deps-sort": "npm:deps-sort@2.0.0",
        "events": "npm:events@1.1.1",
        "domain-browser": "npm:domain-browser@1.1.7",
        "has": "npm:has@1.0.1",
        "duplexer2": "npm:duplexer2@0.1.4",
        "htmlescape": "npm:htmlescape@1.1.1",
        "parents": "npm:parents@1.0.1",
        "labeled-stream-splicer": "npm:labeled-stream-splicer@2.0.0",
        "insert-module-globals": "npm:insert-module-globals@7.0.1",
        "module-deps": "npm:module-deps@4.0.8",
        "resolve": "npm:resolve@1.1.7",
        "path-browserify": "npm:path-browserify@0.0.0",
        "querystring-es3": "npm:querystring-es3@0.2.1",
        "read-only-stream": "npm:read-only-stream@2.0.0",
        "syntax-error": "npm:syntax-error@1.1.6",
        "shasum": "npm:shasum@1.0.2",
        "shell-quote": "npm:shell-quote@1.6.1",
        "subarg": "npm:subarg@1.0.0",
        "vm-browserify": "npm:vm-browserify@0.0.4",
        "through2": "npm:through2@2.0.1",
        "util": "npm:util@0.10.3",
        "https-browserify": "npm:https-browserify@0.0.1",
        "constants-browserify": "npm:constants-browserify@1.0.0",
        "tty-browserify": "npm:tty-browserify@0.0.0",
        "defined": "npm:defined@1.0.0"
      }
    },
    "npm:read-all-stream@3.1.0": {
      "map": {
        "readable-stream": "npm:readable-stream@2.2.2",
        "pinkie-promise": "npm:pinkie-promise@2.0.1"
      }
    },
    "npm:duplexify@3.5.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.2.2",
        "end-of-stream": "npm:end-of-stream@1.0.0",
        "stream-shift": "npm:stream-shift@1.0.0"
      }
    },
    "npm:readable-stream@1.0.34": {
      "map": {
        "isarray": "npm:isarray@0.0.1",
        "stream-browserify": "npm:stream-browserify@1.0.0",
        "core-util-is": "npm:core-util-is@1.0.2",
        "string_decoder": "npm:string_decoder@0.10.31",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:aliasify@1.9.0": {
      "map": {
        "browserify-transform-tools": "npm:browserify-transform-tools@1.5.3"
      }
    },
    "npm:read@1.0.7": {
      "map": {
        "mute-stream": "npm:mute-stream@0.0.6"
      }
    },
    "npm:simple-plist@0.1.4": {
      "map": {
        "bplist-parser": "npm:bplist-parser@0.0.6",
        "plist": "npm:plist@1.2.0",
        "bplist-creator": "npm:bplist-creator@0.0.4"
      }
    },
    "npm:stream-http@2.5.0": {
      "map": {
        "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
        "inherits": "npm:inherits@2.0.3",
        "xtend": "npm:xtend@4.0.1",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "readable-stream": "npm:readable-stream@2.2.2"
      }
    },
    "npm:promzard@0.3.0": {
      "map": {
        "read": "npm:read@1.0.7"
      }
    },
    "npm:rechoir@0.6.2": {
      "map": {
        "resolve": "npm:resolve@1.1.7"
      }
    },
    "npm:compression@1.6.2": {
      "map": {
        "debug": "npm:debug@2.2.0",
        "on-headers": "npm:on-headers@1.0.1",
        "vary": "npm:vary@1.1.0",
        "compressible": "npm:compressible@2.0.9",
        "bytes": "npm:bytes@2.3.0",
        "accepts": "npm:accepts@1.3.3"
      }
    },
    "npm:npm-package-arg@4.2.0": {
      "map": {
        "semver": "npm:semver@5.3.0",
        "hosted-git-info": "npm:hosted-git-info@2.1.5"
      }
    },
    "npm:browserify-transform-tools@1.5.3": {
      "map": {
        "through": "npm:through@2.3.8",
        "falafel": "npm:falafel@1.2.0"
      }
    },
    "npm:validate-npm-package-license@3.0.1": {
      "map": {
        "spdx-expression-parse": "npm:spdx-expression-parse@1.0.4",
        "spdx-correct": "npm:spdx-correct@1.0.2"
      }
    },
    "npm:stream-browserify@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@1.1.14"
      }
    },
    "npm:read-package-json@2.0.4": {
      "map": {
        "glob": "npm:glob@6.0.4",
        "normalize-package-data": "npm:normalize-package-data@2.3.5",
        "json-parse-helpfulerror": "npm:json-parse-helpfulerror@1.0.3"
      }
    },
    "npm:concat-stream@1.5.2": {
      "map": {
        "readable-stream": "npm:readable-stream@2.0.6",
        "inherits": "npm:inherits@2.0.3",
        "typedarray": "npm:typedarray@0.0.6"
      }
    },
    "npm:through2@2.0.1": {
      "map": {
        "readable-stream": "npm:readable-stream@2.0.6",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:module-deps@4.0.8": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "xtend": "npm:xtend@4.0.1",
        "JSONStream": "npm:JSONStream@1.2.1",
        "browser-resolve": "npm:browser-resolve@1.11.2",
        "concat-stream": "npm:concat-stream@1.5.2",
        "defined": "npm:defined@1.0.0",
        "duplexer2": "npm:duplexer2@0.1.4",
        "parents": "npm:parents@1.0.1",
        "readable-stream": "npm:readable-stream@2.2.2",
        "resolve": "npm:resolve@1.1.7",
        "subarg": "npm:subarg@1.0.0",
        "through2": "npm:through2@2.0.1",
        "detective": "npm:detective@4.3.2",
        "cached-path-relative": "npm:cached-path-relative@1.0.0",
        "stream-combiner2": "npm:stream-combiner2@1.1.1"
      }
    },
    "npm:insert-module-globals@7.0.1": {
      "map": {
        "process": "npm:process@0.11.9",
        "xtend": "npm:xtend@4.0.1",
        "JSONStream": "npm:JSONStream@1.2.1",
        "concat-stream": "npm:concat-stream@1.5.2",
        "through2": "npm:through2@2.0.1",
        "combine-source-map": "npm:combine-source-map@0.7.2",
        "lexical-scope": "npm:lexical-scope@1.2.0",
        "is-buffer": "npm:is-buffer@1.1.4"
      }
    },
    "npm:labeled-stream-splicer@2.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "isarray": "npm:isarray@0.0.1",
        "stream-splicer": "npm:stream-splicer@2.0.0"
      }
    },
    "npm:shasum@1.0.2": {
      "map": {
        "sha.js": "npm:sha.js@2.4.8",
        "json-stable-stringify": "npm:json-stable-stringify@0.0.1"
      }
    },
    "npm:util@0.10.3": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:assert@1.3.0": {
      "map": {
        "util": "npm:util@0.10.3"
      }
    },
    "npm:browser-resolve@1.11.2": {
      "map": {
        "resolve": "npm:resolve@1.1.7"
      }
    },
    "npm:deps-sort@2.0.0": {
      "map": {
        "JSONStream": "npm:JSONStream@1.2.1",
        "shasum": "npm:shasum@1.0.2",
        "subarg": "npm:subarg@1.0.0",
        "through2": "npm:through2@2.0.1"
      }
    },
    "npm:JSONStream@1.2.1": {
      "map": {
        "through": "npm:through@2.3.8",
        "jsonparse": "npm:jsonparse@1.2.0"
      }
    },
    "npm:browser-pack@6.0.1": {
      "map": {
        "JSONStream": "npm:JSONStream@1.2.1",
        "defined": "npm:defined@1.0.0",
        "through2": "npm:through2@2.0.1",
        "combine-source-map": "npm:combine-source-map@0.7.2",
        "umd": "npm:umd@3.0.1"
      }
    },
    "npm:duplexer2@0.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.2.2"
      }
    },
    "npm:read-only-stream@2.0.0": {
      "map": {
        "readable-stream": "npm:readable-stream@2.2.2"
      }
    },
    "npm:subarg@1.0.0": {
      "map": {
        "minimist": "npm:minimist@1.2.0"
      }
    },
    "npm:end-of-stream@1.0.0": {
      "map": {
        "once": "npm:once@1.3.3"
      }
    },
    "npm:readable-stream@1.1.14": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "string_decoder": "npm:string_decoder@0.10.31",
        "inherits": "npm:inherits@2.0.3",
        "isarray": "npm:isarray@0.0.1",
        "stream-browserify": "npm:stream-browserify@1.0.0"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.2.2",
        "pako": "npm:pako@0.2.9"
      }
    },
    "npm:sha.js@2.4.8": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:validate-npm-package-name@2.2.2": {
      "map": {
        "builtins": "npm:builtins@0.0.7"
      }
    },
    "npm:console-browserify@1.1.0": {
      "map": {
        "date-now": "npm:date-now@0.1.4"
      }
    },
    "npm:has@1.0.1": {
      "map": {
        "function-bind": "npm:function-bind@1.1.0"
      }
    },
    "npm:syntax-error@1.1.6": {
      "map": {
        "acorn": "npm:acorn@2.7.0"
      }
    },
    "npm:shell-quote@1.6.1": {
      "map": {
        "jsonify": "npm:jsonify@0.0.0",
        "array-filter": "npm:array-filter@0.0.1",
        "array-map": "npm:array-map@0.0.0",
        "array-reduce": "npm:array-reduce@0.0.0"
      }
    },
    "npm:vm-browserify@0.0.4": {
      "map": {
        "indexof": "npm:indexof@0.0.1"
      }
    },
    "npm:readable-stream@2.0.6": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.3",
        "isarray": "npm:isarray@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "string_decoder": "npm:string_decoder@0.10.31",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:rimraf@2.5.4": {
      "map": {
        "glob": "npm:glob@7.1.1"
      }
    },
    "npm:spdx-correct@1.0.2": {
      "map": {
        "spdx-license-ids": "npm:spdx-license-ids@1.2.2"
      }
    },
    "npm:compressible@2.0.9": {
      "map": {
        "mime-db": "npm:mime-db@1.25.0"
      }
    },
    "npm:falafel@1.2.0": {
      "map": {
        "acorn": "npm:acorn@1.2.2",
        "isarray": "npm:isarray@0.0.1",
        "foreach": "npm:foreach@2.0.5",
        "object-keys": "npm:object-keys@1.0.11"
      }
    },
    "npm:normalize-package-data@2.3.5": {
      "map": {
        "semver": "npm:semver@5.3.0",
        "hosted-git-info": "npm:hosted-git-info@2.1.5",
        "validate-npm-package-license": "npm:validate-npm-package-license@3.0.1",
        "is-builtin-module": "npm:is-builtin-module@1.0.0"
      }
    },
    "npm:once@1.3.3": {
      "map": {
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:accepts@1.3.3": {
      "map": {
        "mime-types": "npm:mime-types@2.1.12",
        "negotiator": "npm:negotiator@0.6.1"
      }
    },
    "npm:parents@1.0.1": {
      "map": {
        "path-platform": "npm:path-platform@0.11.15"
      }
    },
    "npm:detective@4.3.2": {
      "map": {
        "acorn": "npm:acorn@3.3.0",
        "defined": "npm:defined@1.0.0"
      }
    },
    "npm:stream-combiner2@1.1.1": {
      "map": {
        "duplexer2": "npm:duplexer2@0.1.4",
        "readable-stream": "npm:readable-stream@2.2.2"
      }
    },
    "npm:json-stable-stringify@0.0.1": {
      "map": {
        "jsonify": "npm:jsonify@0.0.0"
      }
    },
    "npm:bplist-creator@0.0.4": {
      "map": {
        "stream-buffers": "npm:stream-buffers@0.2.6"
      }
    },
    "npm:combine-source-map@0.7.2": {
      "map": {
        "inline-source-map": "npm:inline-source-map@0.6.2",
        "convert-source-map": "npm:convert-source-map@1.1.3",
        "source-map": "npm:source-map@0.5.6",
        "lodash.memoize": "npm:lodash.memoize@3.0.4"
      }
    },
    "npm:lexical-scope@1.2.0": {
      "map": {
        "astw": "npm:astw@2.0.0"
      }
    },
    "npm:stream-splicer@2.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.2.2"
      }
    },
    "npm:json-parse-helpfulerror@1.0.3": {
      "map": {
        "jju": "npm:jju@1.3.0"
      }
    },
    "npm:express@4.14.0": {
      "map": {
        "qs": "npm:qs@6.2.0",
        "debug": "npm:debug@2.2.0",
        "accepts": "npm:accepts@1.3.3",
        "vary": "npm:vary@1.1.0",
        "cookie-signature": "npm:cookie-signature@1.0.6",
        "cookie": "npm:cookie@0.3.1",
        "escape-html": "npm:escape-html@1.0.3",
        "content-type": "npm:content-type@1.0.2",
        "encodeurl": "npm:encodeurl@1.0.1",
        "range-parser": "npm:range-parser@1.2.0",
        "utils-merge": "npm:utils-merge@1.0.0",
        "content-disposition": "npm:content-disposition@0.5.1",
        "finalhandler": "npm:finalhandler@0.5.0",
        "merge-descriptors": "npm:merge-descriptors@1.0.1",
        "methods": "npm:methods@1.1.2",
        "on-finished": "npm:on-finished@2.3.0",
        "fresh": "npm:fresh@0.3.0",
        "parseurl": "npm:parseurl@1.3.1",
        "etag": "npm:etag@1.7.0",
        "proxy-addr": "npm:proxy-addr@1.1.2",
        "depd": "npm:depd@1.1.0",
        "type-is": "npm:type-is@1.6.13",
        "array-flatten": "npm:array-flatten@1.1.1",
        "send": "npm:send@0.14.1",
        "serve-static": "npm:serve-static@1.11.1",
        "path-to-regexp": "npm:path-to-regexp@0.1.7"
      }
    },
    "npm:inline-source-map@0.6.2": {
      "map": {
        "source-map": "npm:source-map@0.5.6"
      }
    },
    "npm:astw@2.0.0": {
      "map": {
        "acorn": "npm:acorn@1.2.2"
      }
    },
    "npm:is-builtin-module@1.0.0": {
      "map": {
        "builtin-modules": "npm:builtin-modules@1.1.1"
      }
    },
    "npm:jspm-nodelibs-zlib@0.2.0": {
      "map": {
        "zlib-browserify": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:finalhandler@0.5.0": {
      "map": {
        "debug": "npm:debug@2.2.0",
        "escape-html": "npm:escape-html@1.0.3",
        "on-finished": "npm:on-finished@2.3.0",
        "unpipe": "npm:unpipe@1.0.0",
        "statuses": "npm:statuses@1.3.1"
      }
    },
    "npm:type-is@1.6.13": {
      "map": {
        "mime-types": "npm:mime-types@2.1.12",
        "media-typer": "npm:media-typer@0.3.0"
      }
    },
    "npm:send@0.14.1": {
      "map": {
        "mime": "npm:mime@1.3.4",
        "debug": "npm:debug@2.2.0",
        "ms": "npm:ms@0.7.1",
        "depd": "npm:depd@1.1.0",
        "encodeurl": "npm:encodeurl@1.0.1",
        "escape-html": "npm:escape-html@1.0.3",
        "etag": "npm:etag@1.7.0",
        "fresh": "npm:fresh@0.3.0",
        "on-finished": "npm:on-finished@2.3.0",
        "range-parser": "npm:range-parser@1.2.0",
        "statuses": "npm:statuses@1.3.1",
        "destroy": "npm:destroy@1.0.4",
        "http-errors": "npm:http-errors@1.5.1"
      }
    },
    "npm:serve-static@1.11.1": {
      "map": {
        "encodeurl": "npm:encodeurl@1.0.1",
        "escape-html": "npm:escape-html@1.0.3",
        "parseurl": "npm:parseurl@1.3.1",
        "send": "npm:send@0.14.1"
      }
    },
    "npm:on-finished@2.3.0": {
      "map": {
        "ee-first": "npm:ee-first@1.1.1"
      }
    },
    "npm:proxy-addr@1.1.2": {
      "map": {
        "forwarded": "npm:forwarded@0.1.0",
        "ipaddr.js": "npm:ipaddr.js@1.1.1"
      }
    },
    "npm:npm@2.15.11": {
      "map": {
        "glob": "npm:glob@7.0.6",
        "npm-package-arg": "npm:npm-package-arg@4.1.1",
        "request": "npm:request@2.74.0",
        "semver": "npm:semver@5.1.1",
        "tar": "npm:tar@2.2.1",
        "write-file-atomic": "npm:write-file-atomic@1.1.4",
        "abbrev": "npm:abbrev@1.0.9",
        "ansi": "npm:ansi@0.3.1",
        "block-stream": "npm:block-stream@0.0.9",
        "fstream": "npm:fstream@1.0.10",
        "graceful-fs": "npm:graceful-fs@4.1.10",
        "hosted-git-info": "npm:hosted-git-info@2.1.5",
        "inflight": "npm:inflight@1.0.6",
        "inherits": "npm:inherits@2.0.3",
        "ini": "npm:ini@1.3.4",
        "init-package-json": "npm:init-package-json@1.9.4",
        "minimatch": "npm:minimatch@3.0.3",
        "mkdirp": "npm:mkdirp@0.5.1",
        "nopt": "npm:nopt@3.0.6",
        "normalize-package-data": "npm:normalize-package-data@2.3.5",
        "once": "npm:once@1.4.0",
        "opener": "npm:opener@1.4.2",
        "osenv": "npm:osenv@0.1.3",
        "read": "npm:read@1.0.7",
        "read-package-json": "npm:read-package-json@2.0.4",
        "readable-stream": "npm:readable-stream@2.1.5",
        "rimraf": "npm:rimraf@2.5.4",
        "slide": "npm:slide@1.1.6",
        "spdx-license-ids": "npm:spdx-license-ids@1.2.2",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "validate-npm-package-license": "npm:validate-npm-package-license@3.0.1",
        "validate-npm-package-name": "npm:validate-npm-package-name@2.2.2",
        "wrappy": "npm:wrappy@1.0.2",
        "ansi-regex": "npm:ansi-regex@2.0.0",
        "imurmurhash": "npm:imurmurhash@0.1.4",
        "npmlog": "npm:npmlog@2.0.4",
        "uid-number": "npm:uid-number@0.0.6",
        "which": "npm:which@1.2.12",
        "text-table": "npm:text-table@0.2.0",
        "chownr": "npm:chownr@1.0.1",
        "ansistyles": "npm:ansistyles@0.1.3",
        "archy": "npm:archy@1.0.0",
        "chmodr": "npm:chmodr@1.0.2",
        "github-url-from-git": "npm:github-url-from-git@1.4.0",
        "github-url-from-username-repo": "npm:github-url-from-username-repo@1.0.2",
        "npm-user-validate": "npm:npm-user-validate@0.1.5",
        "path-is-inside": "npm:path-is-inside@1.0.2",
        "sorted-object": "npm:sorted-object@2.0.1",
        "umask": "npm:umask@1.1.0",
        "ansicolors": "npm:ansicolors@0.3.2",
        "cmd-shim": "npm:cmd-shim@2.0.2",
        "dezalgo": "npm:dezalgo@1.0.3",
        "normalize-git-url": "npm:normalize-git-url@3.0.2",
        "npm-cache-filename": "npm:npm-cache-filename@1.0.2",
        "fstream-npm": "npm:fstream-npm@1.1.1",
        "lockfile": "npm:lockfile@1.0.2",
        "npm-install-checks": "npm:npm-install-checks@1.0.7",
        "config-chain": "npm:config-chain@1.1.11",
        "retry": "npm:retry@0.10.0",
        "read-installed": "npm:read-installed@4.0.3",
        "fs-vacuum": "npm:fs-vacuum@1.2.9",
        "char-spinner": "npm:char-spinner@1.0.1",
        "async-some": "npm:async-some@1.0.2",
        "columnify": "npm:columnify@1.5.4",
        "sha": "npm:sha@2.0.1",
        "realize-package-specifier": "npm:realize-package-specifier@3.0.3",
        "lru-cache": "npm:lru-cache@4.0.1",
        "editor": "npm:editor@1.0.0",
        "fs-write-stream-atomic": "npm:fs-write-stream-atomic@1.0.8",
        "node-gyp": "npm:node-gyp@3.4.0",
        "npm-registry-client": "npm:npm-registry-client@7.2.1"
      }
    },
    "npm:request@2.74.0": {
      "map": {
        "bl": "npm:bl@1.1.2",
        "form-data": "npm:form-data@1.0.1",
        "aws-sign2": "npm:aws-sign2@0.6.0",
        "aws4": "npm:aws4@1.5.0",
        "caseless": "npm:caseless@0.11.0",
        "combined-stream": "npm:combined-stream@1.0.5",
        "extend": "npm:extend@3.0.0",
        "forever-agent": "npm:forever-agent@0.6.1",
        "har-validator": "npm:har-validator@2.0.6",
        "hawk": "npm:hawk@3.1.3",
        "http-signature": "npm:http-signature@1.1.1",
        "is-typedarray": "npm:is-typedarray@1.0.0",
        "isstream": "npm:isstream@0.1.2",
        "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
        "mime-types": "npm:mime-types@2.1.12",
        "node-uuid": "npm:node-uuid@1.4.7",
        "oauth-sign": "npm:oauth-sign@0.8.2",
        "qs": "npm:qs@6.2.1",
        "stringstream": "npm:stringstream@0.0.5",
        "tough-cookie": "npm:tough-cookie@2.3.2",
        "tunnel-agent": "npm:tunnel-agent@0.4.3"
      }
    },
    "npm:npm-package-arg@4.1.1": {
      "map": {
        "hosted-git-info": "npm:hosted-git-info@2.1.5",
        "semver": "npm:semver@5.3.0"
      }
    },
    "npm:glob@7.0.6": {
      "map": {
        "fs.realpath": "npm:fs.realpath@1.0.0",
        "inflight": "npm:inflight@1.0.6",
        "inherits": "npm:inherits@2.0.3",
        "minimatch": "npm:minimatch@3.0.3",
        "once": "npm:once@1.4.0",
        "path-is-absolute": "npm:path-is-absolute@1.0.1"
      }
    },
    "npm:write-file-atomic@1.1.4": {
      "map": {
        "graceful-fs": "npm:graceful-fs@4.1.10",
        "imurmurhash": "npm:imurmurhash@0.1.4",
        "slide": "npm:slide@1.1.6"
      }
    },
    "npm:form-data@1.0.1": {
      "map": {
        "async": "npm:async@2.1.2",
        "combined-stream": "npm:combined-stream@1.0.5",
        "mime-types": "npm:mime-types@2.1.12"
      }
    },
    "npm:bl@1.1.2": {
      "map": {
        "readable-stream": "npm:readable-stream@2.0.6"
      }
    },
    "npm:tar@2.2.1": {
      "map": {
        "block-stream": "npm:block-stream@0.0.9",
        "fstream": "npm:fstream@1.0.10",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:npmlog@2.0.4": {
      "map": {
        "ansi": "npm:ansi@0.3.1",
        "are-we-there-yet": "npm:are-we-there-yet@1.1.2",
        "gauge": "npm:gauge@1.2.7"
      }
    },
    "npm:async@2.1.2": {
      "map": {
        "lodash": "npm:lodash@4.17.2"
      }
    },
    "npm:dezalgo@1.0.3": {
      "map": {
        "wrappy": "npm:wrappy@1.0.2",
        "asap": "npm:asap@2.0.5"
      }
    },
    "npm:cmd-shim@2.0.2": {
      "map": {
        "graceful-fs": "npm:graceful-fs@4.1.10",
        "mkdirp": "npm:mkdirp@0.5.1"
      }
    },
    "npm:fstream-npm@1.1.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "fstream-ignore": "npm:fstream-ignore@1.0.5"
      }
    },
    "npm:npm-install-checks@1.0.7": {
      "map": {
        "semver": "npm:semver@5.3.0",
        "npmlog": "npm:npmlog@2.0.4"
      }
    },
    "npm:config-chain@1.1.11": {
      "map": {
        "ini": "npm:ini@1.3.4",
        "proto-list": "npm:proto-list@1.2.4"
      }
    },
    "npm:fs-vacuum@1.2.9": {
      "map": {
        "graceful-fs": "npm:graceful-fs@4.1.10",
        "rimraf": "npm:rimraf@2.5.4",
        "path-is-inside": "npm:path-is-inside@1.0.2"
      }
    },
    "npm:read-installed@4.0.3": {
      "map": {
        "read-package-json": "npm:read-package-json@2.0.4",
        "semver": "npm:semver@5.3.0",
        "slide": "npm:slide@1.1.6",
        "debuglog": "npm:debuglog@1.0.1",
        "util-extend": "npm:util-extend@1.0.3",
        "readdir-scoped-modules": "npm:readdir-scoped-modules@1.0.2"
      }
    },
    "npm:async-some@1.0.2": {
      "map": {
        "dezalgo": "npm:dezalgo@1.0.3"
      }
    },
    "npm:sha@2.0.1": {
      "map": {
        "graceful-fs": "npm:graceful-fs@4.1.10",
        "readable-stream": "npm:readable-stream@2.2.2"
      }
    },
    "npm:realize-package-specifier@3.0.3": {
      "map": {
        "npm-package-arg": "npm:npm-package-arg@4.2.0",
        "dezalgo": "npm:dezalgo@1.0.3"
      }
    },
    "npm:columnify@1.5.4": {
      "map": {
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "wcwidth": "npm:wcwidth@1.0.1"
      }
    },
    "npm:fs-write-stream-atomic@1.0.8": {
      "map": {
        "graceful-fs": "npm:graceful-fs@4.1.10",
        "imurmurhash": "npm:imurmurhash@0.1.4",
        "readable-stream": "npm:readable-stream@2.2.2",
        "iferr": "npm:iferr@0.1.5"
      }
    },
    "npm:are-we-there-yet@1.1.2": {
      "map": {
        "readable-stream": "npm:readable-stream@1.1.14",
        "delegates": "npm:delegates@1.0.0"
      }
    },
    "npm:node-gyp@3.4.0": {
      "map": {
        "npmlog": "npm:npmlog@3.1.2",
        "fstream": "npm:fstream@1.0.10",
        "glob": "npm:glob@7.1.1",
        "graceful-fs": "npm:graceful-fs@4.1.10",
        "minimatch": "npm:minimatch@3.0.3",
        "mkdirp": "npm:mkdirp@0.5.1",
        "nopt": "npm:nopt@3.0.6",
        "osenv": "npm:osenv@0.1.3",
        "request": "npm:request@2.78.0",
        "semver": "npm:semver@5.3.0",
        "rimraf": "npm:rimraf@2.5.4",
        "tar": "npm:tar@2.2.1",
        "which": "npm:which@1.2.12",
        "path-array": "npm:path-array@1.0.1"
      }
    },
    "npm:npmlog@3.1.2": {
      "map": {
        "gauge": "npm:gauge@2.6.0",
        "are-we-there-yet": "npm:are-we-there-yet@1.1.2",
        "console-control-strings": "npm:console-control-strings@1.1.0",
        "set-blocking": "npm:set-blocking@2.0.0"
      }
    },
    "npm:npm-registry-client@7.2.1": {
      "map": {
        "concat-stream": "npm:concat-stream@1.5.2",
        "graceful-fs": "npm:graceful-fs@4.1.10",
        "normalize-package-data": "npm:normalize-package-data@2.3.5",
        "npm-package-arg": "npm:npm-package-arg@4.2.0",
        "once": "npm:once@1.4.0",
        "request": "npm:request@2.78.0",
        "semver": "npm:semver@5.3.0",
        "slide": "npm:slide@1.1.6",
        "retry": "npm:retry@0.10.0"
      }
    },
    "npm:lru-cache@4.0.1": {
      "map": {
        "pseudomap": "npm:pseudomap@1.0.2",
        "yallist": "npm:yallist@2.0.0"
      }
    },
    "npm:fstream-ignore@1.0.5": {
      "map": {
        "fstream": "npm:fstream@1.0.10",
        "inherits": "npm:inherits@2.0.3",
        "minimatch": "npm:minimatch@3.0.3"
      }
    },
    "npm:readdir-scoped-modules@1.0.2": {
      "map": {
        "graceful-fs": "npm:graceful-fs@4.1.10",
        "once": "npm:once@1.4.0",
        "debuglog": "npm:debuglog@1.0.1",
        "dezalgo": "npm:dezalgo@1.0.3"
      }
    },
    "npm:gauge@1.2.7": {
      "map": {
        "ansi": "npm:ansi@0.3.1",
        "has-unicode": "npm:has-unicode@2.0.1",
        "lodash.pad": "npm:lodash.pad@4.5.1",
        "lodash.padend": "npm:lodash.padend@4.6.1",
        "lodash.padstart": "npm:lodash.padstart@4.6.1"
      }
    },
    "npm:gauge@2.6.0": {
      "map": {
        "object-assign": "npm:object-assign@4.1.0",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "console-control-strings": "npm:console-control-strings@1.1.0",
        "has-unicode": "npm:has-unicode@2.0.1",
        "has-color": "npm:has-color@0.1.7",
        "string-width": "npm:string-width@1.0.2",
        "signal-exit": "npm:signal-exit@3.0.1",
        "wide-align": "npm:wide-align@1.1.0",
        "aproba": "npm:aproba@1.0.4"
      }
    },
    "npm:wcwidth@1.0.1": {
      "map": {
        "defaults": "npm:defaults@1.0.3"
      }
    },
    "npm:path-array@1.0.1": {
      "map": {
        "array-index": "npm:array-index@1.0.0"
      }
    },
    "npm:string-width@1.0.2": {
      "map": {
        "code-point-at": "npm:code-point-at@1.1.0",
        "is-fullwidth-code-point": "npm:is-fullwidth-code-point@1.0.0",
        "strip-ansi": "npm:strip-ansi@3.0.1"
      }
    },
    "npm:defaults@1.0.3": {
      "map": {
        "clone": "npm:clone@1.0.2"
      }
    },
    "npm:array-index@1.0.0": {
      "map": {
        "debug": "npm:debug@2.3.2",
        "es6-symbol": "npm:es6-symbol@3.1.0"
      }
    },
    "npm:wide-align@1.1.0": {
      "map": {
        "string-width": "npm:string-width@1.0.2"
      }
    },
    "npm:debug@2.3.2": {
      "map": {
        "ms": "npm:ms@0.7.2"
      }
    },
    "npm:jspm-nodelibs-domain@0.2.0": {
      "map": {
        "domain-browserify": "npm:domain-browser@1.1.7"
      }
    },
    "npm:babel-polyfill@6.16.0": {
      "map": {
        "core-js": "npm:core-js@2.4.1",
        "regenerator-runtime": "npm:regenerator-runtime@0.9.6",
        "babel-runtime": "npm:babel-runtime@6.18.0"
      }
    },
    "npm:babel-runtime@6.18.0": {
      "map": {
        "core-js": "npm:core-js@2.4.1",
        "regenerator-runtime": "npm:regenerator-runtime@0.9.6"
      }
    },
    "npm:readable-stream@2.2.2": {
      "map": {
        "isarray": "npm:isarray@1.0.0",
        "string_decoder": "npm:string_decoder@0.10.31",
        "inherits": "npm:inherits@2.0.3",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "core-util-is": "npm:core-util-is@1.0.2"
      }
    },
    "npm:pbkdf2@3.0.9": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:asn1.js@4.9.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:http-errors@1.5.1": {
      "map": {
        "statuses": "npm:statuses@1.3.1",
        "inherits": "npm:inherits@2.0.3",
        "setprototypeof": "npm:setprototypeof@1.0.2"
      }
    },
    "npm:which@1.2.12": {
      "map": {
        "isexe": "npm:isexe@1.1.2"
      }
    },
    "bitbucket:bizboard/nl.bizboard.mrbox.shared@develop": {
      "map": {
        "lodash": "npm:lodash@4.17.2",
        "arva-js": "github:bizboard/arva-js@develop",
        "file-saver": "npm:file-saver@1.3.3",
        "es2015-i18n-tag": "npm:es2015-i18n-tag@1.1.3",
        "month-days": "npm:month-days@1.0.0",
        "firebase": "npm:firebase@3.6.4",
        "moment": "npm:moment@2.17.1"
      }
    },
    "npm:firebase@3.6.4": {
      "map": {
        "jsonwebtoken": "npm:jsonwebtoken@7.1.9",
        "faye-websocket": "npm:faye-websocket@0.9.3",
        "dom-storage": "npm:dom-storage@2.0.2",
        "xmlhttprequest": "npm:xmlhttprequest@1.8.0",
        "rsvp": "npm:rsvp@3.2.1"
      }
    },
    "npm:jsonwebtoken@7.1.9": {
      "map": {
        "ms": "npm:ms@0.7.2",
        "xtend": "npm:xtend@4.0.1",
        "lodash.once": "npm:lodash.once@4.1.1",
        "jws": "npm:jws@3.1.4",
        "joi": "npm:joi@6.10.1"
      }
    },
    "npm:faye-websocket@0.9.3": {
      "map": {
        "websocket-driver": "npm:websocket-driver@0.6.5"
      }
    },
    "npm:jws@3.1.4": {
      "map": {
        "jwa": "npm:jwa@1.1.5",
        "base64url": "npm:base64url@2.0.0",
        "safe-buffer": "npm:safe-buffer@5.0.1"
      }
    },
    "npm:websocket-driver@0.6.5": {
      "map": {
        "websocket-extensions": "npm:websocket-extensions@0.1.1"
      }
    },
    "npm:jwa@1.1.5": {
      "map": {
        "base64url": "npm:base64url@2.0.0",
        "safe-buffer": "npm:safe-buffer@5.0.1",
        "ecdsa-sig-formatter": "npm:ecdsa-sig-formatter@1.0.9",
        "buffer-equal-constant-time": "npm:buffer-equal-constant-time@1.0.1"
      }
    },
    "npm:joi@6.10.1": {
      "map": {
        "hoek": "npm:hoek@2.16.3",
        "moment": "npm:moment@2.17.1",
        "isemail": "npm:isemail@1.2.0",
        "topo": "npm:topo@1.1.0"
      }
    },
    "npm:ecdsa-sig-formatter@1.0.9": {
      "map": {
        "base64url": "npm:base64url@2.0.0",
        "safe-buffer": "npm:safe-buffer@5.0.1"
      }
    },
    "npm:topo@1.1.0": {
      "map": {
        "hoek": "npm:hoek@2.16.3"
      }
    }
  }
});
