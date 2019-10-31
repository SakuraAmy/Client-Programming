/*
* Amina Mahmood
* Client Programming
* Project 1 
* What Pokemon are you?
*/

// Attributes
var formCreated = false;

// Create the form after the user selects the last choice
function createForm() {
    var formId = document.createElement("div");
    var form = document.createElement("form");
    form.setAttribute("name", "form");
    
    // Print Title
    var questionTitle = document.createElement("h3");
    questionTitle.appendChild(document.createTextNode(pokemonSelected[defaultChoice][0]));
    
	//Display an image of the order
    var img = document.createElement("img");
    img.setAttribute("src", "img/" + pokemonSelected[defaultChoice][1]);

    //Name
    //var name = document.createTextNode("Your Name: ");      // Create Text Node for Name
    //var nameInput = document.createElement("input");        // <input..>
    //nameInput.setAttribute("id", "name");                   // Create ID for the name
    //nameInput.onchange = store;
    
    //Email
    var email = document.createTextNode("WOW! Please enter your email: ");
    var emailInput = document.createElement("input");
    emailInput.setAttribute("id", "email");
    emailInput.onchange = store;
    
    var nextLine = document.createElement("br");            // Create a new "line"
    
    //Order Now Button
    var sendButton = document.createElement("input");
    sendButton.setAttribute("type", "button");
    sendButton.setAttribute("value", "Send");
    sendButton.onclick = submitForm;
    
    //Clear Form Button
    var reset = document.createElement("input");
    reset.setAttribute("type", "button");
    reset.setAttribute("value", "Reset");
    reset.onclick = clear;
    
	//Save Name into the storage
    //if(GetCookie("name") !== null) {
	//   nameInput.value = GetCookie("name"); 
    //}
    //else if(window.localStorage.getItem("name") !== null) {
	//   nameInput.value = window.localStorage.getItem("name");
    //}
    
	//Save email into the storage
    if(GetCookie("email") !== null) {
	   emailInput.value = GetCookie("email");
    }
    else if(window.localStorage.getItem("email") !== null) {
	   emailInput.value = window.localStorage.getItem("email");
    }
    
    form.appendChild(questionTitle);
    form.appendChild(nextLine);
    
    form.appendChild(img);
    form.appendChild(nextLine.cloneNode(true));
    
    //form.appendChild(name);
    //form.appendChild(nameInput);
    //form.appendChild(nextLine.cloneNode(true));
    
    form.appendChild(email);
    form.appendChild(emailInput);
    form.appendChild(nextLine.cloneNode(true));
    
    form.appendChild(sendButton);
    form.appendChild(reset);
    
    formId.appendChild(form);
    
    document.getElementById("sendForm").appendChild(formId);
    
    formCreated = true;
}

function clearForm() {
    form.parentNode.remove(this.parentNode);      // remove is not supported by Internet Explorer
   // form.parentNode.removeChild(this.parentNode);       // replace from remove() to removeChild()  Still error....   
    formCreated = false;
}

// Validate and Submit Form
function submitForm() {
    
    // Validation attributes for letters and email
    //var validateLetters = /^[A-Za-z ]+$/;
    var validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    //var actualName = document.forms["form"]["name"].value;      // To get the value from the input field
    var emailAddress = document.forms["form"]["email"].value;       // To get the value from the input field
    
    // Name and Email Validation if the input is blank
    if(emailAddress === "") {
        alert("Please enter the email");
    }

    // Validate if there are letters only
    //else if(!(actualName.match(validateLetters))) {
    //    alert("Only letters can be submitted in the name field.");
    //}

    // Validate if there are wrong input for email
    else if(!(emailAddress.match(validateEmail))) {
        alert("Please input an e-mail correctly with @ symbol");
    }
	else {
	   alert("Thank you for playing this game!\nYou will recieve the email.");
	}
}

/*
Save customer's information into the storage
Borrowed codes from Dan Bogaard's if I remember codes correctly
*/
function store() {
    if(window.localStorage) {
	   window.localStorage.setItem(this.id, this.value);
    }
    else {
	   SetCookie(this.id, this.value);
    }
}

/*
Clear Cookies and Forms
Borrowed some codes from Dan Bogaard's
*/
function clear() {
    if(window.localStorage) {
	   localStorage.clear();
    }
    else {
        //DeleteCookie("name");
        DeleteCookie("email");
    }
    
    //Clear inputs
    //document.forms["form"]["name"].value = "";
    document.forms["form"]["email"].value = "";
}

