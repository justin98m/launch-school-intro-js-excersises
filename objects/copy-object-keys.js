//Make a function that takes a object and the option for an array of keys
//It should copy the keys in the array from the object (key and value)
//if no array is given copy the whole object

function copyObj(obj,arr=false){
  let returnObj = {};
  if(!arr){
    for(let key in obj){
      returnObj[key] = obj[key];
    }
    return JSON.stringify(returnObj,null,2);
  }
  arr.forEach((current) =>{
    if(obj.hasOwnProperty(current)){
      returnObj[current] = obj[current];
    }
  })
  return JSON.stringify(returnObj,null,2);
}
let myObj = {
  a: 'aaa',
  b: 'bbb',
  c: 'ccc',
  d: 'ddd',
  e: 'eee'
}
let allKeys = ['a','b','c','d','e'];
let someKeys = ['a','b','d'];
let tooManyKeys = ['a','b','c','d','e','f','g','h','i'];
console.log(`Original Object: ${myObj}`);
console.log(`allKeys: ${copyObj(myObj,allKeys)}`);
console.log(`someKeys ${copyObj(myObj,someKeys)}`);
console.log(`tooManyKeys${copyObj(myObj,tooManyKeys)}`);
console.log(`No array: ${copyObj(myObj)}`);
