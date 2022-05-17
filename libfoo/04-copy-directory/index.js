const fs = require('fs/promises');
const path = require('path');
const sourceDir = 'files';
const targetDir = 'files-copy';

const readDirectory = () => {
  fs.readdir(path.join(__dirname, sourceDir), {withFileTypes: true})
    .then(files => {
      files.forEach(file => {
        fs.copyFile(path.join(__dirname, sourceDir, file.name), path.join(__dirname, targetDir, file.name), 0)
          .then(() => console.log(`${file.name} - ok`))
          .catch(err => console.log('Copy failed by reason ', err.code));
      });
    })
    .catch(err => (err !== undefined) && console.log(err));
};

fs.rm(path.join(__dirname, targetDir), {force: true, recursive: true})
  .then(() => {
    fs.mkdir(path.join(__dirname, targetDir))
      .then(() => readDirectory())
      .catch(err => console.log('Make folder failed by reason', err.code));
  });
