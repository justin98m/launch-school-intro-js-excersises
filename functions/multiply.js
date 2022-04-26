rlSync = require("readline-sync")
function multiply(num1,num2){
  return num1*num2;
}
let num2 = Number(rlSync.question("Give me a number: "));
let num1 = Number(rlSync.question("Give me another number: "));
console.log(`${num1} * ${num2} = ${multiply(num1,num2)}`);
