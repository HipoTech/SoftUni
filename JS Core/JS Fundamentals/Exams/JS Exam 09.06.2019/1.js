function firstProblem(input) {
    let days = input;
    const coffe = 150*(40/100);// mg coffeene 150ml 40/100
    const cocaColla = 250*(8/100); // mg coffeene 250ml 8/100
    const tea = 350*(20/100); // mg coffeene 350ml 20/100
    const energy = 500*(30/100); // mg coffeene 500ml 30/100
    let total = 0;

    for (let i = 1; i <= days; i++) {
        total += 3 * coffe + 2 * cocaColla + 3 * tea;
        if (i % 5 === 0) {
            total += 3 * energy;
        }
        if (i % 9 === 0) {
            total += 4 * cocaColla + 2 * energy;
        }
    }
    console.log(`${total} milligrams of caffeine were consumed`);
}



firstProblem(5)