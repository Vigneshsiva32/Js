// Variables - To declare a data and also some memory allocation
// Types - Var, let, const

//Var - you can redeclare and reassign
var val1="siva";
var val2=20; 
console.log(val1) // siva

//let - you can't redeclare but you can reassign 
let num=10;
let num=20;
console.log(num) // Syntaxerror "num" has already been declared

num=20;
console.log(num) // 20


//const - you can't redeclare and reassign 
const username="siva";
const username="vignesh";
console.log(username) // Syntaxerror "username" has already been declared

const username="siva";
console.log(username) // siva