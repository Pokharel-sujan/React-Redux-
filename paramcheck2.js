function CheckNums(num1,num2) { 

    if ( num2> num1){
      return String(true); 
      
    }else if(num2=== num1){
      return String(-1);
      
    }else{
      return String(false)
    }
    
      
    
    }
       
    console.log(CheckNums(readline()));