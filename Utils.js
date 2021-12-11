

const log = (message) => {
    console.log(message);
}

const _create2DArray = (rows, columns) => {
    const _two2dArray = [];
  
    for (let i = 0; i < rows; ++i) _two2dArray.push(new Array(columns));
  
    return _two2dArray;
};

module.exports = {
    log,
    _create2DArray
}