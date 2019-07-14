function secondProblem(capacity, passangers) {
    let wagon = passangers.slice().map(x => x = 0);
    let incoming = passangers.slice();
    let passangersNotOnBoard = 0;

    for (let i = 0; i < wagon.length; i++) {
        let passangersTo = incoming[i];

        while (passangersTo !== 0) {
            for (let j = i; j < wagon.length; j++) {
                if (wagon[j] + passangersTo <= capacity) {
                    wagon[j] += passangersTo;
                    passangersTo = 0;
                } else {
                    passangersTo -= capacity - wagon[j];
                    wagon[j] = capacity;
                }
            }

            if (passangersTo > 0) {
                passangersNotOnBoard += passangersTo;
                passangersTo = 0;
            }
        }

    }
    console.log(wagon);
    if (passangersNotOnBoard === 0) {
        console.log('All passengers aboard');

    } else {
        console.log(`Could not fit ${passangersNotOnBoard} passengers`);

    }
}
secondProblem(10, [9, 39, 1, 0, 0])
// 6, [5, 15, 2]
// 10, [9, 39, 1, 0, 0]