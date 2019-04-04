// Tina's response array
	var tinasResponse = [
			"That makes sense", 
			"Hmm okay you have convinced me", 
			"Yeah of course",
			"Yeah this is the weird shit I think about",
			"What are you talking about I missed everything",
			"Thanks guys I love your support",
			"...And then I was tripping out forever",
			"I was hoping for a real minimalistic response"
			];

function tinaReplies(){

	// Generate a random number based on the length of Tina's response array
	var response = Math.floor(Math.random() * tinasResponse.length);

	// The response from Tina will be based on the randomly generated number
	var response2 = tinasResponse[response];

	// Display the response
	document.getElementById("tinasResponse").innerHTML = response2;

}