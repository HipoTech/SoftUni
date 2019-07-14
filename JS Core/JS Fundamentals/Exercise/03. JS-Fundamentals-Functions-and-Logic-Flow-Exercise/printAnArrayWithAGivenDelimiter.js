function printAnArrayWithAGivenDelimiter(arr) {
    let del = arr.pop();
    console.log(arr.join(del));

}
printAnArrayWithAGivenDelimiter(['One',
    'Two',
    'Three',
    'Four',
    'Five',
    '-'
])