// for syntax
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];  
// }
// select the variable and Ctrl+D for duplicating 
for (let j = 0; j < 10; j++) {
    const element = j;
    console.log(element);   
}
// console.log(index);

for (let index = 0; index <= 8; index++) {
    const element = index;
    if (element == 5) {
        console.log(" output is 5: true");   
    }
    console.log(element);   
}


// nested loop

for (let i = 0; i <= 10; i++) {
    console.log(`outer loop values: ${i}`);
    for (let j = 0; j < 10; j++) {
        console.log(`Inner loop values: ${j} and inner loop ${i} `);       
    }
}

for (let i = 0; i <= 10; i++) {
    console.log(`outer loop values: ${i}`);
    for (let j = 0; j <= 10; j++) {
        console.log(i + '*' + j + '=' + i*j);      
    }
}


for (let i = 1; i <= 10; i++) {
    console.log(`tables of: ${i}`);
    for (let j = 0; j <= 10; j++) {
        console.log(i + '*' + j + '=' + i*j);      
    }
}


let myArray = ["anshu", "rayan", "ron"]
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);   
}

// if condition is not equal to array.length then undefined will be printed
for (let index = 0; index <= myArray.length; index++) {
    const element = myArray[index];
    console.log(element);   
}

// keywords in loops: break and continue

for (let index = 1; index < 20; index++) {
    if (index == 5) {
        console.log(`detected 5`);
        break                        // after break it stops exectution
    }      
    console.log(`value of index is ${index}`);   
}

for (let index = 1; index < 20; index++) {
    if (index == 5) {
        console.log(`detected 5`);
        continue                        // after continue it does not prints true conditon it, executes loop
    }      
    console.log(`value of index is ${index}`);   
}




