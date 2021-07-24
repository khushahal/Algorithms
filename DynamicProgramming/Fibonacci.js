



const _Fibonachi = no => {
    const _FIB = new Array(no + 1);
    _FIB[0] = 0;
    _FIB[1] = 1;
    
    
    for(let i = 2; i <= no; ++i) {
        _FIB[i] = _FIB[i-1] + _FIB[i-2];
    }

    return _FIB[_FIB.length - 1];
}

/*
  Complexity O(n);
  Without Dp - O(2^n)
*/

console.log(_Fibonachi(7));