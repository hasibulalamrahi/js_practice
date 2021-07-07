//This Code covers the topic no 6.8 from javascript.info
let timerId = setInterval(() => alert('tick'), 2000);

setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);