//This Codes covers the Topic number 5.7 in the documentation javascript.info

// Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

let map = new Map();

map.set('1', 'str1');   
map.set(1, 'num1');     
map.set(true, 'bool1'); 


// Map keeps the type, so these two are different:
alert( map.get(1)   ); // 'num1'
alert( map.get('1') ); // 'str1'

alert( map.size ); // 3