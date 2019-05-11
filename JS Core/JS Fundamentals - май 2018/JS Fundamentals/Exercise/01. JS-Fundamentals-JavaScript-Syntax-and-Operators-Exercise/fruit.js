function fruit(fruit, weight, price) {
    let weightInGrames = weight / 1000;
    let money = weightInGrames * price;
    console.log(`I need $${money.toFixed(2)} to buy ${weightInGrames.toFixed(2)} kilograms ${fruit}.`);
};
fruit('orange', 2500, 1.80);