/**
 * for in loop can used mainly for looping objects rather than arrays
 */

const myobj = {
    'js':'javaScript',
    'cpp':'c++',
    'py':'python',
    'rb':'ruby'
}

for (const key in myobj) {
    console.log(key);
}

for (const key in myobj) {
    console.log(myobj[key]);
}

for (const key in myobj) {
    console.log(`${key} shortcut is for ${myobj[key]}`);
}

// for in using array

const arr = ['aa','bb','cc','dd','ee']
for (const key in arr) {
    console.log(key);                   // key here prints the index values of the array
}

for (const key in arr) {
   console.log(arr[key]);              // arr[key] prints the values of the array 
}

for (const key in arr) {
    console.log(`${key} : ${arr[key]}`);
}


// maps are not itterable in for in loop
const map = new Map()
map.set('In','India')
map.set('US','USA')
map.set('UK','United Kingdom')

for (const key in map) {
    console.log(key);                   // map is not itterable for forin loop
} 