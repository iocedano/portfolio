const util = require('util');
const exec = util.promisify(require('child_process').exec);
const Icons = require('../src/config/icons.json')

// Devicons
const URL = 'https://raw.githubusercontent.com/devicons/devicon/master/icons';

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
  return await exec(command);
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
  Icons.list.forEach(async (icon) => {
    const fileExits = await checkIsFileExists(icon.path);

    if (fileExits) {
      const result = await downloadIcon(icon);
      console.info(`${icon.name} :: downloaded`);
      return;
    }

    console.error(`File :: ${icon.name} :: does not exists`);
  })
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
