// Display ages in a for loop 
rlSync = require("readline-sync")
let age = Number(rlSync.question("How old are ya? \n"))

console.log(`Your age : ${age}`);

console.log(`In 10 years you'll be ${age+10}`);
console.log(`In 20 years you'll be ${age + 20}`);
console.log(`In 30 years you'll be ${age + 30}`);
console.log(`In 40 years you'll be ${age + 40}`);
