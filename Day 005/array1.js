//Checking the types of values array can store 
let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];


alert( arr[1].name ); // John


arr[3](); // hello