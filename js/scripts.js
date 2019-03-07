// Parse user input
function kyleReplies(){	

	// grab the user's input
	var sentence = $('#userInput').val();

	// parse it based on space
	var wordArray = sentence.split(" ");


	// Loop through array to identify key words
	var len = wordArray.length;

	//loop through the array of each word
	for (var i = 0; i < len; i++) {

		// Check if the loop statement prints
		console.log(i);
		
		// replace key words
		switch(wordArray[i]){

			// replace "me" with "you"
			case "me": 				
				wordArray.splice(i, 1, "you");
				break;

			// replace "my" with "your"
			case "my": 				
				wordArray.splice(i, 1, "your");
				break;

			// replace "I" with "you"
			case "I": 				
				wordArray.splice(i, 1, "you");
				break;

		 	// replace "i" with "you"
			case "i": 				
				wordArray.splice(i, 1, "you");
				break;

			// replace "I'm" with "are you"
			case "I'm": 				
				wordArray.splice(i, 1, "are you");
				break;

			// replace "i'm" with "are you"
			case "i'm": 				
				wordArray.splice(i, 1, "are you");
				break;

			// replace "am" with "are"
			case "am": 				
				wordArray.splice(i, 1, "are");
				break;

			// replace "mine" with "yours"
			case "mine": 				
				wordArray.splice(i, 1, "yours");
				break;

			// otherwise the default will be...
			default:
				// document.getElementById("demo").innerHTML = "Fuck.";
				break;

		} // switch end bracket

	} // for loop end bracket

	console.log(wordArray);

	// Display response i..e result of key word replacement

	var res = wordArray.join(" ");
	document.getElementById("demo2").innerHTML = res + "?";

} // kyleReplies function end bracket

