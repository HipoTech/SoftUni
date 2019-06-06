function plasmaGiants(array, cutSize) {
    // <Functions>
    function cutIt(arrayToCut) {
        let cuttedArray = [];
        let rotations = arrayToCut.length;
        for (let i = 0; i < rotations / cutSize; i++) {
            let temp = [];
            for (let j = 0; j < cutSize; j++) {
                temp.push(arrayToCut.shift());
            }
            cuttedArray.push(temp);
            temp = [];
        }
        return cuttedArray;
    }

    function producrCalculate(arrayToCalculate) {
        arrayToCalculate.forEach(product => {
            let index = arrayToCalculate.indexOf(product);
            arrayToCalculate[index] = product.reduce((e, c) => e * c, 1);
        });
        return arrayToCalculate;
    }

    function maximum(arrayToCompare) {
        let max = Number.MIN_SAFE_INTEGER;
        arrayToCompare.forEach(element => {
            if (element > max) {
                max = element;
            }
        });
        return max;
    }

    function minimum(arrayToCompare) {
        let min = Number.MAX_SAFE_INTEGER;
        arrayToCompare.forEach(element => {
            if (element < min) {
                min = element;
            }
        });
        return min;
    }
    // </Functions>
    if (cutSize !== 0) {
        let inputArray = array.slice();
        let firstArray = inputArray.splice(0, inputArray.length / 2);
        let secondArray = inputArray.slice();
        let firstArrayCutted = cutIt(firstArray);
        let secondArrayCutted = cutIt(secondArray);
        firstArrayCutted = producrCalculate(firstArrayCutted);
        secondArrayCutted = producrCalculate(secondArrayCutted);

        let firstGiand = firstArrayCutted.reduce((e, c) => e + c, 0);
        let secondGiand = secondArrayCutted.reduce((e, c) => e + c, 0);
        let damage = Math.min(...array);
        let life = Math.max(...array);
        let winer = Math.max(firstGiand, secondGiand);
        let looser = Math.min(firstGiand, secondGiand);
        let rounds = 0;
        if (damage !== 0) {
            do {
                rounds++;
                firstGiand -= damage;
                secondGiand -= damage;
                looser -= damage;
            } while (looser > life);
        }
        if (firstGiand > secondGiand) {
            console.log(`First Giant defeated Second Giant with result ${firstGiand} - ${secondGiand} in ${rounds} rounds`);
        } else if (firstGiand < secondGiand) {
            console.log(`Second Giant defeated First Giant with result ${secondGiand} - ${firstGiand} in ${rounds} rounds`);
        } else {
            console.log(`Its a draw ${firstGiand} - ${secondGiand}`);
        }
    }
}
plasmaGiants([3, 3, 3, 4, 5, 6, 7, 8, 9, 10, 5, 4], 2)