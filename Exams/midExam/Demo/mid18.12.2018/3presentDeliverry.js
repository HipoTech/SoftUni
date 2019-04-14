function presentDeliverry(inputArea) {
    inputArea.pop();
    let field = inputArea.shift().split('@');
    let index = 0;

    for (let param of inputArea) {
        let tokens = param.split(' ');
        let jumpLength = Number(tokens[1]);
        index = (index + jumpLength) % field.length;
        if (field[index] <= 0) {
            console.log(`House ${index} will have a Merry Christmas.`);
        }
        field[index] -= 2;
    }
    console.log(`Santa's last position was ${index}.`);
    let failedHouses = 0;
    for (let house of field) {
        if (house > 0) {
            failedHouses++;
        }
    }
    if (failedHouses === 0) {
        console.log(`Mission was successful.`)
    }else{
        console.log(`Santa has failed ${failedHouses} houses.`)
    }
}
presentDeliverry(["10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Merry Xmas!"])