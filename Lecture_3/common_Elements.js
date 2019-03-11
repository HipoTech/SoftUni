function common_Elements(areaOne, areaTwo) {
    let areaOneLen = areaOne.length;
    let areaTwoLen = areaTwo.length;
    for (let i = 0; i < areaOneLen; i++) {
        for (let j = 0; j < areaTwoLen; j++) {
            if (areaOne[i] === areaTwo[j]) {
                console.log(areaOne[i])
            }
        }
    }
}
common_Elements(["S", "o", "f", "t", "U", "n", "i", " "], ["s", "o", "c", "i", "a", "l"])