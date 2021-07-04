
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


/*--------Example 2---------------------*/
let ob1 = {
    name: 'Suraj',
    printName: function () {
        console.log(this.name);
    }
};


let ob2 = {
    name: 'Kirit Singh'  
};

ob1.printName.myBind(ob2)();

