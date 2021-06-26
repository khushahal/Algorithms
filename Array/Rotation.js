
/* left Rotate an array by the degree < the size of array */
const _lrotate = (list = [], degree) => {
  let result = list.splice(degree);
  return [...list.reverse(), ...result.reverse()].reverse();
};

console.log(_lrotate([1, 2, 3, 4, 5, 6], 2));
