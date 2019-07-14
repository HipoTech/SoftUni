function extractANonDecreasingSubsequenceFromAnArray(array) {
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= max) {
            console.log(array[i]);
            max = array[i];
        }
    }
}
extractANonDecreasingSubsequenceFromAnArray([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
])