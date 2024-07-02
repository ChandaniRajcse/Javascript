const name = "chandani"
const repocount = 30

console.log(`Hello my name is ${name} and my repo count is ${repocount}`)

const gameName = new String ("chandan_iRaj")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('n'));
console.log(gameName.toUpperCase());

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString)

const newStringOne = "  chandani  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https:/chandani.com/chandani%30Raj"
console.log(url.replace('%30', '_'))

console.log(url.includes('Raj'))

console.log(gameName.split('_'))





