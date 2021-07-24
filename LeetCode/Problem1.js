var checkZeroOnes = function (s) {
  let temp = s[0];
  let keyMap = { 0: 0, 1: 0 };

  keyMap[temp] = 1;
  
  for (let i = 1; i < s.length; ++i) {
    temp += s[i]; 
    if(temp[i-1] === temp[i]) {}
    else {}
  }

  console.log(keyMap);

  if (keyMap["1"] > keyMap["0"]) return true;
  if (keyMap["1"] <= keyMap["0"]) return false;
};

checkZeroOnes("1101");
