//write a program that starts with someone's age and tells them the age 10,20,30
//and 40 years from now
rlSync = require("readline-sync")
let age = Number(rlSync.question("How old are ya? \n"))

console.log(`Your age : ${age}`);

console.log(`In 10 years you'll be ${age+10}`);
console.log(`In 20 years you'll be ${age + 20}`);
console.log(`In 30 years you'll be ${age + 30}`);
console.log(`In 40 years you'll be ${age + 40}`);
