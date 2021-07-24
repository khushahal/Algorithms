


const _Factorial = no => {
    const _FACT = new Array(no);
    _FACT[0] = 1;
    _FACT[1] = 1;
    
    
    for(let i = 2; i <= no; ++i) {
        _FACT[i] = i * _FACT[i - 1];
    }

    return _FACT[no];
};

console.log(_Factorial(6));