

function TimeConvert(num) { 
  var hour= Math.floor(num/60);
  var min = num%60;
  var solution = (hour + ":"+ min) ;
  
  
  return solution;

}
   
// keep this function call here 
console.log(TimeConvert(readline()));