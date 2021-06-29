function showMessage(text = "Hasib") {
    // ...
    
    if (text === undefined) { // if the parameter is missing
      text = 'empty message';
    }
  
    alert(text);
  }
  
  showMessage(); // empty message