const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const arrSum = array => array.reduce(
    (acc, value) => acc + (Array.isArray(value) ? arrSum(value) : value),
    0);

  const h = matrix.length;
  const l = matrix[0].length;
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < l; j++) {
      if (matrix[i][j] === 0 && typeof matrix[i + 1] !== 'undefined') {
        matrix[i + 1][j] = 0;
      }
    }
  }

  return arrSum(matrix);
}

module.exports = {
  getMatrixElementsSum
};
