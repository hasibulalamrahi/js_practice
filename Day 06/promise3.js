const Promise1 = Promise.resolve(`Promise 1 resolved`);

const Promise2 = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        resolve(`Promise 2 resolved`);
    },2000);
});

Promise1.then((res)=> console.log(res));
Promise2.then((res)=> console.log(res));