function piccolo(inputArray) {
    let inputMap = new Map();
    let ans = [];
    inputArray.forEach(element => {
        let arr = element.split(", ");
        inputMap.set(arr[1], arr[0])
    });

    for (let [number, state] of inputMap) {
        if (state === 'IN') {
            ans.push(number);
        }
    }
    console.log(ans.sort((a, b) => a > b).join("\n"));

}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
)