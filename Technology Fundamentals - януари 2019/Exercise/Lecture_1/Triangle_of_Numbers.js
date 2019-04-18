function triangle_of_Numbers(numberOfRows) {
    let row = '';
    for (let i = 1; i <= numberOfRows; i++) {
        for (let j = 1; j <= i; j++) {
            row += ` ${i}`
        }
        console.log(row)
        row = '';
    }
}
triangle_of_Numbers(3)