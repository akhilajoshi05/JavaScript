// 1. variables in js 

const accountId= 123456
let accountGmail="abc@gmail.com"
var accountPassword ="2121A"
accountCity= "hyd"

let accountState;                    // declared but not assigned value , thus it is undefined
// accountId =2      // not allowed in const

accountGmail="asdfghj@sdf.com"
accountPassword="435253"
accountCity="bng"
console.log(accountId);
console.log([accountGmail, accountPassword,accountCity,accountState]);
console.table([accountGmail, accountPassword, accountCity, accountState]);

/*
prefer not use var
because of issue in block scope and functional scope
*/
