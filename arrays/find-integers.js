//takes array as paremter
//returns integers in that array

let howManyFences = [
  1,
  'squiurel',
   2,
   'not a fence',
   3,
   4,
   5,
   6,
   'wall',
   'basket',
   -1,
   20,
   'total fences',
   '12'
 ];

 let thisManyFence = howManyFences.filter((fenceAmount) => {
   if (Number.isInteger(fenceAmount)){
     return true;
   }
   return false;
 });
 console.log(`This many Fence:  ${thisManyFence}`);
