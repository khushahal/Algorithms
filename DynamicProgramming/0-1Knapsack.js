const Utils = require('../Utils');
/**
 * @description recursive approach for the knapsack.
 * @param {array} values 
 * @param {array} weights 
 * @param {integer} n 
 * @param {integer} target 
 * @returns {integer}
 */

const target = 15;
const values = [1, 2, 3, 4];
const weights = [4, 5, 5, 2];
const tempArray = Utils._create2DArray(values.length + 1, target + 1);

// Memojize 
tempArray.forEach(element => element.fill(-1));

const knapSack = (values, weights, n, target) => {

  if (target === 0 || n === 0) {
    return 0;
  }

  if (weights[n - 1] > target) {
    tempArray[n][target] = knapSack(values, weights, n - 1, target)
    return tempArray[n][target];
  }

  if(tempArray[n][target] != -1) {
      return tempArray[n][target];
  }

  if (weights[n - 1] <= target) {
    const exclude = knapSack(values, weights, n - 1, target);
    const include = weights[n - 1] + knapSack(values, weights, n - 1, target - weights[n - 1]);
    tempArray[n][target] = Math.max(exclude, include);
    return tempArray[n][target];
  }
}

console.log(knapSack(values, weights, values.length, target));




