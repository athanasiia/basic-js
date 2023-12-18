const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function countMines(matrix, rowIndex, columnIndex) {
  let minesAround = 0;
  if (matrix[rowIndex][columnIndex - 1]) minesAround++;
  if (matrix[rowIndex][columnIndex + 1]) minesAround++;

  if (matrix[rowIndex - 1]) {
    if (matrix[rowIndex - 1][columnIndex]) minesAround++;
    if (matrix[rowIndex - 1][columnIndex - 1]) minesAround++;
    if (matrix[rowIndex - 1][columnIndex + 1]) minesAround++;
  }

  if (matrix[rowIndex + 1]) {
    if (matrix[rowIndex + 1][columnIndex]) minesAround++;
    if (matrix[rowIndex + 1][columnIndex - 1]) minesAround++;
    if (matrix[rowIndex + 1][columnIndex + 1]) minesAround++;
  }

  return minesAround;
}

function minesweeper(matrix) {
  let res = [];
  matrix.forEach((row, rowIndex) => {
    let newRow = [];

    row.forEach((element, columnIndex) => {
      let minesAround = countMines(matrix, rowIndex, columnIndex);
      newRow.push(minesAround);
    })

    res.push(newRow);
  })

  return res;
}

module.exports = {
  minesweeper
};
