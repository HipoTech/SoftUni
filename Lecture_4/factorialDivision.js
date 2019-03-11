function fctorialDivision(firstNumber,secondNumber){
    let firstFactoriel = factorialOf(firstNumber);
    let secondFactoriel = factorialOf(secondNumber);

    console.log((firstFactoriel/secondFactoriel).toFixed(2));

    function factorialOf(number) {
        let ansur = number;
        for (let i = number - 1; i > 1; i--) {
            ansur *= i;
        }
        return ansur.toFixed(2);
    }
}
fctorialDivision(6,2);