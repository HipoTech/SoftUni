function polidroms(params) {
    String.prototype.reverse = function () {
        return this.split('').reverse().join('');
    }
    let sentanceArray = params.map(x => x.split(' ').filter(x => x != ''));
    let palindromes = [];
    sentanceArray.forEach(sentance => {
        let word = sentance.join('')
        if (word === word.reverse() && word !== '' && word !== ' ') {
            palindromes.push(word);
        }
    });
    if (palindromes.length === 0) {
        console.log('No palindromes found');
    } else {
        console.log(palindromes.join(', '));
    }
}
polidroms(["stella wono wallets",
    "not a palindrome","stella wono wallets","stella wono wallets",""])