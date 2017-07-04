/**
 * Created by tom on 29/12/15.
 */

var path = require('path');
var ipc = require('ipc-light');
var filename = process.argv[3];

if (!filename) { process.exit(1); }

var socketPath = '/tmp/' + path.basename(path.join(__dirname, '..') + '.sock');
ipc.connect({path: socketPath}, function (socket) {
    console.log(filename);
    socket.emit(filename, process.exit);
});