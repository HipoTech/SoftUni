function bicoin(shift) {
    let shiftLen = shift.length;
    let gold;
    let goldTotal = 0;
    let firstDay = 0;
    let bitcoinCount = 0;
    let flag = 0;
    for (let i = 0; i < shiftLen; i++) {
        if ((i + 1) % 3 === 0) {
            gold = shift[i] * 0.7;
        } else {
            gold = shift[i];
        }
        goldTotal += gold * 67.51;
        if (goldTotal >= 11949.16) {
            let coin = 0;
            coin = Math.floor(goldTotal / 11949.16);
            goldTotal -= (coin * 11949.16);
            bitcoinCount += coin;
            flag++;
            if (flag === 1) {
                firstDay = i + 1;
            }
        }
    }
    console.log(`Bought bitcoins: ${bitcoinCount}`);
    if (firstDay !== 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${goldTotal.toFixed(2)} lv.`);
}
bicoin([3124.15, 504.212, 2511.124])