let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.qux = 3;

let origKeys = Object.keys(myObj);
console.log(origKeys);

for(let key in myObj){
  if(myObj.hasOwnProperty(key))
    console.log(myObj[key]);
}
