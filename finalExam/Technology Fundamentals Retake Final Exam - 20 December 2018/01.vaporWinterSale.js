function vaporWinterSale(inputString) {
    let arrayOfInputs = inputString[0].split(', ');
    let listOfGames = {};
    let listOfExpGames = {};

    arrayOfInputs.forEach(game => {
        let gameAndPrice = game.split('-');
        if (gameAndPrice.length !== 1) {
            listOfGames[gameAndPrice[0]] = (Number(gameAndPrice[1]) * 0.8).toFixed(2);
        } else {
            let expGame = gameAndPrice[0].split(':');
            let price = listOfGames[expGame[0]];
            if (price != undefined) {
                delete listOfGames[expGame[0]];
                listOfExpGames[expGame[0] + ' - ' + expGame[1]] = (Number(price) * 0.75).toFixed(2);
            }
        }
    });
    let ansArray = [];
    for (var game in listOfGames) ansArray.push([game, listOfGames[game]]);
    ansArray.sort((a, b) => b[1] - a[1]);

    let ansArrayExp = [];
    for (var game in listOfExpGames) ansArrayExp.push([game, listOfExpGames[game]]);
    ansArrayExp.sort((a, b) => a[1] - b[1]);

    ansArrayExp.forEach(game => {
        console.log(game.join(' - '));
    });

    ansArray.forEach(game => {
        console.log(game.join(' - '));
    });
}
vaporWinterSale(['Center Strike-14.99, FortLite-25, BattleShield 5-64.74, BattleShield 5:CoD edition, Dog of War-45, Dead Red Redemption-100, Dead Red Redemption:no DLC'])
//BattleShield 5-64.74