console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);


console.log("2">1);      //
console.log("02">1);

// avoild the below type of coversion
console.log(null>0);
console.log(null==0);
console.log(null>=0);
console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined > 0);

/**
 * in JS comaprision and equality check are different
 * == works differently and === workes differently
 * 
 * 
 */

// strict check(===) it not only check value but also check the datatype

console.log("2"=== 2);
