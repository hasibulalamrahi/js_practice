// covers the topic number 5.5 of the documentation javascript.info
//using the method splice to delete an element of the array in a certain index  and replacing it with another object 

let arr = ["I", "study", "Documentation", "of", "javascript"];

arr.splice(1, 1); // this method will delete the indext 1 from 1 to the array and will replace them with the next index element

alert( arr ); 


arr.splice(0, 3, "Let's", "dance"); //will delete the elements in the array from the 0th index to the 3rd index and will add two elements on it namely "lets" and "dance"
alert(arr);