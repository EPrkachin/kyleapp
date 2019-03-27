// Question Arrays
var mysticalCreatures = [
		"Are narwhals the unicorns of the sea?", 
		"Does a centaur have one or two sets of ribs?", 
		"Are the lochness monster and ogopogo distant relatives?"
		];

	var marriage = [
		"Would you marry ____ for $5M?", 
		"If Steve Buscemi asked you to marry him for 10 million dollars, and Ryan Gosling asked you to marry him for no money, which would you marry?", 
		"..."
		];

	var dreamInterpretation = [
		"What does it mean to dream about being a victim of an organ harvesting ploy?", 
		"...", 
		"..."
		];

	var muji = [
		"Can you make custom embroidery of pingpong gear at Muji?", 
		"Would you like some Muji candy?", 
		"Does shopping at Muji make you Buji?"
		];

	var space = [
		"Do you think there are aliens living amongst us disguised as humans?", 
		"...", 
		"..."
		];

	var random = [
		"If you could have 10,000 pineapples or 12 melons, but the pineapples were full of har, and the melons maybe had razor blades in them, which would you pick?", 
		"Can somebody please explain this magic trick to me?", 
		"..."
		];


	var surpriseMe = mysticalCreatures.concat(marriage,dreamInterpretation,muji,space,random); 

// Tina Asks function

function tinaAsks(selectedTopic){

	var question = "";

	if (selectedTopic == 'surpriseMe'){
		// Generates randon number
		var randomNumber = Math.floor(Math.random() * surpriseMe.length);
		// Go through array and assign the random number to question
		question = surpriseMe[randomNumber];
	}
	else if (selectedTopic =='mysticalCreatures'){
		var randomNumber = Math.floor(Math.random() * mysticalCreatures.length);
		question = mysticalCreatures[randomNumber];
	}
	else if (selectedTopic =='marriage'){
		var randomNumber = Math.floor(Math.random() * marriage.length);
		question = marriage[randomNumber];
	}
	else if (selectedTopic =='dreamInterpretation'){
		var randomNumber = Math.floor(Math.random() * dreamInterpretation.length);
		question = dreamInterpretation[randomNumber];
	}
	else if (selectedTopic =='muji'){
		var randomNumber = Math.floor(Math.random() * muji.length);
		question = muji[randomNumber];
	}
	else if (selectedTopic =='space'){
		var randomNumber = Math.floor(Math.random() * space.length);
		question = space[randomNumber];
	}

	// Check for the cookie
	localStorage.setItem("question", question);

	// Redirect to the question (result) page
	window.location.href = "tinasquestion.html";


}
