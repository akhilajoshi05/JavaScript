//Strings

// string declaration
const name = "AJ";
const repoCount = 50;
console.log(name + repoCount+ "value");  // not recomemded synatx
console.log(name + repoCount+ " value"); // it is out dated 

// use tactics (``)
// string Interpolation

console.log(` hello my name is ${name} and my repo count is ${repoCount}`);

//sting declaration 2nd way 
const gameName = new String('ajajak')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.at());
console.log(gameName.charAt());
console.log(gameName.charAt(5));
console.log(gameName.charCodeAt());
console.log(gameName.codePointAt());
console.log(gameName.concat());
console.log(gameName.endsWith());
console.log(gameName.includes());
console.log(gameName.includes('k'));
console.log(gameName.indexOf());
console.log(gameName.indexOf('j'));
console.log(gameName.lastIndexOf());
console.log(gameName.localeCompare());
console.log(gameName.match());
console.log(gameName.matchAll());
console.log(gameName.normalize());
console.log(gameName.padEnd());
console.log(gameName.padStart());
console.log(gameName.repeat());
console.log(gameName.replace());
console.log(gameName.replaceAll());
console.log(gameName.search());
console.log(gameName.slice());
console.log(gameName.split());
console.log(gameName.startsWith());
console.log(gameName.substring());
console.log(gameName.toLocaleLowerCase());
console.log(gameName.toLocaleUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());
console.log(gameName.trim());
console.log(gameName.trimEnd());
console.log(gameName.trimStart());
console.log(gameName.toString());
console.log(gameName.valueOf());
// console.log(gameName.String()); // not a function

const newStr = gameName.substring(0, 4)
console.log(newStr);

const anotherStr = gameName.slice(-5, 4)
console.log(anotherStr);

const newStr1 = "   dhjdgshf   "
console.log(newStr1);
console.log(newStr1.trim());

const url = "https://aj.com/a%30j"
console.log(url.replace('%30','-'));

console.log(url.includes('aj'));
console.log(url.includes('vj'));



// reference for js Strings: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

const gameName1 = new String('ajajak-vj-com')
console.log(gameName1.split('-'));
console.log(gameName1.fixed());
console.log(gameName1.fontcolor('blue'));
console.log(gameName1.fontsize(4));









