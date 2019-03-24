// Parse user input
function kyleReplies(){	

	var luckyNum = Math.floor(Math.random() * 5);

		console.log("lucky number:" + luckyNum);

		if (luckyNum == 3){
			document.getElementById('demo').innerHTML = "Fuck.";
		} else {

	// grab the user's input
	var sentence = $('#userInput').val();

	// parse it based on space
	var wordArray = sentence.split(" ");


	// Loop through array to identify key words
	var len = wordArray.length;

	//loop through the array of each word
	for (var i = 0; i < len; i++) {

		// Check if the loop statement prints
		// console.log(i);
		
		// replace key words
		switch(wordArray[i]){

			// replace "me" with "you"
			case "me": 				
				wordArray.splice(i, 1, "you");
				// Background change
				document.body.style.backgroundImage = "url('images/img12.jpg')";
				break;

			// replace "my" with "your"
			case "my": 				
				wordArray.splice(i, 1, "your");
				// Background change
				document.body.style.backgroundImage = "url('images/meagain.jpg')";
				break;

			// replace "I" with "you"
			case "I": 				
				wordArray.splice(i, 1, "you");
				// Background change
				document.body.style.backgroundImage = "url('images/img12.jpg')";
				break;

		 	// replace "i" with "you"
			case "i": 				
				wordArray.splice(i, 1, "you");
				// Background change
				document.body.style.backgroundImage = "url('images/meagain.jpg')";
				break;

			// replace "I'm" with "are you"
			case "I'm": 				
				wordArray.splice(i, 1, "are you");
				// Background change
				document.body.style.backgroundImage = "url('images/img12.jpg')";
				break;

			// replace "i'm" with "are you"
			case "i'm": 				
				wordArray.splice(i, 1, "are you");
				// Background change
				document.body.style.backgroundImage = "url('images/meagain.jpg')";
				break;

			// replace "am" with "are"
			case "am": 				
				wordArray.splice(i, 1, "are");
				// Background change
				document.body.style.backgroundImage = "url('images/img12.jpg')";
				break;

			// replace "mine" with "yours"
			case "mine": 				
				wordArray.splice(i, 1, "yours");
				// Background change
				document.body.style.backgroundImage = "url('images/meagain.jpg')";
				break;
                
            case "you": 				
				wordArray.splice(i, 1, "I");
				// Background change
				document.body.style.backgroundImage = "url('images/meagain.jpg')";
				break;
                
             case "are": 				
				wordArray.splice(i, 1, "am");
				// Background change
				document.body.style.backgroundImage = "url('images/meagain.jpg')";
				break;
                
             case "Are": 				
				wordArray.splice(i, 1, "am");
				// Background change
				document.body.style.backgroundImage = "url('images/meagain.jpg')";
				break;

			// otherwise the default will be...
			default:
				// document.getElementById("demo").innerHTML = "Fuck.";
				break;

		} // switch end bracket

	} // for loop end bracket

	// Display response i..e result of key word replacement

	var res = wordArray.join(" ");
	document.getElementById("demo").innerHTML = res + "?";

	} // end bracket for else

} // kyleReplies function end bracket