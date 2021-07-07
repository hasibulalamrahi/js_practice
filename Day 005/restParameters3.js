////This Code covers the topic no 6.2 from javascript.info


let obj = { a: 1, b: 2, c: 3 };

let objCopy = { ...obj }; 
                          

alert(JSON.stringify(obj) === JSON.stringify(objCopy)); 


alert(obj === objCopy);


obj.d = 4;
alert(JSON.stringify(obj)); 
alert(JSON.stringify(objCopy)); 