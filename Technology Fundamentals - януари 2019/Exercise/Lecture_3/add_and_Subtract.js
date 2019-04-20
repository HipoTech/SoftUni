function add_and_Subtract(array) {
    let size = array.length;
    let originalSum = 0;
    let modifyedSum = 0;
    let newArrey = '';
    for (let i = 0; i < size; i++) {
        originalSum += array[i];
        if (array[i] % 2 === 0) {
            array[i] += i;
        } else {
            array[i] -= i;
        }
        modifyedSum += array[i];
        if (i === size - 1) {
            newArrey += ' ' + array[i];
        } else {
            newArrey += ' ' + array[i] + ',';
        }
    }
    console.log('[' + newArrey + ' ]');
    console.log(originalSum);
    console.log(modifyedSum);
}
add_and_Subtract([5, 15, 23, 56, 35])