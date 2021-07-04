/*const { performance } = require('perf_hooks');

function addUptoN(n) {
    return n * (n + 1) / 2
}

let t1 = performance.now(); // In Client it is directly available.
console.log(" Add upto n ", addUptoN(2));

let t2 = performance.now();cls

console.log(`Total time taken ${(t2 - t1) / 1000} seconds`);*/



// Custom myBind pollyFill. 
Function.prototype.myBind = function (context, ...args){
    let func = this;
    return (...runTimeArgs) => {
        let allArgs = runTimeArgs.concat(args);
        func.apply(context, allArgs);
    }
};


// Basic function with parameter.
function getFullName(lastName, bindTimeArgs){
    console.log("run time arguments ", lastName);
    console.log("bind Time Args ", bindTimeArgs);
    console.log(" Conext output: ", this);
};

//Call bind method with context and arguments.
let getFullNameWrapper = getFullName.myBind({ fname: "khus" }, "arguments in bind");

// Call method with argument.
getFullNameWrapper("sharma");


