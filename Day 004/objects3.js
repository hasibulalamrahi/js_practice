function multiply(a,b){
    return a*b;
}
function square(n){
    return multiply(n,n);
}
function printsquare(n){
    var squared = square(n);
    console.log(squared);

}

printsquare(4);