/**
 * Created by lundfall on 08/02/2017.
 */

let localToGlobalPaths  = require('./linkedSync/localToGlobalPaths.js');
let rimraf              = require('rimraf');
let copyDir             = require('copy-dir');

/* Copies the external directories to the local ones */
for(let localPath in localToGlobalPaths){
    let globalPath = localToGlobalPaths[localPath];
    rimraf.sync(localPath);
    copyDir.sync(globalPath, localPath);
}