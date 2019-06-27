(function lengthOfString() {
    class Stringer {
        constructor(innerString, innerLength) {
            this.innerString = innerString;
            this.innerLength = innerLength;
        }
        increase(length) {
            this.innerLength += length;
        }
        decrease(length) {
            if (this.innerLength - length <= 0) {
                this.innerLength = 0;
            } else {
                this.innerLength -= length;
            }
        }
        toString() {
            let string = [];
            let newString = this.innerString.split('');

            for (let i = 0; i < this.innerLength; i++) {
                string.push(newString[i]);
            }
            if (this.innerLength >= this.innerString.length) {
                return string.join('');
            }
            return string.join('') + '...';
        }
    }
    let victor = new Stringer('Victor', 6)
    console.log(victor.toString())
    
    let test = new Stringer('Test', 5)
    console.log(test.toString()) // Test
    
    test.decrease(3)
    console.log(test.toString()) // Te...
    
    test.decrease(5)
    console.log(test.toString()) // ...
    
    test.increase(4)
    console.log(test.toString()) // Test
    

})()

