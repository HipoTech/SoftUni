function cristmasSpirit(input) {
    
    input = input.map(Number);
    let quantity = input[0];
    let days = input[1];
    let spirit = 0;
    let budget = 0;

    for (let i = 1; i <= days; i++) {
        if (i % 11 === 0) {
            quantity += 2;
        }
        if (i % 2 === 0) {
            budget += 2 * quantity; // Ornament Set – 2$ a piece
            spirit += 5;
        } if (i % 3 === 0) {
            budget += 5 * quantity; // Tree Skirt – 5$ a piece 
            budget += 3 * quantity; //  Tree Garlands – 3$ a piece
            spirit += 13;
        } if (i % 5 === 0) {
            budget += 15 * quantity; // Tree Lights – 15$ a piece
            spirit += 17;
            if (i % 3 === 0) {
                spirit += 30;
            }
        }

        if (i % 10 === 0) {
            spirit -= 20;
            budget += 23;
            if (days === i) {
                spirit -= 30;
                days = 0;
            }
        }

    }
    console.log(`Total cost: ${budget}`);
    console.log(`Total spirit: ${spirit}`);
}
cristmasSpirit(['1', '7'])