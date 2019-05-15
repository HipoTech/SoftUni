function validityChecker(arr) {
    let [x1, y1, x2, y2] = arr;
    let dx = x2 - x1;
    let dy = y2 - y1;
    let betweenDist = Math.sqrt((((dx * dx + dy * dy))));
    let firstDist = Math.sqrt((((x1 * x1 + y1 * y1))));
    let secondDist = Math.sqrt((((x2 * x2 + y2 * y2))));


    if (Number.isInteger(firstDist)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    if (Number.isInteger(secondDist)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(betweenDist)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

}
validityChecker([2, 1, 1, 1])