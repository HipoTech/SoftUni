function magicMatrices(params) {
    let flag = true;

    for (let i = 0; i < params.length; i++) {
        let sumRow = params[i].reduce((a, b) => a + b, 0)
        let sumColum = 0;
        for (let j = 0; j < params.length; j++) {

            sumColum += params[j][i];
        }
        if (sumRow !== sumColum) {
            flag = false;
        }
    }
    console.log(flag);

}
magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
])