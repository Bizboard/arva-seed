/**
 * Created by lundfall on 05/02/2017.
 */
let _ = require('lodash');
let { spawn, exec } = require('child_process');
let path = require('path');
let fs = require('fs');
let rimraf = require('rimraf');
let c2p = require('callback-promise');
let localToGlobalPaths = require('./linkedSync/localToGlobalPaths.js');
let { jspm: { dependencies } } = require('../package.json');
/* Make a map that maps something like github:bizboard/famous-flex to famous-flex */
let invertedDependencies = _.invert(_.fromPairs(_.map(dependencies, function (value, key) {
    return [key, value.split('@')[0]];
})));

/* Function for doing a node.js-exec returning a promise */
let promiseExec = c2p(exec, 1, 0);
/* We use the wml global path to make the synchronization working */
let wmlDirectory = 'wml';
let execWml = (args) => promiseExec(`${wmlDirectory} ${args}`);

/* Deep iterates over a directory. If callback returns true, cancels iteration */
let deepIterateDirectory = (directory, callback) => {
    (function innerDuplicateSymlinkedModules(innerDirectory) {
        fs.readdir(innerDirectory, (err, list) => {
            if (err) throw new Error(err);
            for (let fileName of list) {
                let file = path.resolve(innerDirectory, fileName);
                fs.stat(file, function (err, stat) {
                    if (stat && stat.isDirectory()) {
                        if (!callback(fileName, innerDirectory)) {
                            deepIterateDirectory(file, callback);
                        }
                    }

                })
            }
        });
    })(directory);
};

/* Recursive function to create a directory with all symlinked directories.
 * Some refer to the local jspm_packages, other refer to the external paths
 */
let duplicateSymlinkedModules = (sourceDirectory, targetDirectory) => {
    let results = [];
    rimraf.sync(targetDirectory);
    fs.mkdirSync(targetDirectory);
    deepIterateDirectory(sourceDirectory, (fileName, innerDirectory) => {
        if (fileName.includes('@')) {
            let globalPath = localToGlobalPaths[path.join(innerDirectory, fileName)];

            let fileNameWithoutAt = fileName.split('@')[0];
            let relativeDirectories = path.relative(sourceDirectory, innerDirectory).split(path.sep).concat(fileNameWithoutAt);

            let symlinkName = invertedDependencies[relativeDirectories[0] + ':' + relativeDirectories.slice(1).join('/')];

            if (!symlinkName) {
                /* If we can't find it in the invertedDependencies lookup, then it's a dependency of a dependency so it's
                 * not important to keep it as a familiar name anyways
                 */
                return;
            }
            symlinkName = path.join(targetDirectory, symlinkName);
            if (globalPath) {
                if (!directoryExists(globalPath)) {
                    console.error(`Directory doesn't exist: ${globalPath}. Link doesn't seem properly configured`);
                    process.exit(1);
                }
                console.log(`Successfully linked ${globalPath}`);
                fs.symlinkSync(globalPath, symlinkName);
            } else {
                /* Check if already exists because there can be cases where there is more than one version of a
                 * package installed. Currently, that isn't something we differentiate
                 */
                if(!fs.existsSync(symlinkName)){
                    fs.symlinkSync(path.join(innerDirectory, fileName), symlinkName);
                }
            }
            return true;
        }
    });
}

/* Duplicate contents of jspm_packages to symlinked dev_jspm_packages */
let jspmPackagesDir = path.normalize(path.join(path.resolve('.'), './jspm_packages'));
let devJspmPackagesDir = path.normalize(path.join(path.resolve('.'), './dev_jspm_packages'));
duplicateSymlinkedModules(jspmPackagesDir, devJspmPackagesDir, (error, done) => {
    if (error) {
        console.error(error);
        process.exit(1)
    }

});


/* Add paths to wml that copied to our local jspm_packages */
execWml('rm all').then((output) => {
    console.log(output);
    let addedAllPaths = Promise.resolve();
    for (let localPath in localToGlobalPaths) {

        let globalPath = localToGlobalPaths[localPath];

        addedAllPaths = addedAllPaths.then((output) => {
            console.log(`adding watch ${localPath} -> ${globalPath}`);
            return execWml(`add ${globalPath} ${localPath}`);
        });
    }
    return addedAllPaths;
}).then((output) => {

    const copyLinker = spawn(wmlDirectory, ['start']);
    copyLinker.stdout.on('data', (data) => {
        /* Don't output anything for the wml data, it's quite a lot of output */
    });
    copyLinker.stderr.on('data', (error) => {
        console.error(`The wml encountered an error: ${error.toString()}`);
        process.exit(1);
    });
    copyLinker.on('close', (code) => {
        console.error(`Wml existed with code ${code}`);
        process.exit(1);
    });

    setTimeout(() => {
        /* Wait a bit to avoid nasty race conditions when the files might be changing while building */
        const jspmWatcher = spawn('jspm', ['build', 'src/App.js', 'www/bundle.js', '-wid']);
        jspmWatcher.stdout.on('data', (data) => {
            let output = data.toString();
            if (output) {
                console.log(output);
                if (output.includes('Watching . for changes with Watchman...')) {
                    if(process.platform === 'darwin'){
                        promiseExec(`osascript -e 'tell application "System Events"
        set activeApp to name of first application process whose frontmost is true
        if not "Google Chrome" is in activeApp then
                tell application "Google Chrome" to tell the active tab of its first window to reload
        end if
end tell'`);
                    }
                }
            }
        });
        jspmWatcher.stderr.on('data', (error) => {
            let output = error.toString();
            if (output) {
                /* Don't output the useless stack trace that pops up, it's blocking the important information */
                console.log(output.split('\n').filter((line) => !line.trim().startsWith('at ')).join('\n'));
            }
        });
        jspmWatcher.on('close', (code) => {
            console.error(`Wml existed with code ${code}`);
            process.exit(1);
        });
    }, 500);

});

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