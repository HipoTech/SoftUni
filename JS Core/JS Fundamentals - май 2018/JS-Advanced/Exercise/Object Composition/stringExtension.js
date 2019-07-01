let str = 'my string';

(function () {
    String.prototype.ensureStart = function (addition) {
        let flag = false;
        for (let i = 0; i < addition.length; i++) {
            if (this[i] !== addition[i]) {
                flag = true;
            }
        }

        if (flag) {
            return `${addition}` + this.toString();
        } else {
            return this.toString();
        }
    }

    String.prototype.ensureEnd = function (addition) {
        let len = addition.length;
        if (this.slice(this.length - len) !== addition) {
            return this.toString() + `${addition}`;
        } else {
            return this.toString();
        }
    }

    String.prototype.isEmpty = function () {
        if (`${this}` === '') {
            return true;
        }
        return false;
    }

    String.prototype.truncate = function (number) {
        if (number < 4) {
            return '.'.repeat(number)
        }

        if (this.length <= number) {
            return this.toString()
        }

        let index = this.toString()
            .substr(0, number - 2)
            .lastIndexOf(' ')

        if (index === -1) {
            return `${this.substr(0, number - 3)}...`
        } else {
            return `${this.substr(0, index)}...`
        }
    }

    String.format = function (string, ...words) {
        words.forEach((p, i) => (string = string.replace(`{${i}}`, p)))
        return string.toString()
    }
})()

str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(1);
// str = str.truncate(8);
// str = str.truncate(4);
// str = str.truncate(2);
// str = String.format('The {0} {1} fox',
//     'quick', 'brown');
// str = String.format('jumps {0} {1}',
//     'dog');
console.log(str);