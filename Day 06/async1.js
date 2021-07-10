console.log("Here we go ");

const processOrder =(customer) => {
    console.log("Proocessing the order for the customer 1 ");
    var currentTime = new Date().getTime();
    console.log(currentTime);
    while(currentTime +3000 >= new Date().getTime());
    console.log('Order Processed for the Customer 1 ');
};



console.log("recieve the order for customer 1");
 processOrder();
 console.log("Completed order for the customer 1");