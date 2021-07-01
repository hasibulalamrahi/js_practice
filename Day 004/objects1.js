let user = {
    name: "John",
    age: 30 ,
    proffession: "Engineer",
    height: "5.10"
  };
  
  let key = prompt("What do you want to know about the user?", '');
  
  // access by variable
  alert( user[key] ); // John (if enter "name")