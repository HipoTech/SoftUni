function bombNumber(numbers, bombAndPower) {
    let sum = 0;

    function printAns(numbers) {
        for (let elements of numbers) {
            sum += elements;
        }
        console.log(sum);
    }

    function findBomb(numbers, bombAndPower) {
        for (let i = 0; i < numbers.length; i++) {
            if (bombAndPower[0] === numbers[i]) {
                detonateBomb(numbers, bombAndPower, i);
            }
        }
    }

    function detonateBomb(numbers, bombAndPower, index) {
        if ((index - bombAndPower[1]) < 0) {
            if (index === 0) {
                numbers.splice(index, (bombAndPower[1] + 1));
                findBomb(numbers, bombAndPower);
            } else {
                let range = bombAndPower[1] * 2 + 1;
                index = 0;
                numbers.splice(index, range);
                findBomb(numbers, bombAndPower);
            }

        } else {
            numbers.splice((index - bombAndPower[1]), ((bombAndPower[1] * 2) + 1));
            findBomb(numbers, bombAndPower);
        }
    }
    findBomb(numbers, bombAndPower);
    printAns(numbers);
}

bombNumber([1,2,2,2],
    [1, -1]
);