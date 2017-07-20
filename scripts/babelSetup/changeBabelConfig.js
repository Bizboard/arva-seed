/**
 * Created by lundfall on 20/07/2017.
 */

const { execSync } = require('child_process');
const fs = require('fs')

module.exports = (newBabelConfig) => {
  fs.appendFileSync('./jspm.config.js', `
SystemJS.config({
  babelOptions: ${JSON.stringify(newBabelConfig)}
});
`);
  execSync('jspm clean');
}
