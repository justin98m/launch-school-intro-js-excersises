let myArray = [1,2,3,4,5,6,7,8,9];
let result = myArray.map((current) =>{
  if(current % 2 === 0){
    return "even";
  }
  return "odd";
})

console.log(result);
