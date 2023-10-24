let library = [];

class Book {
	constructor(title, author, pages, read) {
		this.id = Math.random();
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.read = read;
	}
}

const showBoxBtn = document.getElementById('show-box');
const submitBtn = document.getElementById('submit');
const inputBox = document.querySelector('.inputs');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('checkbox');
const main = document.querySelector('.main');
const message = document.getElementById('invalid-input');
const readBtns = document.querySelectorAll('.read-button');

function showBox() {
	inputBox.classList.remove('inactive');
	// document.querySelector('body').style.backgroundColor = ' rgba(0, 0, 0, .5)';
}
function dispalyBooks() {
	main.innerHTML = '';
	library.forEach((book) => {
		let id = Math.random();
		let newBook = document.createElement('div');
		newBook.classList.add('book');
		let didRead = book.read ? 'Read' : 'Not read';
		newBook.innerHTML = `<p>"${book.title}"</p>
      <p>${book.author}</p>
      <p>${book.pages} pages</p>
      <button id="${id}" style=" background-color:${
			book.read ? 'lime' : 'tomato'
		}" >${didRead}</button>
		`;
		let removeBtn = document.createElement('button');
		removeBtn.textContent = 'Remove';
		removeBtn.addEventListener('click', removeBook.bind(null, book.id));
		newBook.appendChild(removeBtn);
		main.appendChild(newBook);
		let btn = document.getElementById(id);
		btn.addEventListener('click', toggleColor);
	});
}
function removeBook(id) {
	let bookIndex = 0;
	for (const book of library) {
		if (book.id === id) {
			break;
		}
		bookIndex++;
	}
	library.splice(bookIndex, 1);
	dispalyBooks();
}
function clearInputs() {
	title.value = '';
	author.value = '';
	pages.value = '';
	read.checked = false;
}
function addBook() {
	if (title.value && author.value && pages.value) {
		library.push(
			new Book(title.value, author.value, pages.value, read.checked)
		);
		console.log(library);
		dispalyBooks();
		clearInputs();
		inputBox.classList.add('inactive');
		message.classList.add('inactive');
		document.querySelector('.inputs-box').classList.remove('bigger');
	} else {
		message.classList.remove('inactive');
		document.querySelector('.inputs-box').classList.add('bigger');
	}
}

document.getElementById('cancel').addEventListener('click', () => {
	inputBox.classList.add('inactive');
	document.querySelector('.inputs-box').classList.remove('bigger');
	message.classList.add('inactive');
});
showBoxBtn.addEventListener('click', showBox);
submitBtn.addEventListener('click', addBook);

function toggleColor() {
	console.log(this);
	if (this.textContent === 'Read') {
		this.style.backgroundColor = 'tomato';
		this.textContent = 'Not read';
	} else {
		this.style.backgroundColor = 'lime';
		this.textContent = 'Read';
	}
}

// ('click', () => {
// 	console.log(this);
// 	if (btn.textContent === 'Read') {
// 		btn.style.backgroundColor = 'tomato';
// 		btn.textContent = 'Not read';
// 	} else {
// 		btn.style.backgroundColor = 'lime';
// 		btn.textContent = 'Read';
// 	}
// })
