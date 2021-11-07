


const _findGreater = (no1, no2) => {
  return no1 > no2 ? [no1, no2] : [no2, no1];
};

const _HCF = (no1, no2) => {
  let _remain;
  let [_larg, _small] = _findGreater(no1, no2);

  while (_small != 0) {
    _remain = _larg % _small;
    _larg = _small;
    _small = _remain;
  }

  return _larg;
};

const _LCM = (no1, no2) => {
    return (no1 * no2) / _HCF(no1, no2);
}

console.log(_HCF(1, 3));
console.log(_LCM(15, 30));