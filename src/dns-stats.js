const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let res = {};

  domains = domains.map(arr => arr.split('.').reverse().join('.')).sort();

  for (let i = 0; i < domains.length; i++) {
    let property = '';
    let parts = domains[i].split('.').map(item => `.${item}`);

    for (let j = 0; j < parts.length; j++) {
      property += parts[j];
      if (!res.hasOwnProperty(property)) {
        res[property] = 1;
      } else {
        res[property]++;
      }
    }
  }

  return res;
}

module.exports = {
  getDNSStats
};
