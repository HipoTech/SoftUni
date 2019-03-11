function oddAndEvenSum(input) {
    let odd = 0;
    let even = 0;
    let arrey = String(input);
    let numberLen = arrey.length;
    // let toNumber = Number(input);
    for (let i = 0; i < numberLen; i++) {
        if (Number(arrey[i]) % 2 === 0) {
            even += Number(arrey[i]);
        } else {
            odd += Number(arrey[i]);
        }
    }
    console.log(`Odd sum = ${odd}, Even sum = ${even}`)
}
oddAndEvenSum(3495892137259234)