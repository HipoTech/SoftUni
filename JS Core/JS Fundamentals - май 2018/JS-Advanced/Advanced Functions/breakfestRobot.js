function breakfastRobot(inputArray) {

    function restock(storage, element, qty) {
        qty = Number(qty);

        switch (element) {
            case 'protein':
                storage.protein += qty;
                break;
            case 'carbohydrate':
                storage.carbohydrate += qty;
                break;
            case 'fat':
                storage.fat += qty;
                break;
            case 'flavour':
                storage.flavour += qty;
                break;

            default:
                break;
        }
    };
    function prepare(storage, meal, qty) {
        let ordered = recipes[meal];
        let counter = 0;
        for (const element in ordered) {
            let elementOnStock = storage[element];
            let neededElement = ordered[element];

            if (elementOnStock - neededElement < 0) {
                console.log(`Error: not enough ${element} in stock`);
                return;
            } else {
                counter++;
            }
        }
        if (counter === ordered.counter) {
            for (const element in ordered) {
                storage[element] -= ordered[element];
            }
            console.log(`Success`);
        }

    }

    let listOfOrders = inputArray;
    let recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
            counter: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 10,
            counter: 2
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3,
            counter: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1,
            counter: 3
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10,
            counter: 4
        },
    }
    let storage = {
        'protein': 0,
        'carbohydrate': 0,
        'fat': 0,
        'flavour': 0,
    }

    for (const order of listOfOrders) {
        let [command, meal, qty] = order.split(' ');

        switch (command) {
            case 'restock':
                restock(storage, meal, qty);
                console.log(`Success`);
                break;
            case 'prepare':
                prepare(storage, meal, qty);
                break;
            case 'report':
                console.log(Object.entries(storage).map(x => x.join('=')).join(' '));
                break;

            default:
                break;
        }

    }
}
breakfastRobot([
    'prepare turkey 1',
    'restock protein 10',
    'prepare turkey 1',
    'restock carbohydrate 10',
    'prepare turkey 1',
    'restock fat 10',
    'prepare turkey 1',
    'restock flavour 10',
    'prepare turkey 1',
    'report'
])