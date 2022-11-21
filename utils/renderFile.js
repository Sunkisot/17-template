let fse = require('fs-extra');
let path = require('path');
let glob = require('glob');
let ejs = require('ejs');
let util = require('util');
let prettier = require('prettier');

async function renderEjsTemplates(templateData, templateDir) {
    templateDir = path.join(__dirname, templateDir)
    console.log(templateDir)
  return new Promise((resolve, reject) => {
    glob(
      '**',
      {
        cwd: templateDir,
        ignore: ['node_modules/**'],
        nodir: true,
        dot: true,
      },
      (err, files) => {
        if (err) {
          return reject(err);
        }

        Promise.all(
          files.map((file) => {
            const filepath = path.join(templateDir, file);
            return renderFile(filepath, templateData);
          }),
        )
          .then(() => resolve())
          .catch(reject);
      },
    );
  });
}

async function renderFile(templateFilepath, data) {
  const asyncRenderFile = util.promisify(ejs.renderFile);
  try {
    let content = await asyncRenderFile(templateFilepath, data);
    const targetFilePath = path.join(__dirname, '../pages', `${data.pageName}.vue`);
    console.log(targetFilePath)

    // if (targetFilePath.match(/tsx$|jsx$/)) {
    //   // TODO: 需要对换行进行进一步的处理。
    //   content = prettier.format(content, { singleQuote: true, filepath: targetFilePath });
    // }
    // console.log('targetPath', targetFilePath)
    // await fse.rename(templateFilepath, targetFilePath);
    await fse.writeFile(targetFilePath, content);
  } catch (err) {
    console.log('RenderErr', err);
  }
}

module.exports = {
    renderEjsTemplates
}