let rlSync = require('readline-sync')
function getName(){
  let fname = rlSync.question("What is your first Name?\n")
  let lname = rlSync.question("What is your Last Name\n")
  return fname + " " + lname
}

console.log(`Guten Morgan ${getName}`);
