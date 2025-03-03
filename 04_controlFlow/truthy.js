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