function AlphabetSoup(str) { 
  
    A = 'sujan is my name '
  
    var newString= str.split(' ')


     

    
    // where there is space, spread them into list of Arrays
    //  newString = ['sujan' 'is' 'my' 'name']
    // newstring[0]
    
    // forEach always takes an array and it passes arrayitems into it.
   
   
    var sorting = [ ];
    var toIndividualArray = newString.forEach(function (items){
         sorting.push((items.split('').sort().join('')))
         
        
    })
    
    
    
    return sorting.join(' ')
    
  
  }
     
  // keep this function call here 
  console.log(AlphabetSoup(readline()));