function QuestionsMarks(str) { 
	var ans=false;
	for(var i=0;i<str.length;i++){
		for(var j=i+1;j<str.length;j++){
			if(Number(str[i])+Number(str[j])===10){
				ans=true;
				if(str.slice(i,j).split('?').length-1<3){
					return false;
				}
			}
		}
	}
	return ans;
}


console.log(QuestionsMarks(readline()));