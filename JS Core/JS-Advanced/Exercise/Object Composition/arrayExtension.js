let myArray = [1, 2, 3];

(function () {

    Array.prototype.last = function () {
        return this[this.length - 1];
    }
    Array.prototype.skip = function (n) {
        return this.slice(n);
    }
    Array.prototype.take = function (n) {
        return this.slice(0, n);
    }
    Array.prototype.sum = function () {
        return this.reduce((b, e) => b + e, 0);
    }
    Array.prototype.average = function () {
        return this.reduce((b, e) => b + e, 0) / this.length;
    }
})()
console.log(myArray);
console.log(myArray.length);
console.log(myArray.skip(1));
console.log(myArray.take(2));
console.log(myArray.sum());
console.log(myArray.average());
