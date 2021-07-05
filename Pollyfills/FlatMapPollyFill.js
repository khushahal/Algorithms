let arr = [1, 2, [3, 4, 5, [6, 7, [8]]]];



const print_flat = arr => {
  let i = 0;
  let result = [];
  let length = arr.length;
 
  while(i < length) {
   if(typeof arr[i] !== "object") {
     result.push(arr[i]);
     i++;
   }else {
      arr = [...arr[i]];
      length = arr.length;
      i = 0;
   }
  }
 
  return result;
};

console.log(print_flat(arr));