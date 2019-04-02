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

	var response = Math.floor(Math.random() * tinasResponse.length);

	var response2 = tinasResponse[response];

	document.getElementById("tinasResponse").innerHTML = response2;

}