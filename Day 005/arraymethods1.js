// covers the topic number 5.5 of the documentation javascript.info
//using the method delete to delete an element of the array in a certain index 

let arr = ["I", "go", "home"];

delete arr[1];  // will delete the element at the 1st index which is "go" bu will keep its position blank so it will show that the method delete does not replace the deleted portion of the array

alert( arr[1] );


alert( arr.length ); 