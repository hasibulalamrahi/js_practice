//This Codes covers ther 5.9 in the documentation javascript. Topic numbeinfo

let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
  };
  
  let json = JSON.stringify(student);
  
  alert(typeof json); // we've got a string!
  
  alert(json);
  
  