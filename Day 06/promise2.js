//Chaining Multiple promise and chaining them one after another
const hasMeeting = true;
const meeting = new Promise((resolve,reject)=>{
    if(!hasMeeting){
        const meetingDetails ={
            name: 'Technical Meeting',
            location:'Google Meet',
            time: '10:00 PM',
        };
        resolve(meetingDetails);
    }
    else{
        reject(new Error('meeting already scheduled !'));
    }
    


});

const addTocalender = (meetingDetails) => {
    return new Promise((resolve,reject) =>{
        const calender =  `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
        resolve(calender);
    });
};

meeting 
    .then(addTocalender)
    .then((res) =>{
        //resolved data
        console.log(JSON.stringify(res));
    })
    .catch((err) =>{
        //rejected data
        console.log(err.message);
    });
    console.log("hello");