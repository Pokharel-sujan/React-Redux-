function SimpleSymbols(str) { 
    var req
    
    for (var i= 0; i< str.length; i++){
      
      if ((str[i]).match(/[a-z]/i) !==null) {
        
        if ((str[i-1]!='+') ||( str[i+1]!= '+')){
        return false;
      }
      
    }
    //git stash save "here is the second stash"
    // drop with remnove but pop will bring the latest
    
    //  second git stash to be checked
    }
    return true; 
  }
  
  // Conclusion: The program seems to structured towards NOT... so my checked the  isnot in many cases
     
  // keep this function call here 
  SimpleSymbols(readline());                            
  
  // acceptable Sequence or Not 
  // composed of + and =
  // letter should surrounded by +a+
  
  // Possible Solution
  
  // RegExp
  //[(+A-Z+) || +a-z]
  // array.forEach( function (words){
  //if (word == '+'){
      
  //  }
  
  
    
  //}