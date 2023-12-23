const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function checkIfLeapYear(year) {
  if (year % 4 !== 0) return false;
  if (year % 100 === 0 && year % 400 !== 0) return false;
  return true;
}

function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (!(date instanceof Date)) throw new Error('Invalid date!');
  if (date[Symbol.toStringTag]) throw new Error('Invalid date!');

  let listOfDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (checkIfLeapYear(date.getFullYear())) {
    listOfDays[1] = 29;
  }

  if (date.getDate() <= 0 || date.getDate() > listOfDays[date.getMonth()] ||
  date.getMonth() < 0 || date.getMonth() > 11) throw new Error('Invalid date!');

  let yearFromString = date.toString().split('').slice(11, 15).join('');
  if (yearFromString != date.getFullYear()) throw new Error('Invalid date!');

  if (date.getMonth() >= 2 && date.getMonth() < 5) return 'spring';
  if (date.getMonth() >= 5 && date.getMonth() < 8) return 'summer';
  if (date.getMonth() >= 8 && date.getMonth() < 11) return 'fall';
  return 'winter';
}

module.exports = {
  getSeason
};
