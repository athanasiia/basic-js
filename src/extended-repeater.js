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
  options.repeatTimes = options.repeatTimes || 1;
  options.separator = options.separator || '+';
  options.addition = options.addition === undefined ? '' : `${options.addition}`;
  options.additionSeparator = options.additionSeparator || '|';
  options.additionRepeatTimes = options.additionRepeatTimes || 1;

  let addition = (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes);
  addition = addition.slice(0, addition.length - options.additionSeparator.length);

  let res = (str + addition + options.separator).repeat(options.repeatTimes);
  res = res.slice(0, res.length - options.separator.length);
  return res;
}

module.exports = {
  repeater
};
