const fsp = require('fs/promises');
const fs = require('fs');
const path = require('path');
const targetFolder = 'project-dist';
const targetHTML = 'index.html';
const targetStyle = 'style.css';
const assetsFolder = 'assets';
const templateFile = path.join(__dirname, '/template.html');
const componentsFolder = 'components';
const stylesFolder = 'styles';
let templateContent = '';
let componentList = [];
let componentsContent = {};
let stylesList = [];
let stylesContent = '';

const makeTargetDir = () => {
  fsp.mkdir(path.join(__dirname, targetFolder))
    .then(() => console.log('Make target directory done'))
    .catch(err => console.log('MkDir failed by reason', err.code));
};

const readComponentFiles = () => {
  return new Promise((resolve) => {
    fsp.readdir(path.join(__dirname, componentsFolder), {withFileTypes: true})
      .then(files => {
        files.forEach(file => {
          let currentFile = path.parse(file.name);
          if (currentFile.ext === '.html') componentList.push(currentFile.name);
        });
        resolve();
      });
  });
};

const loadComponentData = (component) => {
  return new Promise(resolve => {
    let stream = new fs.createReadStream(path.join(__dirname, componentsFolder, component + '.html'), {encoding: 'utf-8'});

    stream.on('readable', () => {
      let data = stream.read();
      if (data != null) {
        componentsContent[component] = data;
        resolve();
      }
    });
  });
};

const readComponentsContent = () => {
  return new Promise(resolve => {
    let arr = [];
    componentList.forEach((component) => {
      arr.push(loadComponentData(component));
    });
    Promise.all(arr).then(() => resolve());
  });
};

const writeResult = (fileName, payload) => {
  return new Promise(resolve => {
    const writeStream = new fs.createWriteStream(fileName, {encoding: 'utf-8'});

    writeStream.on('ready', () => writeStream.write(payload) );

    writeStream.on('close', () => {
      writeStream.end();
      resolve();
    });
  });
};

makeTargetDir();

let htmlflow = new Promise((resolve, reject) => {
  //читаем содержимое файла с шаблоном
  let stream = new fs.createReadStream(templateFile, {encoding: 'utf-8'});

  stream.on('readable', () => {
    let data = stream.read();
    if (data != null) {
      templateContent = data;
      resolve();
    }
  });

  stream.on('error', (err) => {
    reject( ()=> console.log(err));
  });

});

htmlflow
  // смотрим в каталог с компонентами и создаем перечень компонентов в массиве
  .then(() => {
    return readComponentFiles();
  })
  // читаем каталог с компонентами, создаем объект с ключем по имени компонента и значением содержимым файла
  .then(() => {
    return readComponentsContent();
  })
  //Сопоставляем шаблонным меткам данные из объекта компонентов, пишем в результирующий файл
  .then(() => {
    let resultContent = templateContent;
    componentList.forEach(el => {
      resultContent = resultContent.replace(`{{${el}}}`, componentsContent[el]);
    });
    console.log('HTML-flow finished.');
    return writeResult(path.join(__dirname, targetFolder, targetHTML), resultContent);
  })
  .catch(err => console.log('HTML-flow failed by reason', err.code));

const loadStylesData = (style) => {
  return new Promise(resolve => {
    let stream = new fs.createReadStream(path.join(__dirname, stylesFolder, style + '.css'), {encoding: 'utf-8'});

    stream.on('readable', () => {
      let data = stream.read();
      if (data != null) {
        stylesContent += data;
        resolve();
      }
    });
  });
};

const readStylesContent = () => {
  return new Promise(resolve => {
    let stylesArr = [];
    stylesList.forEach((style) => {
      stylesArr.push(loadStylesData(style));
    });
    Promise.all(stylesArr).then(() => resolve());
  });
};

const writeStyles = (fileName, payload) => {
  return new Promise(resolve => {
    const writeStream = new fs.createWriteStream(fileName, {encoding: 'utf-8'});

    writeStream.on('ready', () => writeStream.write(payload));

    writeStream.on('close', () => {
      writeStream.end();
      resolve();
    });
  });
};

let cssFlow = new Promise((resolve) => {
  // смотрим в каталог со стилями и создаем перечень файлов в массиве
  fsp.readdir(path.join(__dirname, stylesFolder), {withFileTypes: true})
    .then(files => {
      files.forEach(file => {
        let currentFile = path.parse(file.name);
        if (currentFile.ext === '.css') stylesList.push(currentFile.name);
      });
      resolve();
    });
});

cssFlow
  //читаем файлы со стилями в объект стилей
  .then(() => {
    return readStylesContent();
  })
  // пишем файл со стилями в бандл со стилями
  .then(() => {
    console.log('Styles-flow finished.');
    return writeStyles(path.join(__dirname, targetFolder, targetStyle), stylesContent);
  });

const copyFolder = (source, target) => {
  fsp.readdir(source, {withFileTypes: true})
    .then(files => {
      return new Promise(resolve => {
        files.forEach(file => {
          if (file.isDirectory()) {
            fsp.mkdir(path.join(target, file.name), {recursive: true})
              .then(() => copyFolder(path.join(source, file.name), path.join(target, file.name)));
          }
        });
        resolve();
      })
        .then(() => {
          files.forEach(file => {
            if (file.isFile()) {
              fsp.copyFile(path.join(source, file.name), path.join(target, file.name), 0)
                .catch( () => console.log('The file could not be copied'));
            }
          });
        });
    })
    .catch(err => (err !== undefined) && console.log(err));
};

copyFolder(path.join(__dirname, assetsFolder), path.join(__dirname, targetFolder, assetsFolder));
