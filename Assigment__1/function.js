
     //start function 
var FindProduct = function(pokemon,pokemonname)  //Find the information of that pokemon use this function
{
	var c=0;
	
	
	for(var i=0; i<pokemon.length; i++)
		{
			if(pokemon[i].name==pokemonname) //check the name of pokemon is available or not
			{
					console.log("Pokemon information")
					console.log("--------------------------------------------")
					console.log("Pokemon Name: "+pokemon[i].name+"\n"+"Pokemon hight: "+pokemon[i].height 
						+"\n"+"Pokemon weight: "+pokemon[i].weight+ 
						"\n"+"Pokemon type: "+pokemon[i].type);
					
					c=c+1;
			}
			else{

			}
			
		}
		if(c==0)
		{
			
			console.log("No pokemon found whith this name");
			}
			else
			{

			}   
} 
//end function



//start function
var FindNext_evolution= function(pokemon,pokemonname)  //Find the name of all pokemon have this name in Next Evolution
{ var c=0;
	console.log("--------------------------------------------")
	for (i in pokemon)
{
	var check=pokemon[i].next_evolution;
	if(check==undefined){               //check next_evolution fild is found or not found
		
	}
	else{
		var ln=pokemon[i].next_evolution.length
		
		for(j in pokemon[i].next_evolution)
			
		{
			if(pokemon[i].next_evolution[j].name===pokemonname) //match pokemon name and next_evolution name
			{	
				console.log("Pokemon Name: "+pokemon[i].name)   //print pokomen name 
			    c=1;
			}
			else{

			}
			
		}
		}
	}
	if(c==0){
		console.log("No pokemon Found")// if not found any pokemon 
	}
	else{

	}
}
//end function





//Stating function 
var FindWaknesses= function(pokemon,Weaknesses) //Find the name of all pokemon have this weakness
{
	var c=0;
	var id=1;
	console.log("--------------------------------------------")
	console.log("Pokemon Name are : ")
	for(var i=0; i<pokemon.length; i++)
	{
		
		var ln=pokemon[i].weaknesses.length
		for(var j=0;j<ln;j++){
		if(pokemon[i].weaknesses[j]==Weaknesses)
		{
			console.log(id+" : "+pokemon[i].name);
			c=1;
			id=id+1;
		}
	}
}
if (c==0) {
	console.log("No Pokemon Found This waekness")
}
}
//end of function



