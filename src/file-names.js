const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function checkIfAlreadyExists(fileName, arr, k) {
  if (arr.includes(fileName)) {
    k++;
    k = checkIfAlreadyExists(`${fileName}(${k})`, arr, k);
  }
  return k;
}

function renameFiles(names) {
  let res = [];
  let k = 1;

  names.forEach(fileName => {
    k = checkIfAlreadyExists(fileName, res, 0);

    if (k > 0) {
      res.push(`${fileName}(${k})`);
    } else {
      res.push(fileName);
    }
  })

  return res;
}

module.exports = {
  renameFiles
};
