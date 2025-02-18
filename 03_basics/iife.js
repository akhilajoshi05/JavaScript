// Immediatly invoked function expression ( IIFE )

// //normal basic function
function code() {
    console.log(`DB CONNECTED`);  
}
code();

// iife is used to avoid pollution from global scope
//iife syntax to call function 
// it is a named iife
(function codes(){
    console.log(`DB CONNECTED`);  
})();   

// while using iife use ; to end the function 
// () () , here 1st () is function defination and 2nd () is function execution

//using arrow function, unnamed iife without param
( () => {
    console.log(`DB Connection`); 
})();

//unnamed iffe with param
( (name) => {
    console.log(`DB Connected to  ${name}`); 
})('MySQL');

