/*use arithmetic operators to determine the individual digits of a
4-digit number */
var num = Math.floor(Math.random() * (9999 - 1000) + 1000)
console.log(`The number is : ${num}`);

var thousands, hundress,tens,ones
ones = num % 10
tens = Math.floor(num/10) % 10
hundreds = Math.floor(num/100) % 10
thousands = Math.floor(num/1000) % 10
console.log(`ones Place: ${ones}`);
console.log(`Tens Place: ${tens}`);
console.log(`Hundreds Place: ${hundreds}`);
console.log(`Thousands Place: ${thousands}`);
