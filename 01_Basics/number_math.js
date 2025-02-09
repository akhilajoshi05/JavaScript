// number and maths

const score =100
console.log(score);


const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);

console.log(balance.toFixed(2));
console.log(balance.toFixed(1));


const anotherNumber = 24.5363
console.log(anotherNumber.toPrecision(3));

const anotherNumber1 = 243.1363
console.log(anotherNumber1.toPrecision(3));

const anotherNumber3 = 2143.1363
console.log(anotherNumber3.toPrecision(4));

const anotherNumber2 = 2431.1363
console.log(anotherNumber2.toPrecision(3)); // converts to exponential if precision number increases


const num = 10000000
console.log(num.toLocaleString());
console.log(num.toLocaleString('en-IN'));

// ++++++++++++++++++ maths ++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs());
console.log(Math.abs(-6));
console.log(Math.round(4.2));
console.log(Math.round(4.6));
console.log(Math.ceil(4.3));
console.log(Math.ceil(4.6));
console.log(Math.floor(3.2));
console.log(Math.floor(3.7));
console.log(Math.max(4,2,6,1,9));
console.log(Math.min(5,3,1,7));
console.log(Math.random());         //gives values between 0 and 1
console.log(Math.random()*10);
console.log(Math.random()*10+1);   // add 1 to avoid number 0
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);


const min = 10
const max = 20
console.log(Math.random()* (max-min +1));
console.log(Math.floor(Math.random() * (max - min +1)));
console.log(Math.floor(Math.random() * (max - min +1))+ min);


