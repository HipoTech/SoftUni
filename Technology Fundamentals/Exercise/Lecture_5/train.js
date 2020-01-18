function train(inputArrey) {
    function createWagons(inputArrey) {
        return inputArrey[0]
            .split(' ')
            .map(x => Number(x));
    }


    function addWagons(wagons, valueOfElementElement) {
        wagons.push(Number(valueOfElementElement));
    }

    function addPassengers(wagons, valueOfElement, maxNumberOfPassengers) {
        for (let i = 0; i < wagons.length; i++) {
            if (maxNumberOfPassengers <= wagons[i]) {

            } else {
                if (valueOfElement + wagons[i] <= maxNumberOfPassengers) {
                    wagons[i] += valueOfElement;
                    return wagons;
                }

            }
        }
    }

    function filterCommandLine(inputArrey, wagons, maxNumberOfPassengers) {
        for (let i = 2; i < inputArrey.length; i++) {
            let valueOfElement = inputArrey[i].split(' ').map(x => Number(x));
            if (valueOfElement.length > 1) {
                addWagons(wagons, valueOfElement[1]);
            } else {
                addPassengers(wagons, valueOfElement[0], maxNumberOfPassengers);
            }
        }
    }

    let wagons = createWagons(inputArrey);
    let maxNumberOfPassengers = Number(inputArrey[1]);
    filterCommandLine(inputArrey, wagons, maxNumberOfPassengers);
    console.log(wagons.join(' '))
}

train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']
);