function stringSubstring(wordToSearch, sentanceToSearchIn) {
    let word = wordToSearch;
    let sentance = sentanceToSearchIn.split(' ');
    for (let i = 0; i < sentance.length; i++) {
        let wordInSentance = sentance[i];
        if (wordInSentance.toLowerCase() === word.toLowerCase()) {
            return console.log(word);
        } else {
        }
    }
    console.log(`${word} not found!`);
}
stringSubstring('Javascript',
    'JavaScript is the best programming language JavaScript')