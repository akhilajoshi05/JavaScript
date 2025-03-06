// 5. operations in JS

let value = 3
let negValue = -value
console.log("value:", value); //value: 3
console.log("negValue:", negValue); //negValue: -3

console.log("sum:",2+2); //sum:4
console.log("sub:",2-2); //sub:0
console.log("mul:",2*2); //mul:4
console.log("div:",2/2); //div:1
console.log("mod:",2%2); //mod:
console.log("power of:",2**2); //power of:4

let str1 = "helloo"
let str2 = " JS"
let str3 = str1+str2;
console.log("str3:",str3); //str3: helloo JS

console.log("1" + 2); //12
console.log(1 + "3"); //13
console.log("value2:",1 + 2 + "3"); //value2: 33
console.log("value3:",("1" + 2 + 3)); //value3: 123

console.log("expression:", 3 + 5 - 8 * 2 );  /* dont write complex expression like this
 instead use paranthesis to avoid confusions */
console.log("exp:", (2+3)*(6/2)-(7));

console.log("True:", true); //True: true
console.log("True1:", +true);  // converts to binary 1  
// console.log("True1:", true+);  // error

console.log("True2:", +"");  // converts to binary 0

let num1 , num2, num3;
num1 = num2 = num3 = 5 + 2    // avoid these kind of assignment

let gameCounter1 = 100;
// gameCounter++;
++gameCounter1;    
console.log("gameCounter1:",gameCounter1);  //gameCounter1: 101

let gameCounter2= 100;
gameCounter2++;
console.log("gameCounter2:",gameCounter2); //gameCounter2:101

/** operators reference for prefix and postfix
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
 */





