function receivesAFunction (spy) {
    console.log(spy());
  }
 
  
  function returnsANamedFunction() {
  return function name(){
  }
}
    
function returnsAnAnonymousFunction() {
    return function (name) {
         }
  }