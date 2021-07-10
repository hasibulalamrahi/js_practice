const takeOrder = (customer ,callback) => {
    console.log('Take Order for ${customer}');
    callback(customer);
};

const processOrder =(customer,callback) => {
    console.log('Proocessing the order for the ${customer} ' );
    
    setTimeout(()=>{
        console.log("Cooking Completed");
        console.log('Order Processed for the ${customer} ');
        callback(customer);
    },3000);
  
};



const completeOrder = (customer,callback) => {
    console.log('Completed Order for the customer ${customer}');
    callback(customer);
};
const deliverOrder = (customer) =>{
    console.log('Order Delivered / Served to the ${customer}');
};

takeOrder("customer 1",(customer)=>{
    processOrder(customer,(customer)=>{
        completeOrder(customer,(customer)=>{
            deliverOrder(customer);
        });
       
    });
});