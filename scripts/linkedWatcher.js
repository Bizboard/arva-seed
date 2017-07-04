/**
 * Created by lundfall on 05/02/2017.
 */
let { spawn, exec } = require('child_process');
let path = require('path');
let fs = require('fs');
let rimraf = require('rimraf');
let c2p = require('callback-promise');
let localToGlobalPaths = require('./linkedSync/localToGlobalPaths.js');
let { jspm: { dependencies } } = require('../package.json');

let promiseExec = c2p(exec, 1, 0);
let wmlDirectory = 'wml';
let execWml = (args) => promiseExec(`${wmlDirectory} ${args}`);

/* Recursive function to create a directory with all symlinked directories.
 * Some refer to the local jspm_packages, other refer to the external paths
 */
let duplicateSymlinkedModules = (dir, newDirectory, done) => {
    let results = [];
    rimraf.sync(newDirectory);
    fs.mkdirSync(newDirectory);
    (function innerDuplicateSymlinkedModules(dir, newDirectory, done) {
        fs.readdir(dir, (err, list) => {
                if (err) return done(err);
                let entriesLeft = list.length;
                if (!entriesLeft) return done(null, results);
                for (let fileName of list) {
                    let file = path.resolve(dir, fileName);
                    fs.stat(file, function (err, stat) {
                        if (stat && stat.isDirectory()) {
                            if (file.includes('@')) {
                                let globalPath = localToGlobalPaths[file];
                                if (globalPath) {
                                    if (!directoryExists(globalPath)) {
                                        console.error(`Directory doesn't exist: ${globalPath}`);
                                        process.exit(1);
                                    }
                                    console.log(`Successfully linked ${globalPath}`);
                                    fs.symlinkSync(globalPath, path.join(newDirectory, fileName));
                                } else {
                                    fs.symlinkSync(file, path.join(newDirectory, fileName));
                                }
                            } else {

                                fs.mkdirSync(path.join(newDirectory, fileName));
                                innerDuplicateSymlinkedModules(file, path.join(newDirectory, fileName), function (err, res) {
                                    results = results.concat(res);
                                    if (!--entriesLeft) done(null, results);
                                });
                            }
                        } else {
                            if (!--entriesLeft) done(null, results);
                        }
                    });
                }
            }
        );
    })(dir, newDirectory, done);
};

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

                 /*   promiseExec(`osascript -e 'tell application "System Events"
        set activeApp to name of first application process whose frontmost is true
        if not "Google Chrome" is in activeApp then
                tell application "Google Chrome" to tell the active tab of its first window to reload
        end if
end tell'`);
                }*/
            }}
        });
        jspmWatcher.stderr.on('data', (error) => {
            let output = error.toString();
            if (output ) {
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