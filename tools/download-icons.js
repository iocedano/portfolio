const util = require('util');
const fs = require('fs');
const exec = util.promisify(require('child_process').exec);
const Icons = require('../src/config/icons.json')

// Devicons
const URL = 'https://raw.githubusercontent.com/devicons/devicon/master/icons';
const VALID_ICONS = './src/config/validicons.json';

/**
 * Get Icon URL
 * @param {String} path
 * @returns {String} URL
 */
const getIconURL = (path) => `${URL}/${path}`;

/**
 * Download icon
 *
 * @param {Object} icon icon object
 * @param {String} icon.name icon name
 * @param {String} icon.path icon path in the repo
 * @return {Promise}
 */
const downloadIcon = async (icon) => {
  const command = `curl ${getIconURL(icon.path)} > ./src/assets/icons/${icon.name}.svg`;
  return exec(command);
};

/**
 * Check is file exists
 *
 * @param {String} path icon path
 * @returns {Boolean} file existence
 */
const checkIsFileExists = async (path) => {
  const command = `curl -o /dev/null --silent -Iw '%{http_code}' ${getIconURL(path)}`;
  const { stdout } = await exec(command);

  return stdout === '200';
}

const main = async () => {
  const validIcons = Icons.list.map(async (icon) => {
    const fileExits = await checkIsFileExists(icon.path);

    if (fileExits) {
      await downloadIcon(icon);
      console.info(`${icon.name} :: downloaded`);
      return icon.name;
    }

    console.error(`File :: ${icon.name} :: does not exists`);
  });
  
  Promise.all(validIcons).then((list) => {
    fs.writeFile(VALID_ICONS, JSON.stringify({ list }, null, '  '), 'utf8', (err) => {
      if(err) {
        console.log(err);
      }
    });
  });
}

// Accessing the main module
// https://nodejs.org/docs/latest/api/modules.html#modules_accessing_the_main_module
if (require.main === module) {
  main();
}

// Testing purpose
module.exports = {
  getIconURL,
  downloadIcon,
  checkIsFileExists
}
