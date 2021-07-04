


let _array = [1, 2, 3, 4, 5, 6 ];

let _array2 = [{id: 1}, {id: 2}, {id: 3}];


Array.prototype.filterModified = function (callback) {
    
    const _result = [];
    
    for(let i = 0; i < this.length; ++i) {   
       if(callback(this[i], i, this))
        _result.push(this[i]);
    }

    return _result;
};


let _filteredArray = _array.filterModified((i, index, arr) => {
    return i % 2;
});

let _filteredArray2 = _array2.filterModified((i, index, arr) => {
    return i.id % 2;
});

console.log(_filteredArray);
console.log(_filteredArray2);