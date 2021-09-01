

let list = [];

const finalResult = result => {
    return 'All tasks is executed. \t' + JSON.stringify(result)
}

const createAsyncTask = list => {
   for(let i = 1; i < 6; ++i) {
       list.push(asyncSquareFunction(i));
   }
   return ayncTaskRunner(list, finalResult);
};

const asyncSquareFunction = no => cb => {
    setTimeout(() => {
        cb(no * no);
    }, 1000);
}

const ayncTaskRunner = (tasks, finalResult) => {
   
    const createTaskPromises = tasks => {
        return tasks.map(parentCall => {
            return new Promise((resolve, reject) => {
                parentCall(result =>  resolve(result));
            });
        }); 
    }
        
    return Promise.allSettled(createTaskPromises(tasks))
    .then(res => {
      return finalResult(res);
    });
}

createAsyncTask(list).then(result => {
    console.log(result);
})

