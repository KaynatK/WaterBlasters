let isFoundPistol = -1;


/* now put all the detials name,size,price,clours
*/

let PistolName = ["Storm Blaster Jet Stream (Colours Vary)", "Storm Blaster Hurricane Warrior", "Storm Blaster Typhoon Twister - Blue",
"Splash Power Shot Water Squirt Gun", "Stream Machine CSG X5 Toy Water Gun"];

let pistolprice = [70,50,35,40,60,20];

let choosecolour = ["Blue", "Pink", "Black", "Red", "CamoGreen"];


function findPistol(){
	let heroForm = document.getElementById("pistolForm"); // The mian form 
	let colour = pistolForm.colour.value; // colour element for choose 
	let minPrice = parseInt(pistolForm.minPrice.value); // Min price will display 
	let maxPrice = parseInt(pistolForm.maxPrice.value); // Max price will display
	
	// loop only finding a one item any that max 
	// why finding one at time
	for(i = 0 ; i <PistolName.length; i++){
		if(choosecolour[i] == colour){
			if(pistolprice[i] >= minPrice  && pistolprice[i] <= maxPrice )
			isFoundPistol = i 
		}
	}
}

function searchAndDisplay(){
	findPistol();
	if(isFoundpistol >= 0){
		displayPistol();
	} else { 
	   alert("sorry can't the match do search again");
	}
	
}



// this is the button to click on 

let btn;
btn = document.getElementById("find_Btn");
btn.addEventListener("click", searchAndDisplay);


