function wordsTracker(inputArea) {
    let searchWords = inputArea.shift().split(" ");
    let map = new Map();
    for (let j = 0; j < searchWords.length; j++) {
        map.set(searchWords[j], 0);
    }

    for (let i = 0; i < inputArea.length; i++) {
        if (map.has(inputArea[i])) {
            let bufer = map.get(inputArea[i]);
            map.set(inputArea[i], bufer + 1)
        }
    }

    let sortedArea = [...map].sort((a, b) => b[1] - a[1])
    sortedArea.forEach(element => {
        console.log(element.join(" - "));

    });


}
wordsTracker(['this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']
)