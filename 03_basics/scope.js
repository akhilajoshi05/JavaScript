// global scope
let a= 187
const b= 233
var c= 32908   
let e =20       // these can be accessed inside a bolck scope 
console.log("befour block scope c:", c);

//scope {}

//block scope
if (true) {
    console.log("e:",e);
    
    let a= 12 //these can not be acccessed outside the scope
    console.log("inner scope a:", a);
    let a1= 12
    const b= 23
    console.log("inner scope b:", b);
    const b1= 23
    var c= 32 
    console.log("inner scope c:", c);
    function addNum(){
        // scope inside a scope : nested scope
    }
}

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

console.log("a:",a);
// console.log(a1);
console.log("b:",b);
// console.log(b1);
console.log("after block scope c:",c);


// scope is different in windows and in node environment importent for interview


//nested scope

function one() {
    const name="aj"
    function two() {
        const course ="javascript"
        console.log(name);
    }
    // console.log(course);       // cannot be accessed corse outside the scope

    two()    //function execution if two() is not called after witting a funtion then it will not be executed   
}
one()


if (true) {
    const userName = "joshi09 "
    if (userName === "joshi09") {         // does not comapre due to extra space is not there
        const pid = 23
        console.log(userName + pid); 
    }
    console.log("error: username is mismatched");
    
    // console.log(pid);  // error cannot be accessed outside the scope
}

if (true) {
    const userNameEmp = "joshi09 "
    if (userNameEmp === "joshi09" || userNameEmp === "joshi09 ") {
        const pid = 23
        console.log(userNameEmp + pid); 
    }
    // console.log(pid);  // error cannot be accessed outside the scope
}
// console.log(userName); // error cannot be accessed outside the scope

// ++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++

function addOne(num) {
    return num + 1
}
addOne(5)


// function is also be written as expression as below 
const addTwo = function(num) {
    return num + 2
}
addTwo(5)