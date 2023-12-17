const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let res = 0;
  const compar = Math.min(s1.length, s2.length);

  s1 = s1.split('').sort();
  s2 = s2.split('').sort();
  while (compar && s1.length && s2.length) {
    if (s1[0] === s2[0]) {
      res += 1;
      s1.shift();
      s2.shift();
    } else {
      s1[0] > s2[0] ? s2.shift() : s1.shift();
    }
  }

  return res;
}

module.exports = {
  getCommonCharacterCount
};
