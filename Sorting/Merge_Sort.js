
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



