function reception(params) {
    let efficionsy = Number(params[0]) + Number(params[2]) + Number(params[1]);
    let students = Number(params[3]);
    let time = 0;
    time = Math.ceil(students / efficionsy);
    for (let i = 1; i <= time; i++) {
        if (i % 4 === 0) {
            time += 1;
        }
    }
    console.log(`Time needed: ${time}h.`);
}
reception([1,
    1,
    1,
    40])