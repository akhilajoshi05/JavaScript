/**
 * objects can be declared in two ways 
 * 1. literals (these are not singleton)
 * 2. constructurs (singleton object)
 */

/**
 * constructure method 
 * Onject.create
 */

//symbol declaration
const mySymbol = Symbol("key1")

// object literals
const user ={} // empty object
const user1={
    name:"aj", 
    "full name":"joshi",
    //add symbol in object and show the output
    // mySymbol:"mykey1",
    [mySymbol]:"mykey1",
    age: 14,
    location:"hyd",
    email:"aj@gmail.com",
    isLoggedIn:false,
    lastLoggedInDays:["monday","friday"]
}

//Accessing objects
console.log(user1.email);
// console.log(user1[email]);   // throws error for not ""
console.log(user1["email"]);
// console.log(user1[full name]); //error
console.log(user1["full name"]);
// console.log(user1["mySymbol"]);
// console.log(typeof user1["mySymbol"]);
console.log(user1[mySymbol]);

user1.email= "abc@hmail.com"
// Object.freeze(user1)
user1.email="abc@gmail.com"
console.log(user1);


user1.greatting = function(){
    console.log("hello js users");   
}

user1.greatting2 = function(){
    console.log(`hello js users, ${this.name}`);   
}

console.log(user1.greatting);  //error
console.log(user1.greatting());
console.log(user1.greatting2());

