let user = {
    name: "John",
    age: 30,
  
    sayHi() {
      // "this" is the "current object"
      alert(this.name);
      alert(this.age);

    }
  
  };
  
  user.sayHi(); // John