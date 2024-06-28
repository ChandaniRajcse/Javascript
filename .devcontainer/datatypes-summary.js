//primitive

// 7 types: string, NUmber,Boolean,Null,Undefined,symbol,BigInt

const score = 100
const scorevalue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)


//Reference(non primitive)

//Array,object,Functions
const heros = ["chandani", "Msd" "virat"];
let myobj={
    Name: "Chandani"
    Age: 22
}
const myFunction= function(){
    console.log("Hello JS");
}