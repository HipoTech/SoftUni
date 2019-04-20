function aMinerTask(inputArea) {
    let list = {};
    for (let i = 0; i < inputArea.length; i++) {
        if (inputArea[i] in list) {
            list[inputArea[i]] += Number(inputArea[i + 1]);
        } else if (i % 2 === 0) {
            list[inputArea[i]] = Number(inputArea[i + 1]);
        }
    }
    for (const key in list) {
        console.log(`${key} -> ${list[key]}`);

    }

}
aMinerTask([
    "gold",
    "155",
    "silver",
    "10",
    "copper",
    "17",
    "gold",
    "15"
])