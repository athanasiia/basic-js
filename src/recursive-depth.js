const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0;
    let isFlat = true;

    for (let i = 0; i < arr.length; i++) {
      isFlat = !Array.isArray(arr[i]);
      if (!isFlat) {
        depth = this.calculateDepth(arr.flat());
        break;
      }
    }

    depth++;
    return depth;
  }
}

module.exports = {
  DepthCalculator
};
