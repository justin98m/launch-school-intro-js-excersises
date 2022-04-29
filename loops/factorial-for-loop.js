//write a factorial function using a for loop
function factorial(num){
  let product = 1
  for (let i = 1; i <= num; i++) {
    product *= i
  }
    return product
}
function printResult(num){
  console.log(`Factorial of ${num} is ${factorial(num)}`);
}
printResult(2)
printResult(14)
printResult(87)
printResult(99)
