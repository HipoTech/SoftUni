function bombNumber(numbers, bombAndPower) {
    let [bombNumber, power] = bombAndPower;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === bombNumber) {
            let start = Math.max(0, i - power);
            let count = power * 2 + 1;
            numbers.splice(start, count);
            i = start - 1;
        }
    }
    let sum = 0;
    for (let i = 0; i <numbers.length ; i++) {
        sum+=numbers[i];
    }
    console.log(sum);
}

bombNumber([1, 2],
    [1, 0])


