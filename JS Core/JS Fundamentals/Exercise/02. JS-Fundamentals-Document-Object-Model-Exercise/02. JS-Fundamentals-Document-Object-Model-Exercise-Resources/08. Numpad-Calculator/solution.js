function solve() {
    let btn = document.querySelectorAll('button');
    let expressionOutput = document.querySelector('#expressionOutput');
    let result = document.querySelector('#resultOutput');
    let firstDigit = 0;
    let operation = '';

    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', calculate);
    }
    console.log(btn);

    function calculate() {
        let currentBtn = this.value;
        switch (currentBtn) {
            case '1':
                expressionOutput.textContent += currentBtn;
                break;
            case '2':
                expressionOutput.textContent += currentBtn;
                break;
            case '3':
                expressionOutput.textContent += currentBtn;
                break;
            case '4':
                expressionOutput.textContent += currentBtn;
                break;
            case '5':
                expressionOutput.textContent += currentBtn;
                break;
            case '6':
                expressionOutput.textContent += currentBtn;
                break;
            case '7':
                expressionOutput.textContent += currentBtn;
                break;
            case '8':
                expressionOutput.textContent += currentBtn;
                break;
            case '9':
                expressionOutput.textContent += currentBtn;
                break;
            case '0':
                expressionOutput.textContent += currentBtn;
                break;
            case '.':
                expressionOutput.textContent += currentBtn;
                break;
            case '/':
                firstDigit = Number(expressionOutput.textContent);
                expressionOutput.textContent += ' ' + currentBtn + ' ';
                operation = '/'
                break;
            case '*':
                firstDigit = Number(expressionOutput.textContent);
                expressionOutput.textContent += ' ' + currentBtn + ' ';
                operation = '*'
                break;
            case '-':
                firstDigit = Number(expressionOutput.textContent);
                expressionOutput.textContent += ' ' + currentBtn + ' ';
                operation = '-'
                break;
            case '+':
                firstDigit = Number(expressionOutput.textContent);
                expressionOutput.textContent += ' ' + currentBtn + ' ';
                operation = '+'
                break;
            case 'Clear':
                expressionOutput.textContent = '';
                result.textContent = ''
                break;
            case '=':
                let firstRow = expressionOutput.textContent;
                calculateResult(firstRow, firstDigit, operation);
                break;
            default:
                break;
        }

        function calculateResult(firstRow, firstDigit, operation) {
            let secondDigit = Number(firstRow.replace(String(firstDigit + ' ' + operation + ' '), ''));

            if (firstRow.replace(String(firstDigit + ' ' + operation + ' '), '') === '') {
                result.textContent = 'NaN'
            } else {
                switch (operation) {
                    case '/':
                        result.textContent = firstDigit / secondDigit;
                        break;
                    case '*':
                        result.textContent = firstDigit * secondDigit;
                        break;
                    case '+':
                        result.textContent = firstDigit + secondDigit;
                        break;
                    case '-':
                        result.textContent = firstDigit - secondDigit;
                        break;
                    default:

                        break;
                }
            }


        }

    }
}