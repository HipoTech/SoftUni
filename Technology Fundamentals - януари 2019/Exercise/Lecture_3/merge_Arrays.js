function merge_Arrays(areaOne, areaTwo) {
    let areaOneLen = areaOne.length
    let newArea = [];
    for (let i = 0; i < areaOneLen; i++) {
        if (i % 2 !== 0 && i !== 0) {
            newArea[i] = '' + areaOne[i] + areaTwo[i];
        } else {
            newArea[i] = Number(areaOne[i]) + Number(areaTwo[i]);
        }
    }
    let newAreaLen = newArea.length;
    let result = '';
    for (let k = 0; k < newAreaLen; k++) {
        if (k === newAreaLen - 1) {
            result += `${newArea[k]}`
        } else {
            result += `${newArea[k]} - `
        }
    }
    console.log(result)
}
merge_Arrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"])