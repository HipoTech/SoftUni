function longuestAndShortest(inputString) {
    let arreyOfWords = inputString.split(' ').filter(x=>x!=='');

    let printLonguest = longuestWordFinder(arreyOfWords);
    let printShortest = shortestWordFinder(arreyOfWords);

    console.log(`Longest -> ${printLonguest}`);
    console.log(`Shortest -> ${printShortest}`);

    function longuestWordFinder(arreyOfWords) {
        let maxLetters = 0;
        let wordToPrint ='';
        for (let word of arreyOfWords) {
            let wordAsArrey = word.split('');
            let wordNoSigns = '';
            let counter = 0;
            for (let letter of wordAsArrey) {

                let char = letter.charCodeAt();
                if (char >= 64 && char <= 90 || char >= 97 && char <= 122 || char >= 48 && char <= 57) {
                    counter++;
                    wordNoSigns += letter;
                }
            }
            if (counter > maxLetters) {
                wordToPrint = '';
                maxLetters = counter;
                wordToPrint += wordNoSigns;
            }
        }
        return wordToPrint;
    }
    function shortestWordFinder(arreyOfWords) {
        let minLetters = Number.MAX_SAFE_INTEGER;
        let wordToPrint ='';
        for (let word of arreyOfWords) {
            let wordAsArrey = word.split('');
            let wordNoSigns = '';
            let counter = 0;
            for (let letter of wordAsArrey) {

                let char = letter.charCodeAt();
                if (char >= 64 && char <= 90 || char >= 97 && char <= 122 || char >= 48 && char <= 57) {
                    counter++;
                    wordNoSigns += letter;
                }
            }
            if (counter < minLetters) {
                wordToPrint = '';
                minLetters = counter;
                wordToPrint += wordNoSigns;
            }
        }
        return wordToPrint;
    }
}

longuestAndShortest('a  bb c');