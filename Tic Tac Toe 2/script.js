'use strict';

const Player = (mark) => {
	this.mark = mark;
	let score = 0;

	const updateScore = () => {
		score++;
		return score;
	};

	return { mark, updateScore };
};

const gameBoard = (() => {
	const gameFields = document.querySelectorAll('.game-field');
	const message = document.querySelector('.player-turn');
	const xWinsDisplay = document.getElementById('x-wins');
	const oWinsDisplay = document.getElementById('o-wins');
	const drawsDisplay = document.getElementById('draws');
	const resetButton = document.getElementById('reset');
	const finalMessage = document.querySelector('.final-message-text');

	let board = [];

	let xWins = 0;
	let oWins = 0;
	let draws = 0;

	const updateBoard = (index, playerMark) => {
		board[index] = playerMark;
		gameFields.forEach((field, index) => (field.textContent = board[index]));
	};

	const getBoard = () => board;

	const updateScore = (winner) => {
		if (winner) {
			winner === 'X' ? xWins++ : oWins++;
		} else if (playRound.isDraw()) {
			draws++;
		}
		xWinsDisplay.textContent = xWins;
		oWinsDisplay.textContent = oWins;
		drawsDisplay.textContent = draws;
	};

	const updateMessage = (player) => {
		if (playRound.isGameOn()) {
			message.textContent = `Player ${player}'s turn`;
		} else if (playRound.isDraw()) {
			message.textContent = 'Draw';
		} else {
			message.textContent = `Player ${player} wins!`;
		}
	};


	const reset = () => {
		board = [];
		updateBoard();
		playRound.reset();
		updateMessage('X');
	};

	gameFields.forEach((field) =>
		field.addEventListener('click', (e) => {
			if (e.target.textContent === '' && playRound.isGameOn()) {
				playRound.play(Number(e.target.dataset.index));
			}
		})
	);
	resetButton.addEventListener('click', reset);
	return {
		updateBoard,
		getBoard,
		updateMessage,
		updateScore,
	};
})();

const playRound = (() => {
	const PlayerX = Player('X');
	const PlayerO = Player('O');
	let fieldsTaken = 0;
	let gameOn = true;
	const winningOptions = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	const play = (index) => {
		gameBoard.updateBoard(index, getMark());
		if (checkWin()) {
			gameOn = false;
			gameBoard.updateMessage(getMark());
			gameBoard.updateScore(getMark());
			return;
		}
      fieldsTaken++;
		if (isDraw()) {
         gameOn = false;
			gameBoard.updateScore();
			gameBoard.updateMessage(getMark());
		}
		gameBoard.updateMessage(getMark());
	};

	const getMark = () => {
		return fieldsTaken % 2 ? PlayerO.mark : PlayerX.mark;
	};

	const checkWin = () => {
		return winningOptions.some((option) =>
			option.every((mark) => {
				return gameBoard.getBoard()[mark] === getMark();
			})
		);
	};

	const isGameOn = () => {
		return gameOn;
	};
	const isDraw = () => {
		return fieldsTaken === 9;
	};
	const reset = () => {
		fieldsTaken = 0;
		gameOn = true;
	};

	return { play, isGameOn, isDraw, reset };
})();


class Game {
	player1 = new Player()

	constructor() {
		doSomething()
	}

	doSomething() {
		this.player1.updateScore() //error - score is not defined
	}
}

const game = new Game()