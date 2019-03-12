function wordsTracker(inputArea) {
    let wordsToSearch = inputArea.shift().split(" ");
    let arrayOfIndex = [];
    for (let i = 0; i < wordsToSearch.length; i++) {
        arrayOfIndex[i] = [wordsToSearch[i], 0];
    }
    let data = [];

    inputArea.forEach(element => {
        data.push(element);
    });

    data.forEach(word => {
        arrayOfIndex.forEach(searchForWord => {
            if (searchForWord[0] === word) {
                searchForWord[1] += 1;
            }
        });
    });

    arrayOfIndex.sort((a, b) => {
        if (a[1] > b[1]) {
            return -1;
        } else if (a[1] > b[1]) {
            return 1;
        } else {
            return 0;
        }
    })

    arrayOfIndex.forEach(element => {
        console.log(element.join(" - "));
    });

}
wordsTracker(['this sentence the', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']
)