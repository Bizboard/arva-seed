/**
 * Created by lundfall on 27/06/16.
 */
const fs = require('fs');
const rimraf = require('rimraf');
const path = require('path');
let systemjs = {};
SystemJS = { config: (newConfig) => { Object.assign(systemjs, newConfig); }};
const config = require('../jspm.config.js');
const exec = require('child_process').exec;
const arvaOptions = systemjs.arvaOptions;
if (!arvaOptions) {
    process.exit();
}
const fileMappings = arvaOptions.fileMappings;
const packageMappings = systemjs.map;

for (let packageName in fileMappings) {

    let packageParts = packageName.split(':');
    let registry = packageParts[0];
    let restOfName = packageParts[1];
    let externalFileName = fileMappings[packageName] + "/src";

    if (!registry || !restOfName) {

        continue;
    }
    let jspmFileName = './jspm_packages/' + registry + "/" + restOfName;
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
    let directoryExists = true;
    try {
        if (!fs.lstatSync(path).isDirectory()) {
            directoryExists = false;
        }
    } catch (error) {
        directoryExists = false;
    }
    return directoryExists;
}