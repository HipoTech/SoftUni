function equalSums(arr) {
    let arrLen = arr.length;
    let sumLeft = 0;
    let sumRight = 0;
    let sum = 0;
    if (arrLen === 1) {
        console.log(sum);
    }
    for (let i = 0; i < arrLen; i++) {
        sumLeft = 0;
        sumRight = 0;
        for (let j = i - 1; j >= 0; j--) {
            sumLeft += arr[j];
        }
        for (let k = i + 1; k < arrLen; k++) {
            sumRight += arr[k]
        }
        if (sumLeft === sumRight && arrLen !== 1) {
            console.log(i);
            break;
        }
    }
    if (sumLeft !== sumRight) {
        console.log('no');
    }
}
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])