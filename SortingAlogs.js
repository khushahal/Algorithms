
let arr = [];

/*<-----------------------------------------Merge Sort------------------------------------------------------>*/

/* Merge Sort - Complexity nlogn*/
const _Merge = (larr, rarr) => {
    let i = j = 0;
    let result = [];

    while (i < larr.length && j < rarr.length) {
        if (larr[i] < rarr[j])
            result.push(larr[i++]);
        else
            result.push(rarr[j++]);
    }

    while (i < larr.length)
        result.push(larr[i++]);
    while (j < rarr.length)
        result.push(rarr[j++]);

    return result;
}
const  _MergeSort = arr => {

    if (arr.length < 2)
        return arr; 

    let _mid = Math.floor(arr.length / 2);

    let _rightArr = arr.splice(_mid);
    let _leftArr = arr;

    return _Merge(_MergeSort(_leftArr), _MergeSort(_rightArr));
};

arr = [200, 10, -1, 9, 45, 7, 0];
console.log(`\n\n-------Merge Sort Algorithm-------\n\n`, _MergeSort(arr));

/* Complexity in all modes:- 
  1. Best Case - O(nlogn)
  2. Average Case - O(nlogn) 
  3. Worst Case - O(nlogn) 
*/

/*<-----------------------------------------End of Merge Sort----------------------------------------------------->*/



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
