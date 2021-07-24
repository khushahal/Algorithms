


const checkIfPangram = function(sentence) {
    
    let _keyMap = {};

    for(let i = 0; i < sentence.length; ++i) {
        if(!_keyMap.hasOwnProperty(sentence[i])) {
            _keyMap[sentence[i]] = 0;
        }
        _keyMap[sentence[i]] += 1;
    }
    
    return Object.keys(_keyMap).length === 26;
};

console.log(checkIfPangram('thequickbrownfoxjumpsoverthelazydog'));