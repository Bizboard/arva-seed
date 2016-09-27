/**
 * Created by lundfall on 27/06/16.
 */
var fs = require('fs');
var rimraf = require('rimraf');
var path = require('path');
var systemjs = require('systemjs');
var config = require('../jspm.config.js');
var exec = require('child_process').exec;
var arvaOptions = systemjs.arvaOptions;
if (!arvaOptions) {
    process.exit();
}
var fileMappings = arvaOptions.fileMappings;
var packageMappings = systemjs.map;

for (var packageName in fileMappings) {

    var packageParts = packageName.split(':');
    var registry = packageParts[0];
    var restOfName = packageParts[1];
    var externalFileName = fileMappings[packageName] + "/src";

    if (!registry || !restOfName) {

        continue;
    }
    var jspmFileName = './jspm_packages/' + registry + "/" + restOfName;
    /* Make paths absolute */
    jspmFileName = path.normalize(path.resolve('.') + '/' + jspmFileName);
    externalFileName = path.normalize(path.resolve('.') + '/' + externalFileName);

    if (!directoryExists(jspmFileName)) {
        console.log('The package name does not exist: ' + packageName + ". Falling back on external resource");
        continue;
    }
    rimraf.sync(jspmFileName);


    if (!directoryExists(externalFileName)) {
        console.log(externalFileName + " is not a directory!");
        continue
    }

    (function (externalFileName, jspmFileName) {
        fs.symlink(externalFileName, jspmFileName, 'dir', function (res, err) {
            if (err) {
                console.log("Could not create link, " + err + ". Falling back on external resource");
            } else {
                console.log("Successfully mapped " + jspmFileName + " to " + externalFileName);
            }
        })
    })(externalFileName, jspmFileName);

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