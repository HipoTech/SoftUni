function passwordValidator(password) {
    let pass = String(password);
    let passArrey = pass.split('');

    let length = lengthCheck(passArrey);
    let letterAndDigit = letterAndDigitCheck(passArrey);
    let digit = digitCheck(passArrey);

    if (length === true && letterAndDigit === true && digit === true) {
        console.log('Password is valid');
    }

    function lengthCheck(passArrey) {
        if (passArrey.length <= 6 || passArrey.length >= 10) {
            console.log('Password must be between 6 and 10 characters');
            return false;
        }
        return true;
    }

    function letterAndDigitCheck(passArrey) {
        for (let simbol of passArrey) {
            let sumbolToChar = simbol.charCodeAt();
            if (sumbolToChar <= 47 || sumbolToChar >= 58 && sumbolToChar <= 64 || sumbolToChar >= 91 && sumbolToChar <= 96 || sumbolToChar >= 123) {
                console.log('Password must consist only of letters and digits');
                return false;
            }
        }
        return true;
    }

    function digitCheck(passArrey) {
        let counterOfDigits = 0;
        for (let simbol of passArrey) {
            let num = Number(simbol)
            if (isNaN(num)) {

            } else {
                counterOfDigits++;
            }
        }
        if (counterOfDigits >= 2) {
            return true;
        } else {
            console.log('Password must have at least 2 digits');
            return false;
        }
    }
}

passwordValidator('logIn')