

const _isPrime = (no) => {
  for (let i = 2; i <= (no ** 1 / 2); ++i) {
    if (no % i == 0) 
      return false;
  }
  return true;
};


console.log(_isPrime(13));