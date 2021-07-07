//This Code covers the topic no 6.8 from javascript.info
let timerId = setTimeout(function tick() {
    alert('tick');
    timerId = setTimeout(tick, 2000); 
  }, 2000);