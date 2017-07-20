SystemJS.config({
  babelOptions: {
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
  },
  arvaOptions: {
    'iconOptions': {
      'form': 'rounded',
      'thickness': 'bold'
    }
  },
  paths: {
    'npm:': 'jspm_packages/npm/',
    'github:': 'jspm_packages/github/',
    'app/': 'src/',
    'bitbucket:': 'jspm_packages/bitbucket/'
  },
  browserConfig: {
    'baseURL': '/arva-seed'
  },
  devConfig: {
    'map': {
      'plugin-babel': 'npm:systemjs-plugin-babel@0.0.12',
      'babel-plugin-transform-decorators': 'npm:babel-plugin-transform-decorators@6.8.0',
      'module': 'npm:jspm-nodelibs-module@0.2.0',
      'http': 'npm:jspm-nodelibs-http@0.2.0',
      'url': 'npm:jspm-nodelibs-url@0.2.0',
      'babel-plugin-transform-decorators-legacy': 'npm:babel-plugin-transform-decorators-legacy@1.3.4',
      'core-js': 'npm:core-js@2.4.1',
      'babel-plugin-syntax-decorators': 'npm:babel-plugin-syntax-decorators@6.8.0',
      'babel-plugin-transform-async-functions': 'npm:babel-plugin-transform-async-functions@6.8.0',
      'babel-plugin-transform-runtime-constructor-name': 'github:bizboard/babel-plugin-transform-runtime-constructor-name@master',
      'babel-plugin-transform-class-properties': 'npm:babel-plugin-transform-class-properties@6.10.2',
      'babel-plugin-transform-es2015-classes': 'npm:babel-plugin-transform-es2015-classes@6.9.0',
      'babel-plugin-transform-builtin-extend': 'npm:babel-plugin-transform-builtin-extend@1.1.0',
      'babel-plugin-transform-es2015-spread': 'npm:babel-plugin-transform-es2015-spread@6.8.0',
      'babel-plugin-transform-es2015-for-of': 'npm:babel-plugin-transform-es2015-for-of@6.8.0'
    },
    'packages': {
      'npm:babel-plugin-transform-decorators@6.8.0': {
        'map': {
          'babel-helper-define-map': 'npm:babel-helper-define-map@6.9.0',
          'babel-runtime': 'npm:babel-runtime@6.9.2',
          'babel-helper-explode-class': 'npm:babel-helper-explode-class@6.8.0',
          'babel-plugin-syntax-decorators': 'npm:babel-plugin-syntax-decorators@6.8.0',
          'babel-template': 'npm:babel-template@6.9.0',
          'babel-types': 'npm:babel-types@6.11.1'
        }
      },
      'npm:babel-helper-explode-class@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.9.2',
          'babel-types': 'npm:babel-types@6.11.1',
          'babel-helper-bindify-decorators': 'npm:babel-helper-bindify-decorators@6.8.0',
          'babel-traverse': 'npm:babel-traverse@6.10.4'
        }
      },
      'npm:babel-helper-bindify-decorators@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.9.2',
          'babel-traverse': 'npm:babel-traverse@6.10.4',
          'babel-types': 'npm:babel-types@6.11.1'
        }
      },
      'npm:babel-plugin-syntax-async-functions@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.9.2'
        }
      },
      'npm:stream-http@2.3.0': {
        'map': {
          'inherits': 'npm:inherits@2.0.1',
          'readable-stream': 'npm:readable-stream@2.1.4',
          'builtin-status-codes': 'npm:builtin-status-codes@2.0.0',
          'xtend': 'npm:xtend@4.0.1',
          'to-arraybuffer': 'npm:to-arraybuffer@1.0.1'
        }
      },
      'npm:url@0.11.0': {
        'map': {
          'punycode': 'npm:punycode@1.3.2',
          'querystring': 'npm:querystring@0.2.0'
        }
      },
      'npm:babel-plugin-syntax-decorators@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.9.2'
        }
      },
      'npm:babel-plugin-transform-decorators-legacy@1.3.4': {
        'map': {
          'babel-plugin-syntax-decorators': 'npm:babel-plugin-syntax-decorators@6.8.0',
          'babel-runtime': 'npm:babel-runtime@6.9.2',
          'babel-template': 'npm:babel-template@6.9.0'
        }
      },
      'npm:babel-plugin-transform-async-functions@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.9.2',
          'babel-plugin-syntax-async-functions': 'npm:babel-plugin-syntax-async-functions@6.8.0'
        }
      },
      'npm:babel-plugin-syntax-class-properties@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.9.2'
        }
      },
      'npm:babel-plugin-transform-class-properties@6.10.2': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.9.2',
          'babel-plugin-syntax-class-properties': 'npm:babel-plugin-syntax-class-properties@6.8.0'
        }
      },
      'npm:babel-template@6.9.0': {
        'map': {
          'babel-types': 'npm:babel-types@6.11.1',
          'babel-runtime': 'npm:babel-runtime@6.9.2',
          'lodash': 'npm:lodash@4.17.4',
          'babel-traverse': 'npm:babel-traverse@6.11.4',
          'babylon': 'npm:babylon@6.8.4'
        }
      },
      'npm:babel-messages@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.9.2'
        }
      },
      'npm:invariant@2.2.1': {
        'map': {
          'loose-envify': 'npm:loose-envify@1.2.0'
        }
      },
      'npm:debug@2.2.0': {
        'map': {
          'ms': 'npm:ms@0.7.1'
        }
      },
      'npm:loose-envify@1.2.0': {
        'map': {
          'js-tokens': 'npm:js-tokens@1.0.3'
        }
      },
      'npm:chalk@1.1.3': {
        'map': {
          'escape-string-regexp': 'npm:escape-string-regexp@1.0.5',
          'ansi-styles': 'npm:ansi-styles@2.2.1',
          'has-ansi': 'npm:has-ansi@2.0.0',
          'supports-color': 'npm:supports-color@2.0.0',
          'strip-ansi': 'npm:strip-ansi@3.0.1'
        }
      },
      'npm:has-ansi@2.0.0': {
        'map': {
          'ansi-regex': 'npm:ansi-regex@2.0.0'
        }
      },
      'npm:strip-ansi@3.0.1': {
        'map': {
          'ansi-regex': 'npm:ansi-regex@2.0.0'
        }
      },
      'npm:babel-helper-define-map@6.9.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.9.2',
          'babel-types': 'npm:babel-types@6.11.1',
          'lodash': 'npm:lodash@4.17.4',
          'babel-helper-function-name': 'npm:babel-helper-function-name@6.8.0'
        }
      },
      'npm:babel-helper-function-name@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.9.2',
          'babel-types': 'npm:babel-types@6.11.1',
          'babel-template': 'npm:babel-template@6.9.0',
          'babel-traverse': 'npm:babel-traverse@6.11.4',
          'babel-helper-get-function-arity': 'npm:babel-helper-get-function-arity@6.8.0'
        }
      },
      'npm:babel-helper-get-function-arity@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.9.2',
          'babel-types': 'npm:babel-types@6.11.1'
        }
      },
      'npm:babel-plugin-transform-es2015-classes@6.9.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.9.2',
          'babel-types': 'npm:babel-types@6.11.1',
          'babel-helper-function-name': 'npm:babel-helper-function-name@6.8.0',
          'babel-helper-replace-supers': 'npm:babel-helper-replace-supers@6.8.0',
          'babel-helper-optimise-call-expression': 'npm:babel-helper-optimise-call-expression@6.8.0',
          'babel-helper-define-map': 'npm:babel-helper-define-map@6.9.0',
          'babel-messages': 'npm:babel-messages@6.8.0',
          'babel-template': 'npm:babel-template@6.9.0',
          'babel-traverse': 'npm:babel-traverse@6.11.4'
        }
      },
      'npm:babel-helper-replace-supers@6.8.0': {
        'map': {
          'babel-messages': 'npm:babel-messages@6.8.0',
          'babel-helper-optimise-call-expression': 'npm:babel-helper-optimise-call-expression@6.8.0',
          'babel-runtime': 'npm:babel-runtime@6.9.2',
          'babel-traverse': 'npm:babel-traverse@6.11.4',
          'babel-template': 'npm:babel-template@6.9.0',
          'babel-types': 'npm:babel-types@6.11.1'
        }
      },
      'npm:babel-helper-optimise-call-expression@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.9.2',
          'babel-types': 'npm:babel-types@6.11.1'
        }
      },
      'npm:babel-traverse@6.10.4': {
        'map': {
          'babel-messages': 'npm:babel-messages@6.8.0',
          'babel-runtime': 'npm:babel-runtime@6.9.2',
          'babel-types': 'npm:babel-types@6.11.1',
          'lodash': 'npm:lodash@4.17.4',
          'debug': 'npm:debug@2.2.0',
          'globals': 'npm:globals@8.18.0',
          'invariant': 'npm:invariant@2.2.1',
          'babel-code-frame': 'npm:babel-code-frame@6.11.0',
          'babylon': 'npm:babylon@6.8.4'
        }
      },
      'npm:babel-types@6.11.1': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.9.2',
          'babel-traverse': 'npm:babel-traverse@6.11.4',
          'lodash': 'npm:lodash@4.17.4',
          'esutils': 'npm:esutils@2.0.2',
          'to-fast-properties': 'npm:to-fast-properties@1.0.2'
        }
      },
      'npm:babel-code-frame@6.11.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.9.2',
          'esutils': 'npm:esutils@2.0.2',
          'js-tokens': 'npm:js-tokens@2.0.0',
          'chalk': 'npm:chalk@1.1.3'
        }
      },
      'npm:babel-plugin-transform-builtin-extend@1.1.0': {
        'map': {
          'babel-template': 'npm:babel-template@6.9.0',
          'babel-runtime': 'npm:babel-runtime@6.9.2'
        }
      },
      'npm:babylon@6.8.4': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.9.2'
        }
      },
      'npm:babel-plugin-transform-es2015-for-of@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.9.2'
        }
      },
      'npm:babel-plugin-transform-es2015-spread@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.9.2'
        }
      },
      'npm:babel-traverse@6.11.4': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.9.2',
          'babel-types': 'npm:babel-types@6.11.1',
          'babylon': 'npm:babylon@6.8.4',
          'babel-messages': 'npm:babel-messages@6.8.0',
          'babel-code-frame': 'npm:babel-code-frame@6.11.0',
          'debug': 'npm:debug@2.2.0',
          'globals': 'npm:globals@8.18.0',
          'invariant': 'npm:invariant@2.2.1',
          'lodash': 'npm:lodash@4.17.4'
        }
      },
      'npm:readable-stream@2.1.4': {
        'map': {
          'inherits': 'npm:inherits@2.0.1',
          'isarray': 'npm:isarray@1.0.0',
          'string_decoder': 'npm:string_decoder@0.10.31',
          'buffer-shims': 'npm:buffer-shims@1.0.0',
          'process-nextick-args': 'npm:process-nextick-args@1.0.7',
          'core-util-is': 'npm:core-util-is@1.0.2',
          'util-deprecate': 'npm:util-deprecate@1.0.2'
        }
      },
      'npm:jspm-nodelibs-http@0.2.0': {
        'map': {
          'http-browserify': 'npm:stream-http@2.3.0'
        }
      },
      'npm:jspm-nodelibs-url@0.2.0': {
        'map': {
          'url-browserify': 'npm:url@0.11.0'
        }
      }
    }
  },
  transpiler: 'plugin-babel',
  packages: {
    'app': {
      'main': 'main.js',
      'format': '',
      'meta': {
        '*.js': {
          'loader': 'plugin-babel'
        },
        'models/*.js': {
          'loader': 'plugin-babel',
          'babelOptions': {
            'plugins': [
              'babel-plugin-transform-decorators-legacy',
              'babel-plugin-transform-runtime-constructor-name',
              'babel-plugin-transform-class-properties'
            ]
          }
        },
        'controllers/*.js': {
          'loader': 'plugin-babel',
          'babelOptions': {
            'plugins': [
              'babel-plugin-transform-decorators-legacy',
              'babel-plugin-transform-runtime-constructor-name',
              'babel-plugin-transform-class-properties'
            ]
          }
        },
        '*.css': {
          'loader': 'css'
        },
        '*.svg': {
          'loader': 'arva-js/utils/ImageLoader.js'
        },
        '*.gif': {
          'loader': 'arva-js/utils/ImageLoader.js'
        },
        '*.png': {
          'loader': 'arva-js/utils/ImageLoader.js'
        },
        '*.jpg': {
          'loader': 'arva-js/utils/ImageLoader.js'
        }
      }
    }
  },
  map: {
    'text': 'github:bizboard/arva-js@develop/utils/IconLoader.js'
  }
});

SystemJS.config({
  packageConfigPaths: [
    'npm:@*/*.json',
    'npm:*.json',
    'github:*/*.json',
    'bitbucket:*/*.json',
    'bitbucket:*.json'
  ],
  map: {
    'fastclick': 'npm:fastclick@1.0.6',
    'famous-autosizetextarea': 'github:ijzerenhein/famous-autosizetextarea@0.3.1',
    'es6-map': 'npm:es6-map@0.1.4',
    'arva-js': 'github:bizboard/arva-js@develop',
    'assert': 'npm:jspm-nodelibs-assert@0.2.0',
    'babel-polyfill': 'npm:babel-polyfill@6.9.1',
    'buffer': 'npm:jspm-nodelibs-buffer@0.2.0',
    'child_process': 'npm:jspm-nodelibs-child_process@0.2.0',
    'constants': 'npm:jspm-nodelibs-constants@0.2.0',
    'crypto': 'npm:jspm-nodelibs-crypto@0.2.0',
    'css': 'github:systemjs/plugin-css@0.1.23',
    'events': 'npm:jspm-nodelibs-events@0.2.0',
    'famous': 'github:bizboard/famous@develop',
    'famous-flex': 'github:bizboard/famous-flex@master',
    'firebase': 'github:firebase/firebase-bower@3.3.0',
    'fs': 'npm:jspm-nodelibs-fs@0.2.0',
    'lodash': 'npm:lodash@4.15.0',
    'os': 'npm:jspm-nodelibs-os@0.2.0',
    'path': 'npm:jspm-nodelibs-path@0.2.0',
    'process': 'npm:jspm-nodelibs-process@0.2.0',
    'stream': 'npm:jspm-nodelibs-stream@0.2.0',
    'string_decoder': 'npm:jspm-nodelibs-string_decoder@0.2.0',
    'timers': 'npm:jspm-nodelibs-timers@0.2.0',
    'util': 'npm:jspm-nodelibs-util@0.2.0',
    'vm': 'npm:jspm-nodelibs-vm@0.2.0'
  },
  packages: {
    'npm:stream-browserify@2.0.1': {
      'map': {
        'readable-stream': 'npm:readable-stream@2.1.5',
        'inherits': 'npm:inherits@2.0.1'
      }
    },
    'npm:timers-browserify@1.4.2': {
      'map': {
        'process': 'npm:process@0.11.8'
      }
    },
    'npm:babel-runtime@6.9.2': {
      'map': {
        'regenerator-runtime': 'npm:regenerator-runtime@0.9.5',
        'core-js': 'npm:core-js@2.4.1'
      }
    },
    'npm:babel-polyfill@6.9.1': {
      'map': {
        'regenerator-runtime': 'npm:regenerator-runtime@0.9.5',
        'babel-runtime': 'npm:babel-runtime@6.9.2',
        'core-js': 'npm:core-js@2.4.1'
      }
    },
    'npm:buffer@4.9.1': {
      'map': {
        'isarray': 'npm:isarray@1.0.0',
        'base64-js': 'npm:base64-js@1.1.2',
        'ieee754': 'npm:ieee754@1.1.6'
      }
    },
    'npm:crypto-browserify@3.11.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'browserify-sign': 'npm:browserify-sign@4.0.0',
        'browserify-cipher': 'npm:browserify-cipher@1.0.0',
        'create-hmac': 'npm:create-hmac@1.1.4',
        'create-hash': 'npm:create-hash@1.1.2',
        'create-ecdh': 'npm:create-ecdh@4.0.0',
        'diffie-hellman': 'npm:diffie-hellman@5.0.2',
        'public-encrypt': 'npm:public-encrypt@4.0.0',
        'randombytes': 'npm:randombytes@2.0.3',
        'pbkdf2': 'npm:pbkdf2@3.0.4'
      }
    },
    'npm:diffie-hellman@5.0.2': {
      'map': {
        'randombytes': 'npm:randombytes@2.0.3',
        'miller-rabin': 'npm:miller-rabin@4.0.0',
        'bn.js': 'npm:bn.js@4.11.6'
      }
    },
    'npm:public-encrypt@4.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2',
        'randombytes': 'npm:randombytes@2.0.3',
        'parse-asn1': 'npm:parse-asn1@5.0.0',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1',
        'bn.js': 'npm:bn.js@4.11.6'
      }
    },
    'npm:create-ecdh@4.0.0': {
      'map': {
        'elliptic': 'npm:elliptic@6.3.1',
        'bn.js': 'npm:bn.js@4.11.6'
      }
    },
    'npm:browserify-rsa@4.0.1': {
      'map': {
        'randombytes': 'npm:randombytes@2.0.3',
        'bn.js': 'npm:bn.js@4.11.6'
      }
    },
    'npm:browserify-cipher@1.0.0': {
      'map': {
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'browserify-des': 'npm:browserify-des@1.0.0',
        'browserify-aes': 'npm:browserify-aes@1.0.6'
      }
    },
    'npm:evp_bytestokey@1.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2'
      }
    },
    'npm:miller-rabin@4.0.0': {
      'map': {
        'brorand': 'npm:brorand@1.0.5',
        'bn.js': 'npm:bn.js@4.11.6'
      }
    },
    'npm:browserify-des@1.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'cipher-base': 'npm:cipher-base@1.0.2',
        'des.js': 'npm:des.js@1.0.0'
      }
    },
    'npm:browserify-aes@1.0.6': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'cipher-base': 'npm:cipher-base@1.0.2',
        'create-hash': 'npm:create-hash@1.1.2',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'buffer-xor': 'npm:buffer-xor@1.0.3'
      }
    },
    'npm:des.js@1.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'github:bizboard/arva-js@develop': {
      'map': {
        'bowser': 'npm:bowser@1.4.4',
        'eventemitter3': 'npm:eventemitter3@1.2.0',
        'camelcase': 'npm:camelcase@2.1.1',
        'ordered-hashmap': 'npm:ordered-hashmap@1.0.0',
        'lodash': 'npm:lodash@4.15.0',
        'fastclick': 'npm:fastclick@1.0.6',
        'xml2js': 'npm:xml2js@0.4.17',
        'firebase': 'github:firebase/firebase-bower@3.3.0',
        'request-animation-frame-mock': 'github:erykpiast/request-animation-frame-mock@0.1.8',
        'famous': 'github:bizboard/famous@develop',
        'famous-flex': 'github:bizboard/famous-flex@master',
        'lodash-decorators': 'npm:lodash-decorators@3.0.2'
      }
    },
    'npm:xml2js@0.4.17': {
      'map': {
        'xmlbuilder': 'npm:xmlbuilder@4.2.1',
        'sax': 'npm:sax@1.2.1'
      }
    },
    'npm:xmlbuilder@4.2.1': {
      'map': {
        'lodash': 'npm:lodash@4.15.0'
      }
    },
    'npm:jspm-nodelibs-buffer@0.2.0': {
      'map': {
        'buffer-browserify': 'npm:buffer@4.9.1'
      }
    },
    'npm:jspm-nodelibs-os@0.2.0': {
      'map': {
        'os-browserify': 'npm:os-browserify@0.2.1'
      }
    },
    'npm:jspm-nodelibs-stream@0.2.0': {
      'map': {
        'stream-browserify': 'npm:stream-browserify@2.0.1'
      }
    },
    'npm:jspm-nodelibs-timers@0.2.0': {
      'map': {
        'timers-browserify': 'npm:timers-browserify@1.4.2'
      }
    },
    'npm:jspm-nodelibs-crypto@0.2.0': {
      'map': {
        'crypto-browserify': 'npm:crypto-browserify@3.11.0'
      }
    },
    'npm:jspm-nodelibs-string_decoder@0.2.0': {
      'map': {
        'string_decoder-browserify': 'npm:string_decoder@0.10.31'
      }
    },
    'github:bizboard/famous-flex@master': {
      'map': {
        'es6-map': 'npm:es6-map@0.1.5'
      }
    },
    'npm:lodash-decorators@3.0.2': {
      'map': {
        'lodash': 'npm:lodash@4.17.4'
      }
    },
    'npm:es6-map@0.1.5': {
      'map': {
        'd': 'npm:d@1.0.0',
        'es6-iterator': 'npm:es6-iterator@2.0.1',
        'event-emitter': 'npm:event-emitter@0.3.5',
        'es6-symbol': 'npm:es6-symbol@3.1.1',
        'es6-set': 'npm:es6-set@0.1.5',
        'es5-ext': 'npm:es5-ext@0.10.23'
      }
    },
    'npm:es6-symbol@3.1.1': {
      'map': {
        'es5-ext': 'npm:es5-ext@0.10.23',
        'd': 'npm:d@1.0.0'
      }
    },
    'npm:event-emitter@0.3.5': {
      'map': {
        'es5-ext': 'npm:es5-ext@0.10.23',
        'd': 'npm:d@1.0.0'
      }
    },
    'npm:es6-iterator@2.0.1': {
      'map': {
        'es5-ext': 'npm:es5-ext@0.10.23',
        'es6-symbol': 'npm:es6-symbol@3.1.1',
        'd': 'npm:d@1.0.0'
      }
    },
    'npm:es6-set@0.1.5': {
      'map': {
        'es5-ext': 'npm:es5-ext@0.10.23',
        'es6-iterator': 'npm:es6-iterator@2.0.1',
        'es6-symbol': 'npm:es6-symbol@3.1.1',
        'event-emitter': 'npm:event-emitter@0.3.5',
        'd': 'npm:d@1.0.0'
      }
    },
    'npm:es5-ext@0.10.23': {
      'map': {
        'es6-iterator': 'npm:es6-iterator@2.0.1',
        'es6-symbol': 'npm:es6-symbol@3.1.1'
      }
    },
    'npm:d@1.0.0': {
      'map': {
        'es5-ext': 'npm:es5-ext@0.10.23'
      }
    },
    'npm:readable-stream@2.1.5': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'string_decoder': 'npm:string_decoder@0.10.31',
        'buffer-shims': 'npm:buffer-shims@1.0.0',
        'process-nextick-args': 'npm:process-nextick-args@1.0.7',
        'core-util-is': 'npm:core-util-is@1.0.2',
        'util-deprecate': 'npm:util-deprecate@1.0.2',
        'isarray': 'npm:isarray@1.0.0'
      }
    },
    'npm:browserify-sign@4.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'create-hash': 'npm:create-hash@1.1.2',
        'create-hmac': 'npm:create-hmac@1.1.4',
        'parse-asn1': 'npm:parse-asn1@5.0.0',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1',
        'elliptic': 'npm:elliptic@6.3.1',
        'bn.js': 'npm:bn.js@4.11.6'
      }
    },
    'npm:create-hmac@1.1.4': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'create-hash': 'npm:create-hash@1.1.2'
      }
    },
    'npm:create-hash@1.1.2': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'cipher-base': 'npm:cipher-base@1.0.2',
        'ripemd160': 'npm:ripemd160@1.0.1',
        'sha.js': 'npm:sha.js@2.4.5'
      }
    },
    'npm:pbkdf2@3.0.4': {
      'map': {
        'create-hmac': 'npm:create-hmac@1.1.4'
      }
    },
    'npm:elliptic@6.3.1': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'brorand': 'npm:brorand@1.0.5',
        'hash.js': 'npm:hash.js@1.0.3',
        'bn.js': 'npm:bn.js@4.11.6'
      }
    },
    'npm:parse-asn1@5.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2',
        'pbkdf2': 'npm:pbkdf2@3.0.4',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'browserify-aes': 'npm:browserify-aes@1.0.6',
        'asn1.js': 'npm:asn1.js@4.8.0'
      }
    },
    'npm:cipher-base@1.0.2': {
      'map': {
        'inherits': 'npm:inherits@2.0.1'
      }
    },
    'npm:hash.js@1.0.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.1'
      }
    },
    'npm:asn1.js@4.8.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'bn.js': 'npm:bn.js@4.11.6',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'npm:sha.js@2.4.5': {
      'map': {
        'inherits': 'npm:inherits@2.0.1'
      }
    },
    'npm:es6-map@0.1.4': {
      'map': {
        'd': 'npm:d@0.1.1',
        'es6-iterator': 'npm:es6-iterator@2.0.0',
        'es6-set': 'npm:es6-set@0.1.4',
        'event-emitter': 'npm:event-emitter@0.3.4',
        'es6-symbol': 'npm:es6-symbol@3.1.0',
        'es5-ext': 'npm:es5-ext@0.10.12'
      }
    },
    'npm:event-emitter@0.3.4': {
      'map': {
        'd': 'npm:d@0.1.1',
        'es5-ext': 'npm:es5-ext@0.10.12'
      }
    },
    'npm:es6-set@0.1.4': {
      'map': {
        'd': 'npm:d@0.1.1',
        'es6-iterator': 'npm:es6-iterator@2.0.0',
        'es6-symbol': 'npm:es6-symbol@3.1.0',
        'event-emitter': 'npm:event-emitter@0.3.4',
        'es5-ext': 'npm:es5-ext@0.10.12'
      }
    },
    'npm:es6-iterator@2.0.0': {
      'map': {
        'd': 'npm:d@0.1.1',
        'es5-ext': 'npm:es5-ext@0.10.12',
        'es6-symbol': 'npm:es6-symbol@3.1.0'
      }
    },
    'npm:d@0.1.1': {
      'map': {
        'es5-ext': 'npm:es5-ext@0.10.12'
      }
    },
    'npm:es6-symbol@3.1.0': {
      'map': {
        'es5-ext': 'npm:es5-ext@0.10.12',
        'd': 'npm:d@0.1.1'
      }
    },
    'npm:es5-ext@0.10.12': {
      'map': {
        'es6-iterator': 'npm:es6-iterator@2.0.0',
        'es6-symbol': 'npm:es6-symbol@3.1.0'
      }
    }
  }
});
