const knapSack = (values, weights, n, target) => {
    //base case: when we cannot have take more items
    if(target < 0){
      return Number.MIN_SAFE_INTEGER;
    }
    
    //base case: when no items are left or capacity becomes 0
    if(n < 0 || target === 0){
      return 0;
    }
    
    // pick current item n in knapSack and recur for
    // remaining items (n - 1) with reduced capacity (weight - weights[n])
    let include = values[n] + knapSack(values, weights, n - 1, target - weights[n]);
  
    // leave the current item n from knapSack and recur for
    // remaining items (n - 1)
    let exclude = knapSack(values, weights, n - 1, target);
    
    // return maximum value we get by picking or leaving the current item
    return Math.max(include, exclude);
}

const values = [1, 2, 3];
const weights = [4, 2, 5];
const target = 10;

console.log(knapSack(values, weights, values.length - 1, target));
