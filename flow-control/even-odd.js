rlSync = require('readline-sync')
function evenOrOdd(num){
  if(!isNaN(num))
    return num%2 === 0 ? console.log('even'):console.log('odd')
  return console.log("Not a number")
}

let num = Number(rlSync.question("Give me a number: "))

evenOrOdd(num)
