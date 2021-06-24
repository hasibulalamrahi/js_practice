// We will be taking input using prompt and wioll be operating various calculation 
var num1 = prompt("Enter the first Number : ");
var num2 = prompt("Enter the Second Number : ");

num1 = parseFloat(num1,10);
num2 = parseFloat(num2,10);


var sum , diff , prod, div;
  sum =  num1+num2;
  prod = num1*num2;
  diff = num1 - num2;
  div = num1/num2;
  console.log("sum is "+sum);
  console.log("difference  is "+diff);
  console.log("product is "+prod);
  console.log("division is "+div);
