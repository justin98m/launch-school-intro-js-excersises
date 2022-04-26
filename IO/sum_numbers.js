let rlSync = require('readline-sync');
let num1 = Number(rlSync.question('First Number: '))
let num2 = Number(rlSync.question('Second Number: '))
console.log(`${num1} + ${num2} = ${num1+num2}`);
