function gcd(a, b) {
    let gcdAns = 0;
    for (let i = 0; i <= Math.min(a, b); i++) {
        if (a % i === 0 && b % i === 0) {
            gcdAns = i;
        }
    }
    console.log(gcdAns);
};
gcd(15, 5)