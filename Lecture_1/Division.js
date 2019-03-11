function Division(digit) {
    if (digit % 10 === 0) {
        console.log('The number is divisible by 10');
    } else if (digit % 7 === 0) {
        console.log('The number is divisible by 7');
    } else if (digit % 6 === 0) {
        console.log('The number is divisible by 6');
    } else if (digit % 3 === 0) {
        console.log('The number is divisible by 3');
    } else if (digit % 2 === 0) {
        console.log('The number is divisible by 2');
    }else {
        console.log('Not divisible');
    }

}

Division(1643)