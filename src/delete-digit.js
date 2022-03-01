const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const strArr = n.toString().split('');
  const numArr = strArr.map(el => Number(el));
  const index = numArr.findIndex(el => el < numArr[numArr.lastIndexOf(el) + 1]);
  numArr.splice(index, 1);
  const maxNum = Number(numArr.join(''));
  return maxNum;
}

module.exports = {
  deleteDigit
};
