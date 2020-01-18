function Calculator(leftOperand, operator, rightOperand) {
    this.leftOperand = Number(leftOperand);
    this.operator = operator;
    this.rightOperand = Number(rightOperand);

    this.calculateResult = function () {
        let result = 0;

        switch (this.operator) {
            case "+":
                result = this.leftOperand + this.rightOperand;
                break;
            case "-":
                result = this.leftOperand - this.rightOperand;
                break;
            case "*":
                result = this.leftOperand * this.rightOperand;
                break;
            case "/":
                result = this.leftOperand / this.rightOperand;
                break;

            default:
                break;
        }
        return result;
    }
}

module.exports = Calculator;