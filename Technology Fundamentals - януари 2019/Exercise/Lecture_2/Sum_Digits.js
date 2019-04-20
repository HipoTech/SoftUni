function sum_Digits(number) {
    let sum = 0;
    let a = String(number);
    let len = a.length;
    for (let i = 0; i < len; i++) {
        sum += +a[i];
    }
    console.log(+sum);
}
sum_Digits(245678)