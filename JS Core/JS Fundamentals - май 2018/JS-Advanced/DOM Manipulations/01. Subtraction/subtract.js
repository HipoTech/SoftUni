function subtract() {
    const first = Number(document.querySelector('#firstNumber').value);
    const second = Number(document.querySelector('#secondNumber').value);
    const ans = document.querySelector('#result');
    ans.textContent = first - second;
}