function sorting(inputArea) {
    let sortedArrey = inputArea.sort((a, b) => b - a);
    let ansArrey = [];
    let len = inputArea.length;

    for (let i = 0; i <len ; i++) {
        if (i % 2 === 0) {
            ansArrey.push(sortedArrey.shift());
        }else{
            ansArrey.push(sortedArrey.pop());
        }
    }
    console.log(ansArrey.join(' '));
}

sorting([0, 21,0,99999]);