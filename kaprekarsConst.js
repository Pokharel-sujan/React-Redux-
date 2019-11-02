function KaprekarsConstant(num) { 
    var count= 0;
    while(num != 6174){
      var numArray = num.toString().split('').sort(); // array 
       
       var ascending = parseInt(numArray.join('')); // string 
       var descending = parseInt(numArray.reverse().join('')); // string
       
       while(descending.toString().length < 4){ 
        descending *= 10;  // it might not be applicable when for descending order
      
      }
      
      num = Math.abs(ascending-descending) // abs for absolute value
      count++;
      
      if (count >999) break; // while loop terminate
      
      }
      return count;
  
  }// keep this function call here 
  KaprekarsConstant(readline());