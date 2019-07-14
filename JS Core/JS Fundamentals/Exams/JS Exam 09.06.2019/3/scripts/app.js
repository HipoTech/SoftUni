function spaceshipCrafting() {
	let titanium = Number(document.querySelector('#titaniumCoreFound').value);
	let aluminum = Number(document.querySelector('#aluminiumCoreFound').value);
	let magnesium = Number(document.querySelector('#magnesiumCoreFound').value);
	let carbon = Number(document.querySelector('#carbonCoreFound').value);
	let losses = Number(document.querySelector('#lossesPercent').value);
	let availableBars = document.querySelector('#availableBars p')
	let builtSpaceships = document.querySelector('#builtSpaceships p')

	losses = (losses / 4) / 100;

	if (losses !== 0) {
		titanium = titanium - titanium * losses;
		aluminum = aluminum - aluminum * losses;
		magnesium = magnesium - magnesium * losses;
		carbon = carbon - carbon * losses;
	}

	titanium = Math.round(titanium);
	aluminum = Math.round(aluminum);
	magnesium = Math.round(magnesium);
	carbon = Math.round(carbon);


	let titaniumPrice = 25;
	let aluminiumPrice = 50;
	let magnesiumPrice = 75;
	let carbonPrice = 100;
	console.log(titanium);

	let titaniumBars = titanium / titaniumPrice;
	let aluminiumBars = aluminum / aluminiumPrice;
	let magnesiumBars = magnesium / magnesiumPrice;
	let carbonBars = carbon / carbonPrice;

	titaniumBars = Math.round(titaniumBars);
	aluminiumBars = Math.round(aluminiumBars);
	magnesiumBars = Math.round(magnesiumBars);
	carbonBars = Math.round(carbonBars);

	let shipsBuilded = [];

	while (titaniumBars >= 2 &&
		aluminiumBars >= 2 &&
		magnesiumBars >= 3 &&
		carbonBars >= 1) {

		if ((titaniumBars >= 7 &&
			aluminiumBars >= 9 &&
			magnesiumBars >= 7 &&
			carbonBars >= 7)) {
			shipsBuilded.push('The-Undefined-Ship');
			titaniumBars -= 7;
			aluminiumBars -= 9;
			magnesiumBars -= 7;
			carbonBars -= 7;
		} if (titaniumBars >= 5 &&
			aluminiumBars >= 7 &&
			magnesiumBars >= 7 &&
			carbonBars >= 5) {
			shipsBuilded.push('Null-Master');
			titaniumBars -= 5;
			aluminiumBars -= 7;
			magnesiumBars -= 7;
			carbonBars -= 5;
		} if (titaniumBars >= 3 &&
			aluminiumBars >= 5 &&
			magnesiumBars >= 5 &&
			carbonBars >= 2) {
			shipsBuilded.push('JSON-Crew');
			titaniumBars -= 3;
			aluminiumBars -= 5;
			magnesiumBars -= 5;
			carbonBars -= 2;
		} if (titaniumBars >= 2 &&
			aluminiumBars >= 2 &&
			magnesiumBars >= 3 &&
			carbonBars >= 1) {
			shipsBuilded.push('False-Fleet');
			titaniumBars -= 2;
			aluminiumBars -= 2;
			magnesiumBars -= 3;
			carbonBars -= 1;
		}
	}

	let undefinedShipCount = 0;
	let nullMaster = 0;
	let jsonShipCount = 0;
	let feetCount = 0;

	for (let i = 0; i < shipsBuilded.length; i++) {
		if (shipsBuilded[i] === 'The-Undefined-Ship') {
			undefinedShipCount++;
		}
		if (shipsBuilded[i] === 'Null-Master') {
			nullMaster++;
		}
		if (shipsBuilded[i] === 'JSON-Crew') {
			jsonShipCount++;
		}
		if (shipsBuilded[i] === 'False-Fleet') {
			feetCount++;
		}
	}

	let shipList = [];
	if (undefinedShipCount != 0) {
		shipList.push(`${undefinedShipCount} THE-UNDEFINED-SHIP`);
	}

	if (nullMaster != 0) {
		shipList.push(`${nullMaster} NULL-MASTER`);
	}

	if (jsonShipCount != 0) {
		shipList.push(`${jsonShipCount} JSON-CREW`);
	}

	if (feetCount != 0) {
		shipList.push(`${feetCount} FALSE-FLEET`);
	}
	let newShipList = shipList.join(', ')
	let materialList = `${titaniumBars} titanium bars, ${aluminiumBars} aluminum bars, ${magnesiumBars} magnesium bars, ${carbonBars} carbon bars`

	availableBars.innerHTML = materialList;
	builtSpaceships.innerHTML = newShipList;
}