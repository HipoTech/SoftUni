function max_number(array) {
    let arrayLen = array.length;
    let flag = 0;
    let newArrey = '';
    for (let i = 0; i < arrayLen; i++) {
        flag = 0;
        for (let j = i + 1; j < arrayLen; j++) {
            if (array[i] > array[j]) {
                flag++
            }
            if (flag === arrayLen - (i + 1)) {
                newArrey += array[i].toString() + ' ';
            }
        }
    }
    console.log(`${newArrey}${array[arrayLen - 1]}`)
}
max_number([1, 4, 3, 2])