function addAndRemoveElementsFromAnArray(arr) {
    let n = 1;
    let array = [];
    arr.forEach(element => {
        if (element === 'add') {
            array.push(n);
            n++;
        } else {
            array.pop();
            n++;
        }
    });
    if (array.length === 0) {
        console.log('Empty');
    } else {
        array.forEach(element => {
            console.log(element);
        });
    }
}
addAndRemoveElementsFromAnArray(['add',
    'add',
    'remove',
    'add',
    'add'
])