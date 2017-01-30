var letters = "acdefghijklmnopqrstuvwxyz"
var userArray = [];
var wins = 0;
var loses =0;
var lives = 10;

var pcGuess = pcGuess;

	pcGuess = letters[Math.floor(Math.random() * letters.length)];
		console.log(pcGuess);

		function GuessPC() {
			pcGuess = letters[Math.floor(Math.random() * letters.length)];
		console.log(pcGuess);

		return pcGuess;
		}

document.onkeyup = function(event) {



	var userGuess = event.key;

	if (userArray.indexOf(userGuess) >= 0) {

	} else {

		userArray.push(userGuess);

		document.getElementById('userGuess').innerHTML = userArray;
		console.log(userArray);

	}


if (userGuess === pcGuess) {

	wins++;
	lives = 8;
    userArray = [];



}GuessPC(); 

if (userGuess !== pcGuess) {
	lives--;

}

if (lives ==0) {

	loses++;
	userArray = []
	lives = 8;
}

document.getElementById('wins').innerHTML = wins;
document.getElementById('loses').innerHTML = loses;
document.getElementById('lives').innerHTML = lives;

}