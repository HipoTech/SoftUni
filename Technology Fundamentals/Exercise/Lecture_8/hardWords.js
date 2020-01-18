function hardWords(area) {
    let letter = area[0].replace('\\', '');
    let dictionary = area[1];

    function placeAWord(letter, dictionary) {
        let pattern = /[_]+/;
        let len = pattern.exec(letter)[0].length;
        dictionary.forEach(word => {
            if (word.length === len) {
                letter = letter.replace('_'.repeat(word.length), word);
            }
        });
        let test = pattern.exec(letter);
        if (test != null) {
            placeAWord(letter, dictionary);
        } else {
            console.log(letter);
        }
    }
    let filledLetter = placeAWord(letter, dictionary);
}
hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)