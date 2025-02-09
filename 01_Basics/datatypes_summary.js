/**   primitive and non-primitive
 * primitive -> String, Number, boolean, null, undefined, Symbol, BigInt
 */

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
console.log("NULL Type:",typeof outsideTemp);

let userEmail;

const id = Symbol('123')
const pid = Symbol('123')
console.log(id === pid);

const bigNumber = 4235456577878979099078765n
console.log(bigNumber);
console.log("bigintType:",typeof bigNumber);


 /* Non- Primitive( reference type)-> Array , objects, Functions
 * 
 * Is JS is Dynamically typed language or statically typed language ?
 */

const heros = ["srk", "nani", "VD"];
console.log("array:",typeof heros);


let obj = {
    names: " AJ",
    age:22,
}

const newFunction = function(){
    console.log("helloo function");
    
}

console.log("function:", newFunction);
console.log("functionType:",typeof newFunction);


// assignment check typeOf of all datatypes 

/**  Types of Memory in JS
 *  Stack(primitive) and Heap(NON-Primitive)
 *  for stack copy will be received , for heap reference will come
 */

let gitname = "ajajk";
let anotherName= gitname;
console.log(anotherName);
console.log(gitname);

anotherName="code"
console.log(anotherName);


// it takes reference 
let user = {
    email:"user@gamil.com",
    upi:"user@ybl"
}

let userTwo = user;
userTwo.email= "abc@gamil.com"
console.log(user.email);
console.log(userTwo.email);
