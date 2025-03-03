const userEmail = "abc.ai"          

if (userEmail) {
    console.log("got user login");   
}else{
    console.log("dont have user email"); 
}

const userEmail1 = ""           // if this is empty then else block will execute

if (userEmail1) {
    console.log("got user login");   
}else{
    console.log("dont have user email"); 
}
const userEmail11 = "0"           // if this is empty then else block will execute

if (userEmail11) {
    console.log("got user login");   
}else{
    console.log("dont have user email"); 
}
const userEmail2 = []           // if this is empty [] then it is considered as true and if block will execute

if (userEmail2) {
    console.log("got user login");   
}else{
    console.log("dont have user email"); 
}


const userEmail3 = []           // if this is empty [] then it is considered as true and if block will execute

if (userEmail3.length === 0) {
    console.log("array is empty");   
}else{
    console.log("dont have user email"); 
}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
}


/** falsy values are given below 
 * false, 0, -0, bigInt 0n, "", null, undefined, NaN
 * 
 ** truthy values are given below
 * "0", 'false', " ", [], {}, function(){}, 
 */


 /**
  * check below line in browser console
  * false == 0
  * flase == ""
  * 0 == ""
  */



 // Nullish Coalescing Operator (??): null undefined
// if the value if either null or undefined then it will use data written after ??
 let val1;
 val1 = 5 ?? 10
 console.log(val1);
 
 let val2 = null ?? 10
 console.log(val2);

 let var3 = undefined ?? 13
 console.log(var3);

 let val4 = null ?? 10 ?? 15
 console.log(val4);
 
 
 // Terniary operator (short hand for if else)

 // condidtion ? true : false

 const iceTeaPrice = 100
 iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");
 iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
 
 
