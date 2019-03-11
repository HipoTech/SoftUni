function magicSum(arreyInput) {
    let arrey = Number(arreyInput[0].split(' '));
    let number = Number(arreyInput[1]);
    for (let i = 0; i < arrey.length; i++) {
        for (let j = i + 1; j < arrey.length; j++) {
            if (arrey[i] + arrey[j] === number) {
                console.log(arrey[i] + ' ' + arrey[j]);
            }
        }
    }
}

magicSum(['1 9 1', '10']);