function gladiator(lost, helmet, sword, shield, armor) {
    let helmetCost = 0;
    let swordCost = 0;
    let shieldCost = 0;
    let armorCost = 0;
    let shieldCounter = 0;
    for (let i = 1; i <= lost; i++) {
        if (i % 2 === 0) {
            helmetCost += helmet;
        }
        if (i % 3 === 0) {
            swordCost += sword;
        }
        if (i % 2 === 0 && i % 3 === 0) {
            shieldCost += shield;

            shieldCounter++;
            if (shieldCounter % 2 === 0) {
                armorCost += armor;
            }
        }
    }
    console.log(`Gladiator expenses: ${(helmetCost + swordCost + shieldCost + armorCost).toFixed(2)} aureus`)
}
gladiator(23, 12.50, 21.50, 40, 200)