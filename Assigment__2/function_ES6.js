let checkLogin = (email, password, allUsers) =>{
	let isUserFound =false
	let passwordCorrect =false
	for(currentUser in allUsers){
		console.log(currentUser)
		if(allUsers[currentUser]['email']==email){
			if (allUsers[currentUser]['password']==password) {
				isUserFound = true
				passwordCorrect = true
				break
			}
			else{
				isUserFound = true
				passwordCorrect = false
				break
			}
		}
		else{
			isUserFound = false
		}
	}//end of for loop

	if(isUserFound == true && passwordCorrect == true){
		alert('you are logged in')
	}
	else if(isUserFound == true && passwordCorrect == false){
		alert('You have provided incorrect password')
	}
	else{
		alert('No user with this email found')
	}

}//end check login



let bubble_Sort = (...a)=>{
	let swapp;
	let n = a.length-1;
	let x = a;
	console.log(x)
	do{
		swapp = false;
		for(let i=0; i < n; i++)
		{
			if(x[i] < x[i+1]){
				let temp =x[i];
				x[i] = x[i+1];
				x[i+1] = temp;
				swapp =true;
			}
		}
		n--;
	} while(swapp);
	console.log(x)
	return x;
}