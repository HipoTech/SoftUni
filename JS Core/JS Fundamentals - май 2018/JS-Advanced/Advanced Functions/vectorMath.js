let result = (function (x, y) {
    let result = {

        'add': (x, y) => {
            return [x[0] + y[0], y[1] + x[1]];
        },
        'multiply': (x, y) => {
            return [x[0] * y, x[1] * y];
        },
        'length': (x) => {
            return Math.sqrt(x[0] ** 2 + x[1] ** 2);
        },
        'dot': (x, y) => {
            return x[0] * y[0] + x[1] * y[1];
        },
        'cross': (x, y) => {
            return x[0] * y[1] - x[1] * y[0];
        },
    }
    return result;
})()
console.log(result.dot([2, 3], [2, -1]));

