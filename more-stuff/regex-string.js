//write a funcition that searched for a regex pattern in a list of words
let words = [
  'sneakers',
  'reefer',
  'mouth',
  'naked',
  'educate',
  'brother',
  'daddy',
  'beakers',
  'peaker',
]

function matchThese(words,expression){
  let matching = [];
  for(element of words){
    if(expression.test(element)){
      matching.push(element)
    }
  }
  return matching;
}
console.log(`The Original Words ${words}`);
console.log(`Matching Strings for 'er' \n\t${matchThese(words,/er/)}`);
