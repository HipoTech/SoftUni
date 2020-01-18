function emoticonFinder(input) {
    let textArea = input.split(' ');
    for (let segment of textArea) {
        if (segment.length === 2 && segment.startsWith(':')) {
            console.log(segment);
        }
    }
}
emoticonFinder('There are so many emoticons nowad:ays :2 :P I have many ideas :O what input to place here :)')