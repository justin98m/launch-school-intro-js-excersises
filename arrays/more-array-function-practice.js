let me = [[2,3,4],[5,6,7]];
console.log(me[1].includes(7));

//slicing
//slice create a copy and doesnt mutate the array unlike splice
//given bounds from start pos to end pos not including the end pos
let colors = ['red','green','blue','orange','purple','yellow'];
let rgb = colors.slice(0,3);
console.log(colors,rgb);
let colorsCopy = colors.slice();
console.log("Copy : ",colorsCopy);
//splice has a start position, second number indicates how many indecies to delete
//return deleted subarray and mutates original
 rgb = colors.splice(0,3)
console.log(`colors after splice ${colors} \n rgb: ${rgb} `);
let bgr = rgb.reverse()
console.log("Reversge RGB: ", bgr );
