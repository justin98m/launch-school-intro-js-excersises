let weGotStrings  = ['four', 'spaghetti','rain','three','tree','bee','drop',]
console.log(`We have these strings today: ${weGotStrings}`);
//determin length of as strings in a array
//map
let weGotLengths = weGotStrings.map((currentString) => {
  return currentString.length;
})
console.log(`We have lengths of: ${weGotLengths}`);

//discard the even value lengths
//filter
let weGotOdd = weGotLengths.filter((currentLength) =>{
  return currentLength % 2 !== 0
})
console.log(`We have these odd numbers: ${weGotOdd}`);
