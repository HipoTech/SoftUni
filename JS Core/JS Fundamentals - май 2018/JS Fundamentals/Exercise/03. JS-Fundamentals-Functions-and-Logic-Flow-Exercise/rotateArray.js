function rotateArea(input) {
    let ratations = input.pop();
    ratations = ratations % input.length;
    for (let i = 0; i < ratations; i++) {
        input.unshift(input.pop());
    }
    console.log(input.join(' '));
}
rotateArea(['Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15'
])