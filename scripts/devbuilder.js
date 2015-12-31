/**
 * Created by tom on 23/12/15.
 */
var DevBuilder = require('jspm-dev-builder');
var path = require('path');
var ipc = require('ipc-light');

var appBuilder = new DevBuilder({
    expression: path.join(__dirname, '..', 'src', 'main'),
    outLoc: path.join(__dirname, '..', 'www', 'dev.js'),
    logPrefix: 'my-app',
    buildOptions: {
        minify: false,
        mangle: false,
        sourceMaps: true
    }
});

console.log('Performing a full build, this may take a while. Afterwards, quick partial builds can be done.');
appBuilder.build().then(function () {

    console.log('Ready to receive partial build commands from the FileWatcher');

    var socketPath = '/tmp/' + path.basename(path.join(__dirname, '..') + '.sock');
    ipc.createServer(function (request, reply) {
        var filePath = request.toString().replace(/"/g, '');
        if (filePath) {
            appBuilder.build(filePath);
        }
    }).listen(socketPath);

});
