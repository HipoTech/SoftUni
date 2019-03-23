function revealWords(words, sentance) {

    function placeAWord(sentanceBase, wordsToPutIn) {
        wordsToPutIn.forEach(word => {
            sentanceBase = sentanceBase.replace('*'.repeat(word.length), word)
        });
        return sentanceBase;
    }

    let wordsToPutIn = words.split(", ");
    let sentanceBase = sentance;
    let ans = placeAWord(sentanceBase, wordsToPutIn);

    console.log(ans);
}

revealWords('great, for',
    'softuni is ***** place *** learning new programming languages'
)