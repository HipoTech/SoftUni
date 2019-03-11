function charInRange(start, end) {
    let charToNumberStart = Math.min(start.charCodeAt(0), end.charCodeAt(0));
    let charToNumberEnd = Math.max(start.charCodeAt(0), end.charCodeAt(0));
    let ans = '';
    for (let i = charToNumberStart + 1; i < charToNumberEnd; i++) {
        ans += String.fromCharCode(i) + ' ';
    }
    console.log(ans)
}
charInRange('C', '#')