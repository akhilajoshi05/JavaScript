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