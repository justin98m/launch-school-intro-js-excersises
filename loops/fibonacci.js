function fib(number){
  //fib of 0 and 1 are 0 and 1 respectively
  if(number < 2)return number;
  //the fib should be the previouse two numbers in the sequence added together
  //will keep calling itself until it number is passes as 1 so 1 is returned
  return fib(number-1) + fib(number-2)
}
