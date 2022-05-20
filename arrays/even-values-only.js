let randomVals = []
randomVals.length = 10
for(let i=0;i<10;i++){
  randomVals[i] = Math.floor(Math.random() * 100)
}
console.log(`\n\nThe array : ${randomVals}`);
let evenVals = randomVals.filter((current) =>{
  return current % 2 === 0
})
console.log(`\n\nHere are the even values from the array : \n${evenVals}`);

let evenValsAgain = randomVals.filter(current => current % 2 === 0)
console.log(`\n\n Even values again written with less code: \n ${evenValsAgain}`);


//nested array version
let randomNested = [[]];
for (let i = 0; i < randomVals.length; i++) {
  randomNested[0][i] = randomVals[i];
}
console.log(`Nested Array: ${randomNested}`);
let evenNested = randomNested[0].filter(current => current % 2 === 0)
console.log(`Even nums from nested array ${evenNested}`);
