// if 

/**
 * syntax of if 
 *
if (condition) {
    
}
 */

/**
 * <=
 * >=
 * ==
 * !=
 * ===   it checks the type 
 */

if (true) {
    console.log("true");   
}

if (false) {
    console.log("false");   
}

if (2 == 2) {
    console.log("true: 2 == 2");  
}
if (2 === 2) {
    console.log("strict equal true: 2 === 2");  
}

// !== negative checking
if (2 !== 2) {
    console.log("strict equal true: 2 !== 2");  
}
if (3 !== 2) {
    console.log("strict equal true: 3 !== 2");  
}

if (2 == "2") {
    console.log('true: 2 == "2"'); 
}
//strict equal
if (2 === "2") {
    console.log('true: 2 === "2"'); 
}
if ( 3 != 2 ) {
    console.log('true: 3 != 2'); 
}

if ( 3 >= 2 ) {
    console.log('true: 3 >= 2'); 
}

if ( 3 <= 2 ) {
    console.log('true: 3 <= 2'); 
}

// const isUserLoggedIn = true;
const temperature = 40

if (temperature < 50) {
    console.log("temp less than 50"); 
}
console.log(`${temperature} temp is more than 50`);


if (temperature < 60) {
    console.log("temp less than 60"); 
}else{
    console.log(`${temperature} temp is more than 60`);
}
console.log("after 'if' condition, console log is written then it will execute always");


if (temperature === 60) {
    console.log("temp less than 60"); 
}else{
    console.log(`${temperature} temp is more than 60`);
}

const score = 200;
 if (score > 100) {
    let power = 'fly'
    console.log(`user power ${power}`);   
 }

 // short hand notation 
 const balance = 1000;
 if (balance > 500) console.log("test");
//  if (balance > 500) console.log("test"), console.log("test1");             // it is not a good practice
 
// nested condition 
if (balance < 500) {
    console.log(`less than 500`);   
} else if (balance < 750) {
    console.log(`less than 750`);   
} else if (balance < 900) {
    console.log(`less than 900`);   
} else {
    console.log(`less than 1200`); 
}

const isUserLoggedIn = true ;
const debitCard = true;
const isUserLoggedInFromGoogle = false;
const isUserLoggedInFromEmail = true;


if (isUserLoggedIn && debitCard) {
    console.log(`allow user to buy course`);  
}

if (isUserLoggedInFromGoogle || isUserLoggedInFromEmail) {
    console.log(`user logged in`);  
}