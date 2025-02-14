// arrays

//array declaration 
const array = [0,1,2,3,4,5]    // 0, 1, 2, 3.... are elements

// accessing array values
console.log(array[3]);

const names = ["anika", "nishu"]
console.log(names[1]);


// //array declaration 2nd type
const arr2 = new Array(1, 2, 3, 4, 5)
console.log(arr2[1]);


// array methods
array.push(6)
array.push(7)
console.log(array);

array.pop()
console.log(array)

array.unshift(0)
console.log(array)

array.unshift(9)
console.log(array)

array.shift()
console.log(array)

console.log(array.includes(9))
console.log(array.indexOf(9))
console.log(array.indexOf(3))


const newarr = array.join()
console.log(array);
console.log(newarr);
console.log(typeof newarr);

//slice or splice
console.log("A", array);
const arr3 = array.slice(1, 3);
console.log(arr3);
console.log("B",array);

const arr4 = array.splice(1, 3);
console.log("C",array);
console.log(arr4);




