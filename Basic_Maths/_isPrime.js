

const _isPrime = (no) => {
  for (let i = 2; i <= Math.sqrt(no); ++i) {
    if (no % i == 0) 
      return false;
  }
  return true;
};


console.log(_isPrime(13));