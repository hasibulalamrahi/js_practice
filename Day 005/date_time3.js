//This Codes covers ther 5.9 in the documentation javascript. Topic numbeinfo
function diffSubtract(date1, date2) {
    return date2 - date1;
  }
  
  function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
  }
  
  function bench(f) {
    let date1 = new Date(0);
    let date2 = new Date();
  
    let start = Date.now();
    for (let i = 0; i < 100000; i++) f(date1, date2);
    return Date.now() - start;
  }
  
  let time1 = 0;
  let time2 = 0;
  
  // run bench(diffSubtract) and bench(diffGetTime) each 10 times alternating
  for (let i = 0; i < 10; i++) {
    time1 += bench(diffSubtract);
    time2 += bench(diffGetTime);
  }
  
  alert( 'Total time for diffSubtract: ' + time1 );
  alert( 'Total time for diffGetTime: ' + time2 );