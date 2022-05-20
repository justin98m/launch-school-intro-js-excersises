//make a object with object literal notation to behave like an array
let myArray = {
  length: 4,
  0 : 'behave',
  1 : 'like',
  2 : 'an',
  3 : 'array'
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}
