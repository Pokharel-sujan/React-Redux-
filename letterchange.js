function LetterChanges(str) { 

    var change = str.replace(/[a-zA-Z]/gi, function(char){
      return (char==='Z'||char==='z') ?'a': String.fromCharCode(char.charCodeAt())
    })
    
    var capit = change.replace(/[a|e|i|o|u]+/gi, function(char){
      return (char.toUpperCase());
    })
    
    console.log(capit)
            
   }
      
   LetterChanges("fun times!");