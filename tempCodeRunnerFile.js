let n = 6; // Высота пирамиды
let output = '';
for (let i = 1; i <= n; i++) {
	let spaces = ' '.repeat(n - i);
	while (i == 1)  {
		continue;
	}
	let stars = '*'.repeat(i * 2 - 1);
	output += spaces + stars + '\n';
}
console.log(output);