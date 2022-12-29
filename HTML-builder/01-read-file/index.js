const path = require('path');
const fs = require('fs');
const fileName = path.join(__dirname, 'text.txt');

const stream = new fs.ReadStream(fileName, {encoding: 'utf-8'});

stream.on('readable', function () {
  const data = stream.read();
  if (data != null) console.log(data);
});

stream.on('error', function (err) {
  console.log(err.message);
});

