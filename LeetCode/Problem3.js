let _keyMap = {
  "(": ")",
};

const isBalancedParethesis = (s) => {
  if (s.length === 0 || s.length === 1) return 0;

  let stack = [],
    cdepth = 0,
    maxdepth = 0;

  for (let i = 0; i < s.length; ++i) {
    if (stack.length == 0) {
      cdepth = 0;
    }

    if (s[i] == "(" || s[i] == ")") stack.push(s[i]);
    else continue;

    if (s[i] == "(") cdepth++;

    if (_keyMap[stack[stack.length - 2]] === stack[stack.length - 1]) {
      stack.pop();
      stack.pop();
      if (maxdepth < cdepth) maxdepth = cdepth;
      cdepth--;
    }
  }

  return maxdepth;
};

console.log(isBalancedParethesis("1+(2*3)/(2-1)"));
