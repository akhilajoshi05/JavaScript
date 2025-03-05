const coding = ['java','python','js','c++']

// coding.forEach() // it is a call back function, 

// as foreach is callbackfn , here not need to give funation name
coding.forEach( function (item) {        
    console.log(item);
})

//using arrow function
coding.forEach( (val) => {
    console.log(val);
})

// using function
function printMe(item) {
    console.log(item); 
}

coding.forEach(printMe)

coding.forEach( (item, index, arr)=>{
    console.log(item, index, arr);
})

// objects inside array
const myArrayOfObjects = [
    {
        languageName: 'javascript',
        languageFileName: 'js'
    },
    {
        languageName: 'java',
        languageFileName: 'java'
    },
    {
        languageName: 'python',
        languageFileName: 'py'
    },
]

myArrayOfObjects.forEach( (item) => {
    console.log(item);
    console.log(item.languageName);
    console.log(item.languageFileName);
    
})