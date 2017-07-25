/**
 * Created by lundfall on 20/07/2017.
 */

const { execSync } = require('child_process');
const fs = require('fs')

module.exports = (newConfigSettings) => {
  fs.appendFileSync('./jspm.config.js', `
SystemJS.config(${JSON.stringify(newConfigSettings)});
`);
  execSync('jspm clean');
}
