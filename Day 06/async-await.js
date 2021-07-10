async function friendlyFunction(){
    return `hello`;
}
console.log(friendlyFunction());


//Except the async keyword we could have done the following thing

function friendlyFunction(){
    return Promise.resolve(`hello`);     //using the keyword async and using this function will generate the samme outputfor us
}
console.log(friendlyFunction());