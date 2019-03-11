function maxSequenceofEqualElements(arr) {
    let arreyToString = arr[0];
    let cleanArrey = arreyToString.split(" ");
    let end = 0;
    let counter = 1;
    let max = 0;
    let conteiner = '';
    for (let i = cleanArrey.length - 1; i >= 0; i--) {
        if (cleanArrey[i] === cleanArrey[i - 1]) {
            counter+=1;
            if (max <= counter) {
                max = counter;
                end = i-1;
            }
        } else {
            counter = 1;
        }
    }
    for (let j = end; j <= end + max-1; j++) {
        if (j===end + max-1) {
            conteiner += cleanArrey[j];
        }else{
            conteiner += cleanArrey[j] + ' ';
        }

    }
    console.log(conteiner);
}

maxSequenceofEqualElements(['0 1 1 5 2 2 6 3 3'])