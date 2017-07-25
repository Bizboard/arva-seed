/**
 * Created by lundfall on 25/07/2017.
 */


let fs = require('fs')




fs.readFile('./www/bundle.js.map', (err, chunk) => {
  if(err){
    throw err;
  }
  let output = chunk.toString();
  let debugNoSources = JSON.parse(output).sources.length;

  const regex = /file:\/.*?\/([^\/]*?\.(js|svg\.txt))/gm
  let input = chunk.toString()
  let regexExec
  let charsRemoved = 0;
  while ((regexExec = regex.exec(input)) !== null) {
    console.log('replacing length of', regexExec[0].length);
    let modifiedIndex = regexExec.index - charsRemoved;
    console.log(output.slice(modifiedIndex - 30, modifiedIndex + regexExec[0].length))
    output = output.slice(0, modifiedIndex) +
      regexExec[1] +
      output.slice(modifiedIndex + regexExec[0].length)
    charsRemoved += regexExec[0].length - regexExec[1].length;
    console.log(output.slice(modifiedIndex-30, modifiedIndex + regexExec[0].length))
    if(JSON.parse(output).sources.length !== debugNoSources){
      throw new Error('Information lost!');
    }

  }
  fs.writeFileSync('./www/bundle.alt.js.map', output)
})
