const expect = require('chai').expect;
const isOddOrEven = require('../evanOrOdd').isOddOrEven;
// console.log(isOddOrEven('uuu'));

describe('testing for values', function () {
    it('3 chars ', function () {
        expect(isOddOrEven('sss')).to.equal('odd', 'some text')
    }),
        it('4 chars ', function () {
            expect(isOddOrEven('ssss')).to.equal('even', 'some text')
        })
})
describe('testing without values', function () {
    it('empty value ', function () {
        expect(isOddOrEven()).to.equal(undefined, 'some text')
    }),
        it('single number ', function () {
            expect(isOddOrEven(1)).to.equal(undefined, 'some text')
        }),
        it('two numbers ', function () {
            expect(isOddOrEven(1, 2)).to.equal(undefined, 'some text')
        })
})