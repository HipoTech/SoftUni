function Roundiing(digit, number) {
    if (number >= 15) {
        number = 15;
    }
    let roundDigit = digit;
    roundDigit = +parseFloat(roundDigit).toFixed(number)
    console.log(roundDigit);
}
Roundiing(1.99999999, 2)