"use strict";

let year = prompt('In which year was you Born?', '');

if (year == 1997) {
  alert( 'Well You remembered your Birthdate!' );
} else if(year == 1999){
  alert( 'You got confused with the original and Certificate birthdate' ); // any value except 2015
}
else {
    alert('How can you forget your birthdate?');
}