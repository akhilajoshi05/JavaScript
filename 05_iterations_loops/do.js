
/* while syntax
while (condition) {
    
}
*/

let index = 0
while (index <=20) {
    console.log(`value of index is ${index}`);  
    index = index+2 
}

let myArray = ['a','b','c']
let arr = 0
while (arr < myArray.length) {
    console.log(`value is ${myArray[arr]}`);
    arr += 1
}

// do while loop
let score = 11
do {
    console.log(`score is ${score}`);
    score++;
} while (score <= 10);

