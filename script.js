'use strict';
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
console.log(numberOfFilms);

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const a = prompt('Один из последних посмотренних фильмов?', ''),
	b = prompt('Насколько оцените его?', ''),
	c = prompt('Один из последних посмотренних фильмов?', ''),
	d = prompt('Насколько оцените его?', '')
;
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


console.log(personalMovieDB);


// Условия if, else
const number = 24;

if (number == 25) {
	console.log('Верно');
} else if (number >= 0) {
	console.log('Верно');
} else {
	console.log('ничего не верно');
};

// Операторы и инкремент и декремент

// num1++;
// num1--;
// ++num1;
// --num1;
let num1 = 7,
	num2 = 5;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 / num2);
console.log(num1 * num2);
console.log(num1 % num2);
--num1;
++num2;
console.log(num1);
console.log(num2);