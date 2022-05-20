//compute a sum of squares
let data = [10,10,10,100,.01
]

let sumOfSquares = data.reduce((sum,current) =>{
 return sum += current * current;
},0)
console.log(`The data : ${data}\n The sums of squares :${sumOfSquares} `);
