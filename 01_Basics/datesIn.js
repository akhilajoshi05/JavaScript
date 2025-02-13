// Dates in JavaScript
let myDate = new Date()
console.log(myDate);
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(myDate.toString());
console.log(typeof myDate);


let createDate = new Date(2025, 0, 12)
console.log(createDate);
console.log(createDate.toDateString());

let createDate1 = new Date(2025, 0, 12, 5, 3)
console.log(createDate1);
console.log(createDate1.toDateString());
console.log(createDate1.toLocaleString());

let createDate2 = new Date("2025-02-12")
console.log(createDate2);
console.log(createDate2.toLocaleString());

let createDate3 = new Date("12-02-2025")
console.log(createDate3);
console.log(createDate3.toLocaleString());


//for data comaprision ex: for booking the dates for stay 
let timeStamp = Date.now()
console.log(timeStamp);
console.log(createDate3.getTime());

//get in seconds
console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getTime());
console.log(newDate.getMonth());
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
console.log(newDate.getFullYear());

//String interpolation
`${newDate.getDay()} and the time`
console.log(`${newDate.getDay()} and the time`);

// enter ctrl+space to see properties inside default
newDate.toLocaleString('default',{
    weekday: "long",
    // timeZone: ''
})



