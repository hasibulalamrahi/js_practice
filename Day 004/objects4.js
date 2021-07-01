user = {
    sayHi() { // same as "sayHi: function(){...}"
      alert("Hello");
    }
  };
  user.sayHi();

user = {
    sayHi: function() {
      alert("Hello");
    }
  };
  user.sayHi();