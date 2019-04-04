// Question Arrays
	var mysticalCreatures = [
		"Are narwhals the unicorns of the sea?", 
		"Does a centaur have one or two sets of ribs?", 
		"Are the lochness monster and ogopogo distant relatives?"
		];

	var marriage = [
		"Would you marry Steve Buscemi for $5M?", 
		"If Steve Buscemi asked you to marry him for 10 million dollars, and Ryan Gosling asked you to marry him for no money, which would you marry?"
		];

	var dreamInterpretation = [
		"What does it mean to dream about being a victim of an organ harvesting ploy?", 
		"What does it mean to dream that you are a lobster?", 
		"If I am screaming in my dream, can Kyle hear me?"
		];

	var muji = [
		"Can you make custom embroidery of pingpong gear at Muji?", 
		"Would you like some Muji candy?", 
		"Does shopping at Muji make you Buji?"
		];

	var space = [
		"Do you think there are aliens living amongst us disguised as humans?", 
		"When do you think commercial flights to Mars will be available?", 
		"Do you think succulents can grow on the moon?",
		"Does anyone know someone who works at NASA?"
		];

	var random = [
		"If you could have 10,000 pineapples or 12 melons, but the pineapples were full of har, and the melons maybe had razor blades in them, which would you pick?", 
		"Can somebody please explain this magic trick to me?"
		];

	// Comnbine all the above arrays if user selects the 'surprise me' topic
	var surpriseMe = mysticalCreatures.concat(marriage,dreamInterpretation,muji,space,random); 

// Tina Asks function

function tinaAsks(selectedTopic){

	var question = "";

	// If user selects the 'surprise me' topic, select a question at random from that array
	if (selectedTopic == 'surpriseMe'){
		// Generates randon number
		var randomNumber = Math.floor(Math.random() * surpriseMe.length);
		// Go through array and assign the random number to question
		question = surpriseMe[randomNumber];
	}
	// Otherwise if user selects the 'mystical creatures' topic, select a question at random from that array
	else if (selectedTopic =='mysticalCreatures'){
		var randomNumber = Math.floor(Math.random() * mysticalCreatures.length);
		question = mysticalCreatures[randomNumber];
	}
	// Otherwise if user selects the 'marriage' topic, select a question at random from that array
	else if (selectedTopic =='marriage'){
		var randomNumber = Math.floor(Math.random() * marriage.length);
		question = marriage[randomNumber];
	}
	// Otherwise if user selects the 'dream interpretation' topic, select a question at random from that array
	else if (selectedTopic =='dreamInterpretation'){
		var randomNumber = Math.floor(Math.random() * dreamInterpretation.length);
		question = dreamInterpretation[randomNumber];
	}
	// Otherwise if user selects the 'muji' topic, select a question at random from that array
	else if (selectedTopic =='muji'){
		var randomNumber = Math.floor(Math.random() * muji.length);
		question = muji[randomNumber];
	}
	// Otherwise if user selects the 'space' topic, select a question at random from that array
	else if (selectedTopic =='space'){
		var randomNumber = Math.floor(Math.random() * space.length);
		question = space[randomNumber];
	}

	// Check for the cookie
	localStorage.setItem("question", question);

	// Redirect to the question (result) page
	window.location.href = "tinasquestion.html";


}
