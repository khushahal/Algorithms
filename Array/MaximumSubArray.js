

const _array = [4, -3, -2, 2, 3, 1, -2, -3, 4, 2, -6, -3, -1, 3, 1, 2];


const _FIND_MAX_SUB_ARRAY = (list = []) => {

    let max_end_here = 0;
    let start = end = s = 0;
    let max_so_far = list[0];
     
    for(let i = 0; i < list.length; ++i) {

        max_end_here += list[i];
        
        if(max_so_far < max_end_here) {
            max_so_far = max_end_here;
            start = s; 
            end = i;
        }

        if(max_end_here < 0) {
            max_end_here = 0;
            s = i + 1;
        }
 
    }
    
    return list.slice(start, end + 1);
};

console.log(_FIND_MAX_SUB_ARRAY(_array));