const mathEnforcer = require('../mathEnforcer').mathEnforcer;
const expect = require('chai').expect;

describe('Tests', function () {
    describe('addFive Test', function () {
        it('positiv', function () {
            expect(mathEnforcer.addFive(5)).to.equal(10, '5 + 5');
        });
        it('negativ', function () {
            expect(mathEnforcer.addFive(-10)).to.equal(-5, '5 + 5');
        });
        it('decimal', function () {
            expect(mathEnforcer.addFive(1.1)).to.equal(6.1, '5 + 5');
        });
        it('string', function () {
            expect(mathEnforcer.addFive('string')).to.equal(undefined, 'if NaN --> undefined');
        });
        it('area', function () {
            expect(mathEnforcer.addFive([])).to.equal(undefined, 'if NaN --> undefined');
        });
        it('object', function () {
            expect(mathEnforcer.addFive({})).to.equal(undefined, 'if NaN --> undefined');
        });
    });
    describe('subtractTen Test', function () {
        it('positive', function () {
            expect(mathEnforcer.subtractTen(15)).to.equal(5, '5 - 10');
        });
        it('negative ansuer', function () {
            expect(mathEnforcer.subtractTen(5)).to.equal(-5, '5 - 10');
        });
        it('negative input', function () {
            expect(mathEnforcer.subtractTen(-5)).to.equal(-15, '5 - 10');
        });
        it('decimal input', function () {
            expect(mathEnforcer.subtractTen(20.1)).to.equal(10.100000000000001, '5 - 10');
        });
        it('string', function () {
            expect(mathEnforcer.subtractTen('string')).to.equal(undefined, 'if NaN --> undefined');
        });
        it('array', function () {
            expect(mathEnforcer.subtractTen([1, 2])).to.equal(undefined, 'if NaN --> undefined');
        });
        it('object', function () {
            expect(mathEnforcer.subtractTen({})).to.equal(undefined, 'if NaN --> undefined');
        });
    });
    describe('sum Test', function () {
        it('positiv', function () {
            expect(mathEnforcer.sum(1, 2)).to.equal(3, '5 - 10');
        });
        it('negative', function () {
            expect(mathEnforcer.sum(-1, -2)).to.equal(-3, '5 - 10');
        });
        it('decimal', function () {
            expect(mathEnforcer.sum(1.1, 2.2)).to.equal(3.3000000000000003, '5 - 10');
        });
        it('string + number', function () {
            expect(mathEnforcer.sum('string', 1)).to.equal(undefined, 'if NaN --> undefined');
        });
        it('number + string', function () {
            expect(mathEnforcer.sum(1, 'string')).to.equal(undefined, 'if NaN --> undefined');
        });
        it('string + string', function () {
            expect(mathEnforcer.sum('string', 'string')).to.equal(undefined, 'if NaN --> undefined');
        });
    });
})