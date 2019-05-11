function sameNumbers(params) {
    let inputAsString = `${params}`;
    let flag = true;
    let sum = 0;
    for (let i = 0; i < inputAsString.length; i++) {
        for (let j = 1; j < inputAsString.length; j++) {
            if (inputAsString.charAt(i) !== inputAsString.charAt(j)) {
                flag = false;
                break;
            }
        }
    }
    console.log(flag);

    for (let k = 0; k < inputAsString.length; k++) {
        sum += Number(inputAsString.charAt(k));
    }

    console.log(sum);

};
sameNumbers(1234)