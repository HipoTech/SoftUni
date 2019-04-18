function storeProvision(input) {
    let currentStock = input[0];
    let orrderedStock = input[1];

    let result = {};

    for (let i = 0; i < currentStock.length; i++) {
        if (i % 2 === 0) {
            result[currentStock[i]] = Number(currentStock[i + 1]);
        }
    }
        for (let j = 0; j < orrderedStock.length; j++) {
            if (j % 2 === 0) {
                if (result.hasOwnProperty(orrderedStock[j])) {
                    let keyOf = orrderedStock[j];
                    let value = Number(orrderedStock[j+1]);
                    result[keyOf]+= value;
                } else {
                    result[orrderedStock[j]] = Number(orrderedStock[j + 1]);
                }

            }
        }
    console.log(result);
}
storeProvision([['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']])