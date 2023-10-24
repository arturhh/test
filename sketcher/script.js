const workSpace = document.querySelector('.workspace');
const inputRange = document.querySelector('#input-range');
const rangeDisplay = document.querySelector('#range-display');
const inputColor = document.querySelector('#input-color');
const colorBtn = document.querySelector('#color');
const rainbowBtn = document.querySelector('#rainbow');
const eraserBtn = document.querySelector('#eraser');
const clearBtn = document.querySelector('#clear');

let isMouseDown = false;

function generateRandomColor() {
	let randomNumber1 = Math.floor(Math.random() * 256);
	let randomNumber2 = Math.floor(Math.random() * 256);
	let randomNumber3 = Math.floor(Math.random() * 256);
	return `rgb(${randomNumber1},${randomNumber2},${randomNumber3})`;
}

function color() {
	if (rainbowBtn.classList.contains('active')) return generateRandomColor();
	else if (colorBtn.classList.contains('active')) return inputColor.value;
	else if (eraserBtn.classList.contains('active')) return '#ffffff';
}

function createSquares() {
	rangeDisplay.textContent = `${inputRange.value} x ${inputRange.value}`;
	let squareDimensions = 600 / inputRange.value;
	workSpace.innerHTML = '';
	const squaresQuantity = inputRange.value ** 2;

	for (let i = 1; i <= squaresQuantity; i++) {
		const newSquare = document.createElement('div');
		newSquare.style.cssText = `width:${squareDimensions}px; height:${squareDimensions}px; line-height:${squareDimensions}`;
		newSquare.classList.add('mini-box');
		workSpace.appendChild(newSquare);
		newSquare.onmousedown = function () {
			isMouseDown = true;
		};
		document.body.onmouseup = function () {
			isMouseDown = false;
		};

		newSquare.addEventListener('mouseover', (e) => {
			if (isMouseDown) e.target.style.backgroundColor = color();
		});
	}
}
createSquares();

function changeMode() {
	if (this.id === 'rainbow') {
		rainbowBtn.classList.add('active');
		colorBtn.classList.remove('active');
		eraserBtn.classList.remove('active');
	} else if (this.id === 'color') {
		colorBtn.classList.add('active');
		rainbowBtn.classList.remove('active');
		eraserBtn.classList.remove('active');
	} else if (this.id === 'eraser') {
		eraserBtn.classList.add('active');
		colorBtn.classList.remove('active');
		rainbowBtn.classList.remove('active');
	}
}

inputRange.addEventListener('input', createSquares);
clearBtn.addEventListener('click', createSquares);
colorBtn.addEventListener('click', changeMode);
rainbowBtn.addEventListener('click', changeMode);
eraserBtn.addEventListener('click', changeMode);
