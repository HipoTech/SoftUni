function searchForANumber(numbers,actions) {
    let newArea = numbers.splice(0,actions[0]);
    newArea.splice(0,actions[1]);

    function search(newArea, actions) {
        let counter = 0;
        for (let element of newArea) {
            if (element === actions[2]) {
                counter++;
            }
        }
        return counter;
    }

    let count = search(newArea,actions);
    console.log(`Number ${actions[2]} occurs ${count} time.`);
}
searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
);