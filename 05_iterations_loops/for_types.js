// for of , for in
// these are array specific loops
/*
             i        array/object name
for (const element of object) {        here element is the varibale like i and j which is initilized to store values, and object is the array name in which you already hava data
    
}
*/
const arr = [1, 2, 3, 4, 5, 6]
for (const num of arr) {
    console.log(num);
}

const message = "hello world!"
for (const greet of message) {
    console.log(`each char is ${greet}`);   
}

// maps it has unique values
/* map is a object in js
Map objects are collections of key-value pairs.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
*/

const map = new Map()
map.set('In','India')
map.set('US','USA')
map.set('UK','United Kingdom')

console.log(map.get('In'));
map.set('In','Bharath')
console.log(map.get('In'));
console.log(map.size);
map.delete('UK')
console.log(map.size);
console.log(map);




