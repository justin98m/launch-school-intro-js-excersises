//create a function that takes in a value
//returns true if the value is NaN
//returns false if anything else
function checkNumber(value){
  if(typeof value === 'number'){
    //NaN only number that isnt greater than , less then or equal to 0
    if(!(value >= 0) && !(value <= 0)){
      return true;
    }
  }
  return false;
}

console.log(checkNumber(4));
console.log(checkNumber("looper"));
console.log(checkNumber(NaN));
