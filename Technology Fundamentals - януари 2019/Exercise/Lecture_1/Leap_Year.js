function leapYear(input) {
    if (input % 100 !== 0 && input % 4 === 0) {
        console.log('yes')
    } else if (input % 400 === 0) {
        console.log('yes')
    } else {
        console.log('no')
    }
}
leapYear(2016)