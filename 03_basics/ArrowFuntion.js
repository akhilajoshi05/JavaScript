// this keyword refer to  current context

const user = {
    username : "joshi87",
    price: 2342,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to JS`);
        console.log("inside scope : ", this);        // it refers to current context an dcurrent varibales
    }
}
user.welcomeMessage()
user.username="sam"
user.welcomeMessage()


console.log("ouside scope this:", this);       // here it is empty 
/**
 * as we are working in node environment 
 * there is no global variables , thus this keyword is empty in the above contaxt
 * 
 * in browser we have window as default global object where as in node there no default global object
 */

function one() {
    console.log("this inside a function scope: ",this);       // this inside funtion have default global object
}
one()
function Two() {
    const userName = "aaj"
    console.log(this.userName);    // cannnot access variable using this in funtion , it works in objects
}
Two()


// arrow funtion 

const code = () => {
    const username = "asd"
    console.log(this);  
    console.log(this.username); 
}
code()
/**
 * Arrow funtion syntax
 * 
 * () => {} 
 * 
 * const user = () => {} 
 * 
 * const sum = (num1, num2) => {
 *      return num1 + num2 
 * }
 */

//basic arrow funtion or explict return, where we are using return explictly
const sum = (num1, num2) => {        // inside {} return should be used
    return num1 + num2
}
sum(2, 5)
console.log(sum(6,4));

// implesite return funtion 
const Add = (num1, num2) => num1 + num2
Add(2, 5)
console.log(Add(5,9));

// ( ) is used no need to write return 
const AddSum = (num1, num2) => (num1 + num2)       // returning numbers
AddSum(2, 5)
console.log(AddSum(2,9));
 
// returning objects
const returningObject = (num1, num2) => ({userName:"hjfdj"})
returningObject(2, 5)
console.log(returningObject(5,9));

//writing functions inside loop
const array = [2,3,4,5,6]

array.forEach(function name(params) {
    
})

array.forEach(function () {})

array.forEach( () => {} )
// array.forEach( () => () )