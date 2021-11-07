let arr = [];
/*<-----------------------------------------Quick Sort------------------------------------------------------------>*/


/* Partition Algorithm */
const _Partition = (arr, l, r) => {
    let i = l - 1;
    let pivot = arr[r];
    for(let j  = i + 1; j <= (r - 1); ++j) {
        if(arr[j] <= pivot) {
            let temp = arr[j];
            arr[j] = arr[++i];
            arr[i] = temp;
        }
    }
    let temp = arr[r];
    arr[r] = arr[i+1];
    arr[i + 1] = temp;
    return i + 1;
 }

const _QuickSort = (arr, l, r) => {
    if(l < r) {
        let q = _Partition(arr, l, r);
        _QuickSort(arr, l, q - 1);
        _QuickSort(arr, q + 1, r);
    } 
}

arr = [-1, 100, 10, 45, 0, 6, -1, -2, 100, -10, -34, 56, 7];
_QuickSort(arr, 0, arr.length - 1);
console.log('\n\n ------Quick Sort Algorithm ----------\n\n', arr);


/* Complexity in different modes:- 
  1. Best Case - O(nlogn)
  2. Average Case - O(nlogn) 
  3. Worst Case - O(n* n) 
*/

/*<-----------------------------------------End of Quick Sort------------------------------------------------------>*/
