//This Code covers the topic no 6.2 from javascript.info

function sumAll(...args) { // args is the name for the array
    let sum = 0;
  
    for (let arg of args) sum += arg;
  
    return sum;
  }
  
  alert( sumAll(1) ); 
  alert( sumAll(1, 2) ); 
  alert( sumAll(1, 2, 3) ); 