function vacation(input) {
    let tripDays = Number(input.shift());
    let budget = Number(input.shift());
    let peopleCount = Number(input.shift());
    let fuelPerKm = Number(input.shift());
    let foodPersosDay = Number(input.shift());
    let roomPersonday = Number(input.shift());
    let hotelExpenses = peopleCount * roomPersonday * tripDays;
    let foodExpenses = peopleCount * foodPersosDay * tripDays;
    let currentExpenses = 0;

    if (peopleCount > 10) {
        hotelExpenses -= hotelExpenses * 0.25;
    }

    currentExpenses += (hotelExpenses + foodExpenses);

    for (let day = 1; day <= input.length; day++) {
        let distanceForToday = input[day - 1];
        let moneyForGas = distanceForToday * fuelPerKm;
        currentExpenses += moneyForGas;

        if (day % 3 === 0 || day % 5 === 0) {
            currentExpenses += (currentExpenses * 0.4);
        }
        if (day % 7 === 0) {
            let withdraw = currentExpenses / peopleCount;
            currentExpenses -= withdraw;
        }
        if (currentExpenses > budget) {
            let neededMoney = (currentExpenses - budget).toFixed(2);
            console.log(`Not enough money to continue the trip. You need ${neededMoney}$ more.`)
            break;
        }
    }

    if (budget >= currentExpenses) {
        let moneyLeft = (budget - currentExpenses).toFixed(2);
        console.log(`You have reached the destination. You have ${moneyLeft}$ budget left.`);

    }
}
vacation(["7",
    "12000",
    "5",
    "1.5",
    "10",
    "20",
    "512",
    "318",
    "202",
    "154",
    "222",
    "108",
    "123"])