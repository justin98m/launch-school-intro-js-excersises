//make an array from the keys of the object below
//then convert the keys to uppercase w/o mutating the object

let myObj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7
};
let lowerCase = Object.keys(myObj);
let upperCase = lowerCase.map((current) => {
  return current.toUpperCase();
});
console.log(`Object: ${myObj} \nUpper Case Keys: ${upperCase}`);
