function coffeeMachine(inputArea) {
    const caffeeCaffeinePrice = 0.8;
    const caffeeDecafPrice = 0.9;
    const teaPrice = 0.8;
    let totalPrice = 0;
    let extraPrice = 0;
    let sugarPrice = 0;

    inputArea.forEach(order => {
        const orderSplited = order.split(', ');
        const money = orderSplited.shift();
        const drink = orderSplited.shift();
        let sugar = 0;
        if (drink === 'coffee') {
            const type = orderSplited.shift();
            if (type === 'caffeine') {
                totalPrice += caffeeCaffeinePrice;
            } else if (type === 'decaf') {
                totalPrice += caffeeDecafPrice;
            }


            if (orderSplited.length === 2) {
                const extra = orderSplited.shift();
                sugare = orderSplited.shift();

                if (extra === 'milk') {
                    extraPrice = Number((totalPrice * 0.1).toFixed(2));
                }
                if (sugare > 0) {
                    sugarPrice = 0.1;
                }
            } else if (orderSplited.length === 1) {
                sugare = orderSplited.shift();

                if (sugare > 0) {
                    sugarPrice = 0.1;
                }
            }
            console.log((totalPrice + extraPrice + sugarPrice));
        } else {
            totalPrice = teaPrice;

            if (orderSplited.length === 2) {
                const extra = orderSplited.shift();
                sugare = orderSplited.shift();

                if (extra === 'milk') {
                    extraPrice = Number((totalPrice * 0.1).toFixed(2));
                }
                if (sugare > 0) {
                    sugarPrice = 0.1;
                }
            } else if (orderSplited.length === 1) {
                sugare = orderSplited.shift();

                if (sugare > 0) {
                    sugarPrice = 0.1;
                }
            }
            console.log((totalPrice + extraPrice + sugarPrice));

        }
    });

}
coffeeMachine(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2',
    '1.00, coffee, decaf, 0'
])