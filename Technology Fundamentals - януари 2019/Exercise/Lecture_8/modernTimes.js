function modernTimes(inputString) {
    let sentance = inputString;
    let pattern = /#[a-zA-Z]+/g;
    let collentedWords = [];
    let find = pattern.exec(sentance);
    while (find != null) {
        collentedWords.push(find[0].replace('#', ''));
        find = pattern.exec(sentance);
    }
    console.log(collentedWords.join('\n'));
}
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')