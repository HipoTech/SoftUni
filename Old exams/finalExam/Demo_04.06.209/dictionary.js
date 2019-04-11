function dictionary(inputArea) {
    let inputs = inputArea;
    let areaOfWordsAndDescriptions = inputs[0].split(" | ").map((x) => x.split(": "));
    let wordsToPrint = inputs[1].split(" | ");

    wordsToPrint.forEach(word => {
        let areaOfDescr = [];
        areaOfWordsAndDescriptions.forEach(description => {
            if (word === description[0]) {
                areaOfDescr.push(description[1]);
            }
        });
        if (areaOfDescr.length >= 1) {
            console.log(word);
            console.log('-' + (areaOfDescr.sort((a, b) => b.length - a.length)).join("\n-"));
        }
    });

    if (inputs[2] === "List") {
        let tempArea = [];
        areaOfWordsAndDescriptions.forEach(word => {
            if (!tempArea.includes(word[0])) {
                tempArea.push(word[0])
            }
        });
        console.log(tempArea.sort((a, b) => a > b).join(" "));
    }
}
dictionary(['programmer: an animal, which turns coffee into code | developer: a magician',
    'programmer | developer',
    'List'])