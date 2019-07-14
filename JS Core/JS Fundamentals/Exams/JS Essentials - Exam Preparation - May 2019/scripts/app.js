function getData() {
	let input = document.querySelector('#input textarea').value;
	let peopleInList = document.querySelector('#peopleIn p');
	let peopleOutList = document.querySelector('#peopleOut p');
	let blacklistList = document.querySelector('#blacklist p');
	let list = JSON.parse(input);
	let lastElement = list.pop();
	let peopleIn = [];
	let peopleOut = [];
	let blackList = [];

	function checkPeopleIn(personToCheck) {
		let firstName = personToCheck.firstName;
		let lastName = personToCheck.lastName;
		peopleIn.forEach(person => {
			if (firstName === person.firstName && lastName === person.lastName) {
				let index = peopleIn.indexOf(person);
				peopleOut.push(person);
				peopleIn.splice(index, 1)
			}
		});
	}

	list.forEach(person => {
		let action = person.action;
		let index = 0;
		switch (action) {
			case 'peopleIn':
				index = peopleIn.indexOf(person);
				if (index >= 0) {
					break;
				} else {
					peopleIn.push(person);
					break;
				}
				case 'peopleOut':
					index = peopleOut.indexOf(person);
					if (index >= 0) {
						break;
					} else {
						peopleOut.push(person);
						break;
					}
					case 'blacklist':
						index = blackList.indexOf(person);
						if (index >= 0) {
							break;
						} else {
							blackList.push(person);
							break;
						}
						default:
							break;
		}
	});

	peopleOut.forEach(person => {
		checkPeopleIn(person);
	});

	blackList.forEach(person => {
		checkPeopleIn(person);
	});

	if (lastElement.criteria !== '' && lastElement.action !== '') {
		switch (lastElement.action) {
			case 'peopleIn':
				peopleIn = peopleIn.sort((a, b) => {
					switch (lastElement['criteria']) {
						case 'firstName':
							return a['firstName'].localeCompare(b['firstName']);
							break;
						case 'lastName':
							return a['lastName'].localeCompare(b['lastName']);
							break;
						default:
							break;
					}
				});
				break;
			case 'peopleOut':
				peopleOut = peopleOut.sort((a, b) => {
					switch (lastElement['criteria']) {
						case 'firstName':
							return a['firstName'].localeCompare(b['firstName']);
							break;
						case 'lastName':
							return a['lastName'].localeCompare(b['lastName']);
							break;
						default:
							break;
					}
				});
				break;
			case 'blacklist':
				blackList = blackList.sort((a, b) => {
					switch (lastElement['criteria']) {
						case 'firstName':
							return a['firstName'].localeCompare(b['firstName']);
							break;
						case 'lastName':
							return a['lastName'].localeCompare(b['lastName']);
							break;
						default:
							break;
					}
				});
				break;
			default:
				break;
		}
	}
	peopleIn = peopleIn.filter(function (item, pos) {
		return peopleIn.indexOf(item) == pos;
	});

	peopleOut = peopleOut.filter(function (item, pos) {
		return peopleOut.indexOf(item) == pos;
	});

	blackList = blackList.filter(function (item, pos) {
		return blackList.indexOf(item) == pos;
	});

	peopleIn.forEach(person => {
		let obj = {};
		obj['firstName'] = person.firstName;
		obj['lastName'] = person.lastName;
		peopleInList.textContent += JSON.stringify(obj) + ' ';
	});
	peopleOut.forEach(person => {
		let obj = {};
		obj['firstName'] = person.firstName;
		obj['lastName'] = person.lastName;
		peopleOutList.textContent += JSON.stringify(obj) + ' ';
	});
	blackList.forEach(person => {
		let obj = {};
		obj['firstName'] = person.firstName;
		obj['lastName'] = person.lastName;
		blacklistList.textContent += JSON.stringify(obj) + ' ';
	});
}