const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
	// Almacena los elementos con la clase question-btn
	// a partir del elemento con la clase question
	const btn = question.querySelector('.question-btn');

	// Agrega un event listener al btn
	btn.addEventListener('click', function () {
		// Cierra todas las otras opciones que no sean las presionadas
		questions.forEach((element) => {
			if (element !== question) {
				element.classList.remove('show-text');
			}
		});
		question.classList.toggle('show-text');
	});
});
