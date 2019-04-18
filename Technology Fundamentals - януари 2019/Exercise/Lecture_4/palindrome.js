function palindrome(arr) {
    let revers = '';
    for (let i = 0; i < arr.length; i++) {
        let origial = String(arr[i]);
        let originalLen = String(origial).length;
        revers = '';
        for (let j = originalLen - 1; j >= 0; j--) {
            revers += origial[j];


        }
        if (revers === origial) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}
palindrome([123, 323, 421, 121])