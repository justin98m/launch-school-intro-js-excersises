let weGotStrings  = ['four', 'spaghetti','rain','three','tree','bee','drop',]
console.log(`We have these strings today: ${weGotStrings}`);
//determine length of as strings in a array and the odd numbers of those lengths
//use reduce

let lengths = [];
let odds = [];
weGotStrings.reduce((throwAway,current) =>{
  lengths.push(current.length);
  if(current.length % 2 !== 0){
    odds.push(current.length)
  }
},0);
console.log(`The lengths: ${lengths}`);
console.log(`The odd Values: ${odds}`);
