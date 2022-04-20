let rlSync = require('readline-sync')
let fname = rlSync.question("What is your first Name?\n")
let lname = rlSync.question("What is your Last Name\n")
console.log(`Guten Morgan ${fname + " " + lname}`);
