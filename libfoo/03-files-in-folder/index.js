const fs = require('fs/promises');
const path = require('path');
const st = require('fs');

fs.readdir(path.join(__dirname, 'secret-folder'), {withFileTypes: true})
  .then( files => {
    files.forEach(file => {
      if (file.isFile() === true) {
        st.stat(path.join(__dirname, 'secret-folder', file.name), (err, stats) => {
          let currentFile = path.parse(file.name);
          console.log(currentFile.name + ' - ' + currentFile.ext.substring(1) + ' - ' + stats.size + ' bytes');
        });
      }
    });
  })
  .catch( err => {
    if (err !== undefined) console.log(err);
  });

// <имя файла>-<расширение файла>-<вес файла>
