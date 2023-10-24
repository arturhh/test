const playerChoice = document.querySelector('#num');
const checkButton = document.querySelector('.check');
const resetButton = document.querySelector('.reset');
const pGuesses = document.querySelector('.guesses');
const message = document.querySelector('.message');
const finishInfo = document.querySelector('.finish-info');

let randomNumber = Math.floor(Math.random() * 100 + 1);
let playerGuesses = [];
let canPlay = true;

function play() {
	if (!canPlay) alert('Press reset button!');
	else if (playerChoice.value) {
		playerGuesses.push(playerChoice.value);
		pGuesses.textContent = playerGuesses;
		console.log(randomNumber);
		if (Number(playerChoice.value) < randomNumber)
			message.textContent = 'Your number is too low!';
		else if (Number(playerChoice.value) > randomNumber)
			message.textContent = 'Your number is too high!';
		else if (Number(playerChoice.value) === randomNumber) {
			canPlay = false;
			message.textContent = 'Got it! You Won!';
			finishInfo.textContent = "Press the 'reset' button to start again.";
		}
		playerChoice.value = '';
		if (playerGuesses.length === 10) {
			canPlay = false;
			message.textContent = 'You lost! Game over!';
			finishInfo.textContent = "Press the 'reset' button to start again.";
		}
	} else alert('Choose a number 1-100');
}

function reset() {
	randomNumber = Math.floor(Math.random() * 100 + 1);
	playerGuesses = [];
	playerChoice.value = '';
	pGuesses.textContent = playerGuesses;
	finishInfo.textContent = '';
	message.textContent = '';
	canPlay = true;
}

checkButton.addEventListener('click', play);
resetButton.addEventListener('click', reset);
