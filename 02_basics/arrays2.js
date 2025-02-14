const empNameOld = ["neha", "nisha"]
const empNameNew = ["riya", "ritu"]

// empNameOld.push(empNameNew)
// console.log(empNameOld);         // it prints array inside array. output: [ 'neha', 'nisha', [ 'riya', 'ritu' ] ]

// console.log(empNameOld[2][1]);

const emp= empNameOld.concat(empNameNew)
console.log(emp);


// spread operator
const new_names = [...empNameOld, ...empNameNew]
console.log(new_names);

const array = [ 1, 2, 3, [4, 5,], 6, 7, [8, 7, [6, 2]]]
const anotherArray = array.flat(Infinity)
console.log(array)
console.log(anotherArray);


// for data scraping
console.log(Array.isArray("joshi"));
console.log(Array.from("joshi"));
console.log(Array.from({name: "akhila"}));    // gives empty array 

let score = 100
let score1 = 200
let score2 = 300

console.log(Array.of(score, score1, score2));  // returns new array from set of elements

