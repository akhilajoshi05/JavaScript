// function declaration
function myName(){
    console.log("A");
    console.log("J");  
}

//function reference
myName

//function execution
myName()

//function with parameters
function addTwoNums(num1, num2){
    console.log(num1 + num2); 
}
//function calling or executing
addTwoNums() // NAN
addTwoNums(2,4)     // numbers or characters passed inside function calling are called as arguments
addTwoNums(2,"a") 

const result = addTwoNums(4,5)
console.log(result);



function addTwoNums1(num1, num2){
    let sum = num1+num2
    return sum
}

const sum = addTwoNums1(6,5)
console.log(sum);

function addTwoNums2(num1, num2){
    let sum1 = num1+num2
    return sum1
    console.log("asdfk");     // after return next line will not be executed    
}

const sum1 = addTwoNums2(9,5)
console.log(sum1);

function addTwoNums3(num1, num2){
    let sum3 = num1+num2
    console.log("dfghj");           //  if console log is befour return then it executes, if it is after return then it will not executes
    
    return sum3
}

const sum3 = addTwoNums3(9,8)
console.log(sum3);

function addTwoNums4(num1, num2){
    return num1+num2
}

const sum4 = addTwoNums4(9,6)
console.log(sum4);


function loginUserMessage(userName){
    return`${userName} just logged in `
}

loginUserMessage("gdhj")
console.log(loginUserMessage("riya"));
console.log(loginUserMessage(""));
console.log(loginUserMessage());


function loginUserMessageWithIf(userName){
    if(userName === undefined){
        console.log("please enter a username");   
    }
    return`${userName} just logged in `
}
console.log(loginUserMessageWithIf());

function loginUserMessageWithIfReturn(userName){
    if(userName === undefined){
        console.log("please enter a username"); 
        return  
    }
    return`${userName} just logged in `
}
console.log(loginUserMessageWithIfReturn());

function loginUserMessageWithIfReturn2(userName){
    // if(userName === undefined){               // in if condition can also be written as !username 
    //     console.log("please enter a username"); 
    //     return  
    // }

    if(!userName){
        console.log("enter user name");
        return
    }
    return`${userName} just logged in `
}
console.log(loginUserMessageWithIfReturn2());

function loginUserMessageWithIfReturnDefaultVlaue(userName="sam"){  
    if(!userName){
        console.log("enter user name");   // in dafault value is passed in parameter then this block of will never be executed as it is false block
        return
    }
    return`${userName} just logged in `
}
console.log(loginUserMessageWithIfReturnDefaultVlaue());
console.log(loginUserMessageWithIfReturnDefaultVlaue("john"));

function calculateCartPrice(num){
    return num
}
calculateCartPrice(3)            // executeing 
console.log(calculateCartPrice(5));
console.log(calculateCartPrice(500, 488, 234));

// rest operator: passing multiple vlaes in function


function calculateCartPriceWithRestOp(...num){
    return num
}
console.log(calculateCartPriceWithRestOp(422,545,345));

function calculateCartPriceWithRestOpAndValues(val1, val2, ...num){           
    return num
}
console.log(calculateCartPriceWithRestOpAndValues(422,545,345,7675,435));  // 1st and 2nd values are store in val1 and val2 and remaing are stored in array 


