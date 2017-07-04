
/**
 * Created by lundfall on 08/02/2017.
 */

let path = require('path');
let packageOptions = require('../../package.json');
let {arva: {links}} = packageOptions;
let {jspm: {dependencies: jspmDependencies}} = packageOptions;

module.exports = Object.keys(links).reduce((accumulator, dependencyName) => {
    let jspmDependencyName = jspmDependencies[dependencyName];
    if(!jspmDependencyName){
        console.log(`Package ${dependencyName} does not exist`);
        process.exit(1);
    }
    let packageParts = jspmDependencyName.split(':');
    let registry = packageParts[0];
    let restOfName = packageParts[1];
    if (!registry || !restOfName) {
        console.log(`Package ${dependencyName} has an invalid format in package.json`);
        process.exit(1);
    }

    let externalRelativePath = links[dependencyName] + "/src";
    var localRelativePath = './jspm_packages/' + registry + "/" + restOfName;
    /* Make paths absolute */
    let localPath = path.normalize(path.resolve('.') + '/' + localRelativePath);
    let externalPath = path.normalize(path.resolve('.') + '/' + externalRelativePath);
    return Object.assign(accumulator, {[localPath]: externalPath});
}, {});

