function calorieObject(params) {
    let obj = {};
    for (let i = 0; i < params.length; i++) {
        if (i % 2 === 0) {
            obj[params[i]] = Number(params[i + 1]);
        }
    }
    console.log(obj);

}
calorieObject(['Yoghurt', 48, 'Rise', 138, 'Apple', 52])