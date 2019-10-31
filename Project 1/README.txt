Brainstorming:
Thinking of adding imgs or gif to the top and the bottom
Body will have the form that meet the requirement with a submit and clear button
Also would like to add email to the form

What I did:
Follow the basic requirement
For the Theme, I decided to use the color from logo
Added text node for name and email with validation 


/*
* Amina Mahmood
* Client Programming
* Project 1 
* What Pokemon are you?
*/

// Create new Object
var pokemon = new Object();

pokemon["default"] = ["Which Generation you like to play the most? ", "Generation 1", "Generation 2", "Generation 3"];

// Generation 1
pokemon["Generation 1"] = ["What is your favorite Pokemon type?", "Water", "Fire", "Grass"];
pokemon["Water"] = ["Which animal do you like?", "Orange Fish", "Yellow Bird", "Blue Dog"];
pokemon["Fire"] = ["Which animal do you like?", "Fire Bird", "Red Horse", "Red Fox"];
pokemon["Grass"] = ["Which animal do you like?", "Orange Bug", "Green Dinosaur", "Red Crab"];

//Generation 2
pokemon["Generation 2"] = ["What is your favorite Pokemon type?", "Gen 2 Water", "Gen 2 Fire", "Gen 2 Grass"];
pokemon["Gen 2 Water"] = ["Which animal do you like?", "Blue Mouse", "Green Frog", "Blue Fish"];
pokemon["Gen 2 Fire"] = ["Which animal do you like?", "Dark Dog", "Red Lion", "Red Bird"];
pokemon["Gen 2 Grass"] = ["Which animal do you like?", "Light Green Dinosaur", "Flying Cat", "Green Bug"];

//Generation 3
pokemon["Generation 3"] = ["What is your favorite Pokemon type?", "Gen 3 Water", "Gen 3 Fire", "Gen 3 Grass"];
pokemon["Gen 3 Water"] = ["Which animal do you like?", "Dog Fish", "White Bird", "Red-Orange Crab"];
pokemon["Gen 3 Fire"] = ["Which animal do you like?", "Red Turtle", "Yellow Calf", "Red-Orange Bird"];
pokemon["Gen 3 Grass"] = ["Which animal do you like?", "Banana Dinosaur", "Blue-Green Frog", "Green Lizard"];

// When items are selected, new data object for each items
var pokemonSelected = new Object();

// Gen 1 Water
pokemonSelected["Orange Fish"] = [pokemon["Generation 1"][1] + " " + pokemon["Water"][1], "../img/Magikarp.png"];
pokemonSelected["Yellow Bird"] = [pokemon["Generation 1"][1] + " - " + pokemon["Water"][2], "../img/Psyduck.png"];
pokemonSelected["Blue Dog"] = [pokemon["Generation 1"][1] + " - " + pokemon["Water"][3], "../img/Vaporeon.png"];

// Gen 1 Fire
pokemonSelected["Fire Bird"] = [pokemon["Generation 1"][2] + " - " + pokemon["Fire"][1], "../img/Moltres.png"];
pokemonSelected["Red Horse"] = [pokemon["Generation 1"][2] + " - " + pokemon["Fire"][2], "../img/Ponyta.png"];
pokemonSelected["Red Fox"] = [pokemon["Generation 1"][2] + " - " + pokemon["Fire"][3], "../img/Vulpix.png"];

// Gen 1 Grass
pokemonSelected["Orange Bug"] = [pokemon["Generation 1"][3] + " - " + pokemon["Grass"][1], "../img/Paras.png"];
pokemonSelected["Green Dinosaur"] = [pokemon["Generation 1"][3] + " - " + pokemon["Grass"][2], "../img/Bulbasaur.png"];
pokemonSelected["Red Crab"] = [pokemon["Generation 1"][3] + " - " + pokemon["Grass"][3], "../img/Parasect.png"];

// Gen 2 Water
pokemonSelected["Blue Mouse"] = [pokemon["Generation 2"][1] + " - " + pokemon["Gen 2 Water"][1], "../img/Marill.png"];
pokemonSelected["Green Frog"] = [pokemon["Generation 2"][1] + " - " + pokemon["Gen 2 Water"][2], "../img/Politoed.png"];
pokemonSelected["Blue Fish"] = [pokemon["Generation 2"][1] + " - " + pokemon["Gen 2 Water"][3], "../img/Mantine.png"];

// Gen 2 Fire
pokemonSelected["Dark Dog"] = [pokemon["Generation 2"][2] + " - " + pokemon["Gen 2 Fire"][1], "../img/Houndour.png"];
pokemonSelected["Red Lion"] = [pokemon["Generation 2"][2] + " - " + pokemon["Gen 2 Fire"][2], "../img/Entei.png"];
pokemonSelected["Red Bird"] = [pokemon["Generation 2"][2] + " - " + pokemon["Gen 2 Fire"][3], "../img/Ho-Oh.png"];

// Gen 2 Grass
pokemonSelected["Light Green Dinosaur"] = [pokemon["Generation 2"][3] + " - " + pokemon["Gen 2 Grass"][1], "../img/Chikorita.png"];
pokemonSelected["Flying Cat"] = [pokemon["Generation 2"][3] + " - " + pokemon["Gen 2 Grass"][2], "../img/Hoppie.png"];
pokemonSelected["Green Bug"] = [pokemon["Generation 2"][3] + " - " + pokemon["Gen 2 Grass"][3], "../img/Celebi.png"];

// Gen 3 Water
pokemonSelected["Dog Fish"] = [pokemon["Generation 3"][1] + " - " + pokemon["Gen 3 Water"][1], "../img/Mudkip.png"];
pokemonSelected["White Bird"] = [pokemon["Generation 3"][1] + " - " + pokemon["Gen 3 Water"][2], "../img/Wingull.png"];
pokemonSelected["Red-Orange Crab"] = [pokemon["Generation 3"][1] + " - " + pokemon["Gen 3 Water"][3], "../img/Corphish.png"];

// Gen 3 Fire
pokemonSelected["Red Turtle"] = [pokemon["Generation 3"][2] + " - " + pokemon["Gen 3 Fire"][1], "../img/Torkoal.png"];
pokemonSelected["Yellow Calf"] = [pokemon["Generation 3"][2] + " - " + pokemon["Gen 3 Fire"][2], "../img/Numel.png"];
pokemonSelected["Red-Orange Bird"] = [pokemon["Generation 3"][2] + " - " + pokemon["Gen 3 Fire"][3], "../img/Torchic.png"];

// Gen 3 Grass
pokemonSelected["Banana Dinosaur"] = [pokemon["Generation 3"][3] + " - " + pokemon["Gen 3 Grass"][1], "../img/Tropius.png"];
pokemonSelected["Blue-Green Frog"] = [pokemon["Generation 3"][3] + " - " + pokemon["Gen 3 Grass"][2], "../img/Lotad.png"];
pokemonSelected["Green Lizard"] = [pokemon["Generation 3"][3] + " - " + pokemon["Gen 3 Grass"][3], "../img/Treecko.png"];
