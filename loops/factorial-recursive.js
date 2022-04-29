//write a factorial function using a for loop
function factorial(n){
  const BASECASE = 1;
  if(n < BASECASE)return 1;
  return n * factorial(n-1)
}
function printResult(num){
  console.log(`Factorial of ${num} is ${factorial(num)}`);
}
printResult(2)
printResult(17)
printResult(31)
printResult(52)
