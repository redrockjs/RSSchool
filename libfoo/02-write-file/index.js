const path = require('path');
const fs = require('fs');
const fileName = path.join(__dirname, 'text.txt');

let stream = new fs.createWriteStream(fileName);
stream.on('error', (err) => console.log(`Err: ${err}`));

const rl = require('readline');
const {stdin: input, stdout: output} = require('process');

const readLine = new rl.createInterface({input, output});

let finishJob = () => {
  console.log('Done, thank you!');
  stream.end();
  readLine.close();
  process.exit(0);
};

console.log('Please input some text:');

readLine.on('line', (input) => {
  input === 'exit'
    ? finishJob()
    : stream.write(input);
});

readLine.on('SIGINT', () => {
  finishJob();
});
