//This Codes covers ther 5.9 in the documentation javascript. Topic numbeinfo

let start = new Date(); // start measuring time


for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = new Date(); // end measuring time

alert( `The loop took ${end - start} ms` );