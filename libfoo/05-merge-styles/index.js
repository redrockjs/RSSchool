const fs = require('fs/promises');
const fls = require('fs');
const path = require('path');
const sourceDir = 'styles';
const targetDir = 'project-dist';
const targetFile = 'bundle.css';
let dataArr = [];

const readFiles = (filename) => {
  console.log('Merging: ', filename);

  let readStream = new fls.createReadStream(filename, {encoding: 'utf-8'});

  readStream.on('readable', () => {
    let data = readStream.read();
    (data !== null) && dataArr.push(data);
  });
  readStream.on('error', err => {
    err.message === 'ENOENT' ? console.log('File not found.') : console.error(err);
  });

  readStream.on('end', () => {
    let writeStream = new fls.createWriteStream(path.join(__dirname, targetDir, targetFile));
    dataArr.forEach(el => writeStream.write(el));
    writeStream.end();
  });
};

fs.readdir(path.join(__dirname, sourceDir), {withFileTypes: true})
  .then(files => {
    files.forEach(file => {
      if (file.isFile() && path.parse(file.name).ext.substring(1) === 'css') {
        readFiles(path.join(__dirname, sourceDir, file.name));
      }
    });
  })
  .catch(err => (err !== undefined) && console.log(err));
