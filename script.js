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
const numbers = 24;

if (numbers == 25) {
	console.log('Верно');
} else if (numbers >= 0) {
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



// логические операторы
const hamburger = 3,
	fries = 2;

console.log(hamburger >= 3 && fries >= 1);

if (hamburger >= 3 && fries >= 1) {
	console.log('Я сыт');
} else {
	console.log('Я не сыт');
}


let age = 1;
if (!(age >= 14 && age <= 90)) {
	console.log('yes');
} else {
	console.log('not');
}

// let i = 1;
// while (i <= 50) {
// 	console.log(i);
// 	i++;
// }
let num = 10;
for (let i = 1; i <= 20; i++) {
	num++;
	console.log(num);
}

for (let i = 0; i < 3; i++) {
	console.log(i);
	for (let j = 0; j < 3; j++) {
		console.log(j);
	}
}

for (let i = 2; i <= 16; i++) {
	if (i % 2 === 0) {
		continue;
	} else {
		console.log(i);
	}
}
let nums = [];
for (let i = 5; i <=10; i++) {
	nums.push(i);
}
console.log(nums);

// let arr = [3, 5, 8, 16, 20, 23, 50];
// let result = [];

// result = arr;
// console.log(result);


//  for (let i = 0; i < data.length; i++) {
//  	if (typeof data[i] === 'number') {
//  		data[i] = data[i] * 2;
//  	} else if (typeof data[i] === 'string') {
//  		data[i] = data[i] + ' - done';
//  	}
//  }
//  console.log(data);
		

frstfor: for (let numa = 0; numa < 3; numa++) {
	for (let size = 0; size < 3; size++) {
		if (size == 1) break frstfor;
		console.log(size);
	}
}

let n = 6; // Высота пирамиды
let output = '';
for (let i = 1; i <= n; i++) {
	let spaces = ' '.repeat(n - i);
	if (i == 1)  {
		continue;
	} else {
		
		let stars = '*'.repeat(i * 2 - 1);
	}
	output += spaces + stars + '\n';
}
console.log(output);