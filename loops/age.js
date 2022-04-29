// Display ages in a for loop
rlSync = require("readline-sync")
let age = Number(rlSync.question("How old are ya? \n"))

console.log(`Your age : ${age}`);

for (var i = 1; i < 4; i++) {
  console.log(`In ${i*10} years you will be ${i*10+age}`);
}
