const expect = require('chai').expect;
const BookStore = require('../02. Book Store_Ресурси');

describe('testPzza', function () {
    describe('testEmptyClass', function () {
        it('testProperties', function () {
            const book = new BookStore();
            expect(book.books).to.deep.equal([], 'emptyArray of users')
        });
        it('testProperties', function () {
            const book = new BookStore();
            expect(book._workers).to.deep.equal([], 'emptyArray of users')
        });
        
    })
    describe('Functions', function () {
       
    })
})