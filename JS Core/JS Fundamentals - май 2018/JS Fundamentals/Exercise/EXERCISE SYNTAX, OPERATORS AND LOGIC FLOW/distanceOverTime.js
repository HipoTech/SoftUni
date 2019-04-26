function distanceOverTime(params) {
    let [firstObject, secondObject, time] = params;
    time /= 3600;
    let ans = firstObject * time - secondObject * time;
    ans = Math.abs(ans);
    ans *= 1000;
    console.log(ans);
}
distanceOverTime([0, 60, 3600]
)