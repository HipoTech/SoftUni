let addIt = (function () {
    let sum = 0;

    return function add(number) {
        sum += number;
        add.toString = function (params) {
            return sum;
        }
        return add;
    }
})()
console.log(addIt(1)(2).toString());

