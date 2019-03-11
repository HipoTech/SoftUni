function piramid(base, increment) {
    let gold = 0;
    let stone = 0;
    let stoneTotal = 0;
    let marble = 0;
    let marbleTotal = 0;
    let lapisLazuli = 0;
    let lapisLazuliTotal = 0;
    let i = 0;
    while (base > 2) {
        i++;
        let stoneBase = base - 2;
        stone += stoneBase * stoneBase * increment;
        if (i % 5 === 0) {
            lapisLazuli += (stoneBase * 4 + 4) * increment;
        } else {
            marble += (stoneBase * 4 + 4) * increment;
        }
        base -= 2
    }
    i++;
    let totalHight = Math.floor(i * increment);
    gold = base * base * increment;
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${totalHight}`);

}
piramid(11, 0.75)