const monthsArr = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];
const weekdaysArr = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline h4');

let futureDate = new Date(2023, 11, 25, 00, 00, 00);
let year = futureDate.getFullYear();
let month = futureDate.getMonth();
let days = futureDate.getDay();
let date = futureDate.getDate();
let hours = futureDate.getHours();
let minutes = futureDate.getMinutes();
let seconds = futureDate.getSeconds();

//* Future time in ms

function getRemainingTime() {
	const futureTime = futureDate.getTime();
	const today = new Date().getTime();
	const remainingDays = futureTime - today;
	// 1s = 1000ms
	// 1m = 60s
	// 1h = 60m
	// 1d = 24h
	// 1d = 86,400,000ms

	const oneDayInMiliseconds = 24 * 60 * 60 * 1000;
	const oneHourInMiliseconds = 60 * 60 * 1000;
	const oneMinuteInMiliseconds = 60 * 1000;
	const oneSecondInMiliseconds = 1000;

	let days = Math.floor(remainingDays / oneDayInMiliseconds);
	let hours = Math.floor(
		(remainingDays % oneDayInMiliseconds) / oneHourInMiliseconds
	);
	let minutes = Math.floor(
		(remainingDays % oneHourInMiliseconds) / oneMinuteInMiliseconds
	);
	let seconds = Math.floor(
		(remainingDays % oneMinuteInMiliseconds) / oneSecondInMiliseconds
	);

	const values = [days, hours, minutes, seconds];

	items.forEach(function (element, index) {
		element.textContent = values[index];
	});
}

setInterval(getRemainingTime, 1000);
format();
giveaway.textContent = `giveaway ends on ${weekdaysArr[days]} ${date} ${monthsArr[month]} ${year} ${hours}:${minutes}:${seconds}`;
