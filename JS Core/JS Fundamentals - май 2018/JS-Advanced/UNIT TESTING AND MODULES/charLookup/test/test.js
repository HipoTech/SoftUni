const lookupChar = require('../lookupChar').lookupChar;
const expect = require('chai').expect;


describe('Invalid Tests', function () {
    it('if first param is not a strung and second is not a nuber', function () {
        expect(lookupChar(1, 'not a number')).to.equal(undefined, 'The result shood be undefined')
    })
    it('if first param is not a strung and second is not a nuber', function () {
        expect(lookupChar('not a number')).to.equal(undefined, 'The result shood be undefined')
    })
    it('if first param is not a strung and second is not a nuber', function () {
        expect(lookupChar(9)).to.equal(undefined, 'The result shood be undefined')
    })
    it('if first param is not a strung and second is not a nuber', function () {
        expect(lookupChar(-1, -1)).to.equal(undefined, 'The result shood be undefined')
    })
    it('if first param is a strung and second is a string', function () {
        expect(lookupChar('string', 'not a number')).to.equal(undefined, 'The result shood be undefined')
    })
    it('if first param is a strung and second is a string', function () {
        expect(lookupChar('string', 1.1)).to.equal(undefined, 'The result shood be undefined')
    })
    it('Invalid index acording to the length of the string', function () {
        expect(lookupChar('one', 3)).to.equal('Incorrect index', 'The result shood be Incorrect index')
    })
    it('Negativ index acording to the length of the string', function () {
        expect(lookupChar('one', -3)).to.equal('Incorrect index', 'The result shood be Incorrect index')
    })
    it('Negativ index acording to the length of the string', function () {
        expect(lookupChar('one', 1, 9)).to.equal('n', 'The result shood be Incorrect index')
    })

})

describe('Valid Input Tests', function () {
    it('If input parapeters are coeerect', function () {
        expect(lookupChar('one', 1)).to.equal('n', 'The result shood be "n"')
    })
    it('If input parapeters are coeerect', function () {
        expect(lookupChar('i', 0)).to.equal('i', 'The result shood be "i"')
    })
    it('If input parapeters are coeerect', function () {
        expect(lookupChar('aaaaaa', 5)).to.equal('a', 'The result shood be "a"')
    })
})