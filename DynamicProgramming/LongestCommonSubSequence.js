

const _create2DArray = (rows, columns) => {
  const _two2dArray = [];

  for (let i = 0; i < rows; ++i) _two2dArray.push(new Array(columns));

  return _two2dArray;
};

const _LCSTRING = (str1, str2) => {
  let rows = ++str1.length; 
  let cols = ++str2.length;  
  let _LCS = _create2DArray(rows, cols);


  for (let i = 0; i < cols; i++) 
        _LCS[0][i] = 0;

  for (let i = 0; i < rows; i++) 
      _LCS[i][0] = 0;


  for (var i = 1; i <= str1.length; ++i) {
    for (var j = 1; j <= str2.length; ++j) {
      if (str2[j - 1] == str1[i - 1]) 
       _LCS[i][j] = 1 + _LCS[i - 1][j - 1];
      else 
      _LCS[i][j] = Math.max(_LCS[i - 1][j], _LCS[i][j - 1]);
    }
  }

  return _LCS[i-1][j-1];
};

console.log(_LCSTRING("abc", "def"));

