//refactor return foo() ? 'bar' : qux()
function qux(){
  console.log('qux qux qux');
}
function foo(){
  return true;
}

if(foo()){
  return 'bar'
}
else{
  return qux()
}
