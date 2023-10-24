document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar');
	addShadow = () => {
		window.scrollY >= 100
			? nav.classList.add('shadow-bg')
			: nav.classList.remove('shadow-bg');
	};
	window.addEventListener('scroll', addShadow);
});

toggleBurger = () => {
	const burger = document.querySelector('.navbar-toggler');
	const navBackground = document.querySelector('.navbar-collapse');
	if (navBackground.classList.contains('show')) {
		burger.classList.add('collapsed');
		navBackground.classList.remove('show');
	}
};

window.addEventListener('click', toggleBurger);
