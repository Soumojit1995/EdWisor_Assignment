//start function
let FindInformation_BySeasonEpisode = (show,season_number,episode_number) => { //find information using season and episode number
	let flag =0
	
	

    let episode_length = show[0]._embedded.episodes.length //check the length of episodes

for(let i=0;i<episode_length;i++){  //start loop    

	if (show[0]._embedded.episodes[i].season==season_number && show[0]._embedded.episodes[i].number==episode_number) { //check the season number and episode number are match or not

	     console.log(`Episode Name: ${show[0]._embedded.episodes[i].name}    
	     	\nEpisode Date: ${show[0]._embedded.episodes[i].airdate}
	     	\nEpisode Time: ${show[0]._embedded.episodes[i].airtime}
	     	\nEpisode Time Length: ${show[0]._embedded.episodes[i].runtime}
	     	\nEpisode summary: ${show[0]._embedded.episodes[i].summary}`)                  //Episode Information output in console 
	     flag=1;
	     break
	 
	}
	else{
	flag=0;
	
	}
}  //end the loop

if (flag==0) {
console.log("No episodes found")
}
else{
	console.log("-----------------Episode Found--------------------")

}

}
//end function

//start loop
let FindInformation_ById=(show,id)=>{          //find informatin using episode id
	
	let flag =0
	console.log("-------------------------------------------------------------")
	

    let episode_length = show[0]._embedded.episodes.length    //check the length of episodes
 
 for(let i=0;i<episode_length;i++){  //start loop

	if (show[0]._embedded.episodes[i].id==id) { // check episode id is match or not

	     console.log(`Episode Name: ${show[0]._embedded.episodes[i].name}
	     	\nEpisode Season: ${show[0]._embedded.episodes[i].season}
	     	\nEpisode Number: ${show[0]._embedded.episodes[i].number}
	     	\nEpisode Date: ${show[0]._embedded.episodes[i].airdate}
	     	\nEpisode Time: ${show[0]._embedded.episodes[i].airtime}
	     	\nEpisode Time Length: ${show[0]._embedded.episodes[i].runtime}
	     	\nEpisode summary: ${show[0]._embedded.episodes[i].summary}`)   //Episode Information output in console  
	     flag=1;
	     break
	 
	}
	else{
	flag=0;
	
	}
}// end loop

if (flag==0) {
console.log("No episodes found")
}
else{
	console.log("-----------------Episode Found--------------------")

}

}
//end function


//start function
let FindInformation_ByName=(show,name)=>{  //Find episode by episode name 
	
	let flag =0
	console.log("-------------------------------------------------------------")
	

    let episode_length = show[0]._embedded.episodes.length  //check the length of episodes

for(let i=0;i<episode_length;i++){ //start  loop

	if (show[0]._embedded.episodes[i].name==name) { // check episode name is match or not

	     console.log(`Episode Name: ${show[0]._embedded.episodes[i].name}
	     	\nEpisode Season: ${show[0]._embedded.episodes[i].season}
	     	\nEpisode Number: ${show[0]._embedded.episodes[i].number}
	     	\nEpisode Date: ${show[0]._embedded.episodes[i].airdate}
	     	\nEpisode Time: ${show[0]._embedded.episodes[i].airtime}
	     	\nEpisode Time Length: ${show[0]._embedded.episodes[i].runtime}
	     	\nEpisode summary: ${show[0]._embedded.episodes[i].summary}`)  //Episode Information output in console
	     flag=1;
	     break
	 
	}
	else{
	flag=0;
	
	}
}//end loop

if (flag==0) {
console.log("No episodes found")
}
else{
	console.log("-----------------Episode Found--------------------")

}

}
//end function



