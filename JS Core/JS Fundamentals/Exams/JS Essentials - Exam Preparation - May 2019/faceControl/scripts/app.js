function getData() {
	let input = document.querySelector('#input textarea').value;
	// let lastElement = input.pop();
	let peopleIn = [];
	let peopleOut = [];
	let blackList = [];
	for (const person of input) {
		let action = JSON.parse(person);
		console.log(action);
		
		switch (action) {
			case "peopleIn":
				peopleIn.push(person);
				break;
			case "peopleOut":
				peopleOut.push(person);
				break;
			case "blacklist":
				blackList.push(person);
				break;
			default:
				break;
		}

	}

	// console.log(peopleIn);
	// console.log(peopleOut);
	// console.log(blackList);
	// console.log(input);

}