function distinctArray(inputArray) {
    function remove (inputArray) {
        let array = inputArray;
        for (let i = 0; i < array.length; i++) {
            for (let j = i + 1; j < array.length; j++) {
                if (array[i] === array[j]) {
                    array.splice(j, 1);
                    remove(inputArray);
                }
            }
        }
        return array;
    }

    let ansArray = remove(inputArray);
    console.log(ansArray.join(' '));
}

distinctArray([1, 1, 1]);