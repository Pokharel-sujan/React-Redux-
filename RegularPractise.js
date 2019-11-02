function LongestWord(sen) { 

    var  sam = sen.match(/[a-z]+/gi); // Regular expr a- z 
    var sorted = sam.sort(function(a, b) {
      return b.length - a.length;
    });
    console.log(sorted[0]) ; 
           
  }
     
  // keep this function call here 
  LongestWord('Coding is fun');


