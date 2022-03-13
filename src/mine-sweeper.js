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
function minesweeper(matrix) {
  let h = matrix.length;
  let l = matrix[0].length;
    
  let newArr = Array.from(Array(h), () => new Array(l));
    
  let mines = 0;
    
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < l; j++) {
      mines = 0;

      if (i > 0) {
        if (matrix[i - 1][j - 1]) mines += 1;
        if (matrix[i - 1][j]) mines += 1;
        if (matrix[i - 1][j + 1]) mines += 1;
      }
      
      if (i < h - 1) {
        if (matrix[i + 1][j - 1]) mines += 1;
        if (matrix[i + 1][j]) mines += 1;
        if (matrix[i + 1][j + 1]) mines += 1;
      }
      
      if (matrix[i][j - 1]) mines += 1;
      if (matrix[i][j + 1]) mines += 1;

      newArr[i][j] = mines;
    }
  }

  return newArr;
}

module.exports = {
  minesweeper
};
