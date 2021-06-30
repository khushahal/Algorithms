


const _stringsMap = {
    '(': ')',
    '{': '}',
    '[': ']'
};


const isBalancedParethesis = string => {
   
    if(!string.length) 
        return true;

    let _stack = [string[0]];
    
    for(let i = 1; i < string.length; ++i) {
        _stack.push(string[i]);

        let _keymap = _stringsMap[_stack[_stack.length - 2]]; 

        if(_keymap === _stack[_stack.length - 1]) {
            _stack.pop();
            _stack.pop();
        }
    }

    return _stack.length?false: true;
}

console.log(isBalancedParethesis('(({}}))'));