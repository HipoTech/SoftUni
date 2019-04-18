function pascalCaseSplitter(inputString) {
    let pattern = /([A-Z])[a-z]*/g;
    let sentance = inputString;
    let array = [];
    find = pattern.exec(sentance);
    while (find != null) {
        array.push(find[0]);
        find = pattern.exec(sentance);
    }
    console.log(array.join(", "));
}
pascalCaseSplitter('ThisIsSoSS')