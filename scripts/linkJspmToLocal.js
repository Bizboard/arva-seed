/**
 * Created by lundfall on 27/06/16.
 */
var fs = require('fs');
var rimraf = require('rimraf');
var path = require('path');
let localToGlobalPaths = require('./linkedSync/localToGlobalPaths.js');

for (var localPath in localToGlobalPaths) {
    let globalPath = localToGlobalPaths[localPath];

    if (!directoryExists(localPath)) {
        console.log('The package name does not exist: ' + localPath + ". Falling back on external resource");
        continue;
    }
    rimraf.sync(localPath);

    if (!directoryExists(globalPath)) {
        console.log(globalPath + " is not a directory!");
        continue;
    }

    (function (externalFileName, jspmFileName) {
        fs.symlink(externalFileName, jspmFileName, 'dir', function (res, err) {
            if (err) {
                console.log("Could not create link, " + err + ". Falling back on external resource");
            } else {
                console.log("Successfully mapped " + jspmFileName + " to " + externalFileName);
            }
        })
    })(globalPath, localPath);

}


function directoryExists(path) {
    var directoryExists = true;
    try {
        if (!fs.lstatSync(path).isDirectory()) {
            directoryExists = false;
        }
    } catch (error) {
        directoryExists = false;
    }
    return directoryExists;
}