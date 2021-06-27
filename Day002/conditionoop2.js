"use strict";
let cg = prompt('CGPA?','');

let message = (cg < 3.00) ? 'Hi, backbenceher,you are the backbone of a classroom!' :
  (cg< 3.4) ? 'Hello!' :
  (cg>3.6) ? 'You are a KELTU!' :
  'What an unusual age!';

alert( message );