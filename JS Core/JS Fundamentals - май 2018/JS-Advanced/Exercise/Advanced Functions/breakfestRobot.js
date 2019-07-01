function breakfestRobot() {
    const storage = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0 }
    const recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }

    return (input) => {
        let [command, ...elementAndQty] = input.split(' ')
        let finalMessage = ''

        if (command === 'restock') {
            let [microelement, quantity] = [elementAndQty[0], Number(elementAndQty[1])]
            storage[microelement] += quantity
            finalMessage = 'Success'
        } else if (command === 'prepare') {
            let [recipe, quantity] = [elementAndQty[0], Number(elementAndQty[1])]
            let missingIngredient = Object.entries(recipes[recipe]).find(
                ([name, requiredQuantity]) =>
                    storage[name] < requiredQuantity * quantity
            )

            if (missingIngredient) {
                finalMessage = `Error: not enough ${missingIngredient[0]} in stock`
            } else {
                for (let ingredient in recipes[recipe]) {
                    storage[ingredient] -= recipes[recipe][ingredient] * quantity
                }

                finalMessage = 'Success'
            }
        } else if (command === 'report') {
            finalMessage = `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`
        }

        return finalMessage
    }
}