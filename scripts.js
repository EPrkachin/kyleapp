// Parse user input
function parseSentence(){	
	var sentence = $('#userInput').val();
	var wordArray = sentence.split(" ");


	// Loop through array to identify key words
	var len = wordArray.length;

	for (var i = 0; i < len; i++) {

		// Check if the loop statement prints
		console.log(i);
		
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
				document.getElementById("demo").innerHTML = "fuck";

		} // switch end bracket
	} // for loop end bracket

	// document.getElementById("demo").innerHTML = wordArray;

	var res = wordArray.join();
	document.getElementById("demo2").innerHTML = res;





}

