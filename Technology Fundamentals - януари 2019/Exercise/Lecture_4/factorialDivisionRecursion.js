function fctorialDivision(firstNumber,secondNumber) {
    let ans = factorialOf(firstNumber)/factorialOf(secondNumber);
    console.log(ans.toFixed(2));
    function factorialOf(number) {
       if(number === 1){
           return 1;
       }
       return number * factorialOf( number - 1);
    }
}

fctorialDivision(5,2);