console.log("Here we go ");

const processOrder =(customer) => {
    console.log("Proocessing the order for the customer 1 ");
    
    setTimeout(()=>{
        console.log("Cooking Completed");
        console.log("Cooking");
    },3000);
    console.log('Order Processed for the Customer 1 ');
};



console.log("recieve the order for customer 1");
 processOrder();
 console.log("Completed order for the customer 1");