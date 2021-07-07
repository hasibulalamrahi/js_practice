//This Code covers the topic no 6.9 from javascript.info


let worker = {
    someMethod() {
      return 1;
    },
  
    slow(x) {
      
      alert("Called with " + x);
      return x * this.someMethod(); // (*)
    }
  };
  
  
  function cachingDecorator(func) {
    let cache = new Map();
    return function(x) {
      if (cache.has(x)) {
        return cache.get(x);
      }
      let result = func(x); 
      cache.set(x, result);
      return result;
    };
  }
  
  alert( worker.slow(1) ); 
  
  worker.slow = cachingDecorator(worker.slow); 
  
  alert( worker.slow(2) ); 