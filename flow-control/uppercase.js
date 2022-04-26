rlSync = require('readline-sync')
let val = rlSync.question("enter a word to capitalize(if greater than 10 chars):")
function mayUpperCase(val){
  if(val.length > 10){
    return val.toUpperCase()
  }
  return val
}
console.log(`Your Word: ${mayUpperCase(val)} `)
