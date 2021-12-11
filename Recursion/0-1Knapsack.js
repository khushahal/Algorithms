

/**
 * @description recursive approach for the knapsack.
 * @param {array} values 
 * @param {array} weights 
 * @param {integer} n 
 * @param {integer} target 
 * @returns {integer}
 */
 const knapSack = (values, weights, n, target) => {
    
   if (target === 0 || n === 0) {
     return 0;
   }
 
   if (weights[n-1] > target) {
     return knapSack(values, weights, n-1, target)
   }
   
   if (weights[n-1] <= target) {
     const exclude = knapSack(values, weights, n-1, target);
     const include = weights[n-1] + knapSack(values, weights, n-1, target - weights[n-1]);
     return Math.max(exclude, include);
   }
 }
 
 const values = [1, 2, 3, 4];
 const weights = [4, 5, 5, 2];
 const target = 15;
 
 console.log(knapSack(values, weights, values.length, target));
 
 
 
 
 