function calculator(number, operator, secondNumber) {
    let ansuer;
    switch (operator) {
        case '-':
            ansuer = number - secondNumber;
            break;
        case '+':
            ansuer = number + secondNumber;
            break;
        case '*':
            ansuer = number * secondNumber;
            break;
        case '/':
            ansuer = number / secondNumber;
            break;

        default:
            break;
    }
    console.log(ansuer.toFixed(2))
}
calculator(5, '+', 10)