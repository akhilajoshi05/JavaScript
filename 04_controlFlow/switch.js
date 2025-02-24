//switch syntax

// here key is the which the user wants to check everytime
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

//switch with number/integers
const month = 3
switch (month) {
    case 1:
        console.log(`january`);
        break;
    case 2:
        console.log(`feb`);
        break;
    case 3:
        console.log(`march`);
        break;             // if after matching the condition breaker statement is not used
        //  then will execute the code which is written after given condition is executed except default
        // to avoid code execution after condition is matched use break
//break will break the control flow
    case 4:
        console.log(`april`);
        break; 
    case 5:
        console.log(`may`);
        break;

    default:
        console.log(`default case match`);
        break;
}

//switch with strings
const Month = "feb"
switch (Month) {
    case "jan":
        console.log("Jan");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;

    default:
        console.log("default case");
        break;
}