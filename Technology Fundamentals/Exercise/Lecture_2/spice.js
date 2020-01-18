function spice(yield) {
    let yieldTotal = 0;
    let days = 0;
    while (yield >= 100) {
        yieldTotal += (yield - 26);
        yield -= 10;
        days++;
        if (yield < 100) {
            yieldTotal -= 26;
        }
    }
    console.log(days);
    console.log(yieldTotal);
}
spice(111)