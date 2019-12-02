let a = "1a2b3c4d5e";

function aCheck(stringCheck){
	let b = stringCheck.length;
	for(let i = 0; i < b; i++){
		if(Number.isInteger(parseInt(stringCheck.charAt(i)))){
		console.log(stringCheck.charAt(i));
		}
	}
	
}

aCheck(a);