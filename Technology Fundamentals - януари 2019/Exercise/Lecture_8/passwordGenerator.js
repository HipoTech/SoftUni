function passwordGenerator(array) {
    String.prototype.reverse = function () {
        return this.split('').reverse().join('');
    }
    let passWord = array[0] + array[1];
    let pattern = /[aeiuo]/g;
    let arrayOfNewSimbols = array[2].split('').map(x => x.toUpperCase());
    let NewPassWord = '';
    function changeSimbol(array, passWord) {
        let selectionArray = pattern.exec(passWord);
        if (selectionArray != null) {
            if (arrayOfNewSimbols.length > 0) {
                passWord = passWord.replace(selectionArray, arrayOfNewSimbols.shift());
                changeSimbol(array, passWord);
            } else {
                arrayOfNewSimbols = array[2].split('').map(x => x.toUpperCase());
                passWord = passWord.replace(selectionArray, arrayOfNewSimbols.shift());
                changeSimbol(array, passWord)
            }
        } else {
            NewPassWord = passWord;
        }
    }
    changeSimbol(array, passWord);
    console.log(`Your generated password is ${NewPassWord.reverse()}`);
}
passwordGenerator(['easymoneyeazylife', 'atleasttencharacters', 'absolute'])