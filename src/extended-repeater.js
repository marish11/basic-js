const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let separator = options.separator || '+';
  let addition = '';
  let additionSeparator = options.additionSeparator || '|';
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let repeatTimes = options.repeatTimes || 1;
  let str1 = '';
  let str2 = String(str);
  let result = '';

  if ('addition' in options) {
    addition = String(options.addition);
  }

  while (additionRepeatTimes) {
    str1 += addition;
    if (additionRepeatTimes > 1) {
      str1 += additionSeparator;
    } else {
      str2 += str1;
    }
    additionRepeatTimes--;
  }

  while (repeatTimes) {
    result += str2;
    if (repeatTimes > 1) {
      result += separator;
    }
    repeatTimes--;
  }

  return result;
}

module.exports = {
  repeater
};
