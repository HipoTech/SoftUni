function breadFactory(inputString) {
    let commands = inputString[0].split("|");
    let coins = 100;
    let energy = 100;

    for (const element of commands) {
        let command = element.split("-");
        let eventOrIngredient = command[0];
        let amount = Number(command[1]);

        switch (eventOrIngredient) {
            case "rest":
                if (energy + amount > 100) {
                    amount = 100 - energy;
                    energy = 100;

                } else {
                    energy += amount;
                }
                console.log(`You gained ${amount} energy.`);
                console.log(`Current energy: ${energy}.`);
                break;

            case "order":
                if (energy - 30 < 0) {
                    console.log(`You had to rest!`);
                    energy += 50;
                } else {
                    console.log(`You earned ${amount} coins.`);
                    coins += amount;
                    energy -= 30;
                }
                break;

            default:
                if (coins - amount > 0) {
                    console.log(`You bought ${eventOrIngredient}.`);
                    coins -= amount;
                } else {
                    console.log(`Closed! Cannot afford ${eventOrIngredient}.`);
                    return;
                }
                break;
        }
    }

    console.log(`Day completed!`);
    console.log(`Coins: ${coins}`);
    console.log(`Energy: ${energy}`);

}
breadFactory(["rest-10|order-100|eggs-100|rest-10"]);