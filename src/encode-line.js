const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = [];
  let count = 0;

  str.split('').forEach((letter, i, s) => {
    if (s[i] === s[i - 1] || i === 0) {
      count++;
    } else {
      arr.push(count);
      count = 1;
    }
  })
  arr.push(count);

  str = str.split('').filter((letter, i, s) => s[i] !== s[i - 1]);

  let res = '';

  for(let i = 0; i < str.length; i++) {
    if (arr[i] !== 1) {
      res += arr[i];
    }
    res += str[i];
  }

  return res;
}

module.exports = {
  encodeLine
};
