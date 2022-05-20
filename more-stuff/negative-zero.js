//Write a function that takes an argument
//return true if the argumet is -0
//returns false if it is anything else

function negativeZero(value){
  if(10/value  === -Infinity){
    return true;
  }
  return false;
}
console.log(negativeZero(5));
console.log(negativeZero('lpp'));
console.log(negativeZero(-0))
console.log(negativeZero(0));
