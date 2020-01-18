function cutAndReverse(string) {
    String.prototype.reverse = function () {
        return this.split('').reverse().join('');
    }
    let sentance = string;
    let len = sentance.length;
    let firstHalf = sentance.slice(0, len / 2).reverse();
    let secondHalf = sentance.slice(len / 2).reverse();
    console.log(firstHalf);
    console.log(secondHalf);
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')