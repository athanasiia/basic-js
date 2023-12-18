const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function getNumberOfTurns(disksNumber) {
  let turns = 0;
  if (disksNumber > 1) {
    turns = getNumberOfTurns(disksNumber - 1);
  }
  turns = turns * 2 + 1;
  return turns;
}

function calculateHanoi(disksNumber, turnsSpeed) {
  let res = {};
  res.turns = getNumberOfTurns(disksNumber);
  res.seconds = Math.floor((res.turns * 3600) / turnsSpeed);
  return res;
}

module.exports = {
  calculateHanoi
};
