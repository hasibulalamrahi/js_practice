//This Code covers the topic no 9.2 from javascript.info

function f(phrase) {
    return class {
      sayHi() { alert(phrase); }
    };
  }
  
  class User extends f("Hello") {}
  
  new User().sayHi(); // Hello