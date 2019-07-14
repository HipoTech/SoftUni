function solve() {
	let inputBinary = document.querySelector('#input').value;
	let result = document.querySelector('#resultOutput');
	let sum = 0;

	do {
		inputBinary = inputBinary
			.toString()
			.split('')
			.map(x => Number(x))
			.reduce((c, e) => c + e, 0);
		sum = inputBinary;
	} while (inputBinary > 9);

	inputBinary = document.querySelector('input').value;

	inputBinary = inputBinary
		.toString()
		.slice(sum, inputBinary.length - sum)
		.match(/.{1,8}/g)
		.map(e => String.fromCharCode(Number.parseInt(e, 2)))
		.filter(e => /[A-Za-z\s]/.test(e))
		.join('')

	result.textContent = inputBinary;
}