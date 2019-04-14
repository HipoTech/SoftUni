function deciphering(inputArea) {
    let stringToDecript = inputArea[0];
    let wordsToReplace = inputArea[1].split(' ');
    let pattern = /[d-z{}|#]+/g;
    let match = pattern.exec(stringToDecript)[0];
    if (stringToDecript.length !== match.length) {
        console.log('This is not the book you are looking for.');
    } else {
        let areaOfChars = stringToDecript.split('').map((x) => x.charCodeAt(0) - 3).map((x) => String.fromCharCode(x));
        areaOfChars = areaOfChars.join('');
        for (let i = 0; i < areaOfChars.length; i++) {
            areaOfChars = areaOfChars.replace(wordsToReplace[0],wordsToReplace[1])
        }
        console.log(areaOfChars);
    }
}
deciphering(['wkhfn#|rx#jhqfkr#phf#exw#|rxu#uholf#lv#khfgohg#lq#hfrwkhu#sohfhw',
    'ec an'])