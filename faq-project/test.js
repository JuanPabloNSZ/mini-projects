//* Este proyecto se puede hacer mediante 2 métodos:
//* Using selectors inside the element or Traversing the DOM

//* Primer método: Using selectors inside the element
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

//* Segundo método: Traversing the DOM
const btns = document.querySelectorAll('.question-btn');

// Agrega un event listener a cada elemento con la clase question-btn
btns.forEach((button) =>
	button.addEventListener('click', function (element) {
		const question = element.currentTarget.parentElement.parentElement;

		console.log(question);

		question.classList.toggle('show-text');
	})
);
