function аrray_Rotation(arrey, rotations) {
    let bufer;
    let arreySize = arrey.length;
    let newArrey = ' ';
    for (let i = 0; i < rotations; i++) {
        bufer = arrey[0];
        for (let j = 0; j < arreySize; j++) {
            arrey[j] = arrey[j + 1];
        }
        arrey[arreySize - 1] = bufer;
    }
    for (let k = 0; k < arreySize; k++) {
        if (k === arreySize - 1) {
            newArrey += '' + arrey[k].toString();
        } else {
            newArrey += '' + arrey[k].toString() + ' '
        }
    }
    console.log(newArrey)
}
аrray_Rotation([51, 47, 32, 61, 21], 2)