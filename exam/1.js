function first(params) {
    let days = +params[0];
    let budget = + params[1];
    let group = +params[2];
    let fuel = +params[3];
    let expenses = +params[4];
    let price = +params[5];
    let hotelPrice = price * group * days;
    if (group > 10) {
        hotelPrice -= hotelPrice * 0.25;
    }
    let food = expenses * group * days;
    let currentExpenses = hotelPrice + food;
    for (let j = 1; j <= days; j++) {
        currentExpenses += fuel * Number(params[j + 5]);

        if (j % 3 === 0 || j % 5 === 0) {
            currentExpenses += (currentExpenses * 0.4);
        }
        if (j % 7 === 0) {
            currentExpenses -= (currentExpenses / group);
        }
        if (currentExpenses > budget) {
            break;
        }
    }
    if (budget - currentExpenses < 0) {
        console.log(`Not enough money to continue the trip. You need ${(currentExpenses - budget).toFixed(2)}$ more.`);
    } else {
        console.log(`You have reached the destination. You have ${(budget - currentExpenses).toFixed(2)}$ budget left.`);
    }

}
first(["10",
    "20500",
    "11",
    "1.2",
    "8",
    "13",
    "100",
    "150",
    "500",
    "400",
    "600",
    "130",
    "300",
    "350",
    "200",
    "300"])

// first(["7",
//     "12000",
//     "5",
//     "1.5",
//     "10",
//     "20",
//     "512",
//     "318",
//     "202",
//     "154",
//     "222",
//     "108",
//     "123"])