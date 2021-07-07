//class fields

class Button {
    constructor(value,dimensions) {
      this.value = value;
      this.dimensions =dimensions;
    }
  
    // click() {
    //   alert(this.value);
    // }
  }
  
  let button = new Button("hello","square");
  
//   setTimeout(button.click, 1000); // undefined
console.log(button);