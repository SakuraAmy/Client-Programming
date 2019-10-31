/**
	Amina Mahmood
	Client Programming
	Project 1
	What Pokemon are you? 
*/

var defaultChoice = "default";		// Default Data
var number = 0;

function createSelectOptions(select, div) {
	// Create Question header for the each question
	var question = document.createElement("span");						// Create a <span> Tag
	var gif = document.createElement("img");
	var selectText = document.createTextNode(pokemon[defaultChoice][0]);			// pokemon["default"] will show up as "Select a Kind";
	question.appendChild(selectText);							// Now, <h2>"Select a Kind"</h2>
	div.appendChild(question);							// In HTML, the question will show up.

	// Create Select as the first choice of the selects
	var option = document.createElement("option");						// Create a <option> Tag
	var selectPick = document.createTextNode("Select one");					// Create Text Node
	option.appendChild(selectPick);
	select.appendChild(option);								// Now, it will make <select><option> </option></select>

	// Iterate (loops) choices for the questions
	for (var i = 1; i < pokemon[defaultChoice].length; i++) {
		option = document.createElement("option");					// Create another <option> Tag
		var optionText = document.createTextNode(pokemon[defaultChoice][i]);		// Create options for choices, such as Android, Apple, etc.
		option.appendChild(optionText);
		select.appendChild(option);
	}	// End For Loop
}	// End createSelectOptions function	

/*
Now, it begins... This function is to create dynamically dropmenu select.
At the time, it removes the choices if the user picks the different one.
*/
function order() {
	var div = document.createElement("div");
	var select  = document.createElement("select");

	if(number !== 0) {
		defaultChoice = this.value;
	}  

	// When an option is changed, reset all choices
	if((number !== 0) && (this.parentNode.firstChild !== this.parentNode.parentNode.lastChild.lastChild)) {
		while(this.parentNode.parentNode.lastChild !== this.parentNode) {
			this.parentNode.parentNode.removeChild(this.parentNode.parentNode.lastChild);
			if(formCreated) {
				clearForm();
			}
		}	// End While
	}	// End If

	// While the last question is being selected and wants to change, it removes the form and choices too.
	if((number != 0) && (formCreated)) {
		clearForm();
	}

   //If the last question is changed remove the form and create a new one according to the data
    if((number !== 0) && (defaultChoice == this[0].value)) {
	    clearForm();
    }

	//If the last question is changed, remove the form and create a new one according to the data
	else if(pokemon[defaultChoice] == undefined) {
		createForm();
	}
	else {
		createSelectOptions(select, div);
		select.onchange = order;
		div.appendChild(select);
		document.getElementById("orderPokemon").appendChild(div);
		number++;	// To move to the next choice
	}
}