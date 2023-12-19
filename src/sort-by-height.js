const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let exceptionIndex = [];

  arr.forEach((element, i) => {
    if (element === -1) {
      exceptionIndex.push(i);
    }
  })

  arr = arr.sort((a, b) => a - b).splice(exceptionIndex.length);

  exceptionIndex.forEach(index => {
    arr.splice(index, 0, -1);
  })

  return arr;
}

module.exports = {
  sortByHeight
};
