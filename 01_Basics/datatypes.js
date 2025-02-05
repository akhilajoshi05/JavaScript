/* datatypes in javascript
 strings, integers, boolean
 */

// install prettier extension for code indentation 
"use strict";  //treat all JS code as newer version

// alert(3+3) can not be used in node directly, it can be used in browser not in node js

console.log(3
   +
   3); // code readability should be high
console.log("hiii");


/* refer MDN documentationvfor js
https://tc39.es/ecma262/2023/multipage/
*/

let name="abhg"  //string
let age=12
let isLoggedIn=false
let state =" "
let abc = null

/*
primetive datatypes:

number ==> 2 to power 53
biint
string=>""
boolean =>true/false
null => standalone value (empty value), it is special type
undefined
symbol=> unique 

objects:{}
*/
console.log(typeof age);
console.log(typeof abc)
console.log(typeof undefined);

//convertion type 5-2-25
let score ="33"
console.log(typeof score);
console.log(typeof (score));    // as a method

let EmpName = "aj"
let string1 = Number(EmpName)  ;   
console.log("string1:",string1);

let num = 33
console.log(typeof num);

let numb= "uhedw65"
let valueInNumber = Number(numb)
console.log(typeof valueInNumber);
console.log("alphanumaric:",valueInNumber);

let num1 = null
let valueInNumber1 = Number(num1)
console.log(typeof valueInNumber1);
console.log("null:",valueInNumber1);

let num2 = undefined
let valueInNumber2 = Number(num2)
console.log(typeof valueInNumber2);
console.log("undefined:",valueInNumber2);

let num3 = true
let valueInNumber3 = Number(num3)
console.log(typeof valueInNumber3);
console.log("boolean:",valueInNumber3);


/**
 "33"=> 33
 "33abc"=> NaN
 true => 1; false => 0
 */

 let isLoggedIn1 = 1
 let booleanIsLoggedIn= Boolean(isLoggedIn1)
 console.log("boolean value:",booleanIsLoggedIn);

 let isLoggedIn2 = ""
 let booleanIsLoggedIn2= Boolean(isLoggedIn2)
 console.log("emptyString:",booleanIsLoggedIn2);

 let isLoggedIn3 = "hdiuyiuffy"
 let booleanIsLoggedIn3= Boolean(isLoggedIn3)
 console.log("name using string:",booleanIsLoggedIn3);
 
/**
 * 1=> true; 0 =. false
 * "" => false
 * "ajaja" =>true
 */


let sumNumber = 44
let stringNumber= String(sumNumber);
console.log("stringNumber",stringNumber);
console.log("SN",typeof stringNumber);


