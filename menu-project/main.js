const menu = [
	{
		id: 1,
		title: 'buttermilk pancakes',
		category: 'breakfast',
		price: 15.99,
		img: './images/item-1.jpeg',
		desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
	},
	{
		id: 2,
		title: 'diner double',
		category: 'lunch',
		price: 13.99,
		img: './images/item-2.jpeg',
		desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
	},
	{
		id: 3,
		title: 'godzilla milkshake',
		category: 'shakes',
		price: 6.99,
		img: './images/item-3.jpeg',
		desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
	},
	{
		id: 4,
		title: 'country delight',
		category: 'breakfast',
		price: 20.99,
		img: './images/item-4.jpeg',
		desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
	},
	{
		id: 5,
		title: 'egg attack',
		category: 'lunch',
		price: 22.99,
		img: './images/item-5.jpeg',
		desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
	},
	{
		id: 6,
		title: 'oreo dream',
		category: 'shakes',
		price: 18.99,
		img: './images/item-6.jpeg',
		desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
	},
	{
		id: 7,
		title: 'bacon overflow',
		category: 'breakfast',
		price: 8.99,
		img: './images/item-7.jpeg',
		desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
	},
	{
		id: 8,
		title: 'american classic',
		category: 'lunch',
		price: 12.99,
		img: './images/item-8.jpeg',
		desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
	},
	{
		id: 9,
		title: 'quarantine buddy',
		category: 'shakes',
		price: 16.99,
		img: './images/item-9.jpeg',
		desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
	},
	{
		id: 10,
		title: 'steak dinner',
		category: 'dinner',
		price: 39.99,
		img: './images/item-10.jpeg',
		desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
	},
];

const sectionCenter = document.querySelector('.section-center');
const buttonContainer = document.querySelector('.btn-container');

// Agrega un listener que lanza una función cuando carga la página
window.addEventListener('DOMContentLoaded', function () {
	displayMenuItems(menu);
	displayButtons();
});

// Muestra los items en la página
function displayMenuItems(menuItems) {
	let displayMenu = menuItems.map(function (item) {
		// console.log(item.title);
		return `<article class="menu-item">
                    <img src="${item.img}" class="photo" alt="${item.title}" />
                    <div class="item-info">
                        <header>
                            <h4 class="item-name">${item.title}</h4>
                            <h4 class="price">${item.price}</h4>
                        </header>
                    <p class="item-text">${item.desc}</p>
                    </div>
                </article>`;
	});

	displayMenu = displayMenu.join('');

	// Agrega el contenido html de displayMenu
	// al elemento con la clase .section-center (sectionCenter)
	sectionCenter.innerHTML = displayMenu;
}

// Muestra los botones en la página
function displayButtons() {
	// Obtiene un Array de la propiedad category (en menu) sin duplicados
	const categories = menu.reduce(
		// (values es el array que devuelvo)
		// (item es cada elemento del array menu)
		(values, item) => {
			if (!values.includes(item.category)) {
				values.push(item.category);
			}
			return values;
		},
		['all']
	);

	// Agrega contenido html
	// por cada elemento de categories
	// al elemento con la clase .btn-container (buttonContainer)
	const categoryBtn = categories
		.map(function (category) {
			return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`;
		})
		.join('');
	buttonContainer.innerHTML = categoryBtn;

	// Selecciona todos los elementos con la clase .filter-btn
	// (Recordar: Cuando se agregan elementos dinámicamente,
	// estos se deben seleccionar después que carga el Dom)
	const filterBtns = document.querySelectorAll('.filter-btn');

	// Filtra elementos
	filterBtns.forEach(function (button) {
		button.addEventListener('click', function (e) {
			// Almacena el data-id del botón presionado
			const category = e.currentTarget.dataset.id;
			const filterCategory = menu.filter((x) => x.category === category);
			// Lanza la función displayMenuItems
			// sólo con la categoría dentro de category
			displayMenuItems(filterCategory);
			// Si el data-id del botón es 'all'
			// muestra todo el menú
			if (category === 'all') {
				displayMenuItems(menu);
			}
		});
	});
}
