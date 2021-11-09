

const arr_1 = [1, 2, 3, 4, 5]
const arr_2 = [1, 1, 2, 4];


const _intersection = (arr1, arr2) => {
    
    if (arr1.length === 0 || arr2.length === 0) {
        return []
    }

    const keyMap = {};
    const concatArr = arr1.concat(arr2);
  
    concatArr.forEach(no => {
        if (!keyMap[no]) {
            keyMap[no] = 0;
        }
        keyMap[no] += 1;
    })

    return Object.keys(keyMap).filter(key => keyMap[key] > 1)
}

console.log(_intersection(arr_1, arr_2));