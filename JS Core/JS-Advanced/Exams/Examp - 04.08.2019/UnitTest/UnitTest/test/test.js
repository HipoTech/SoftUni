const expect = require('chai').expect;
const BookStore = require('../02. PizzUni_Ресурси');

describe('testPzza', function () {
    describe('testEmptyClass', function () {
        it('testProperties', function () {
            const book = new BookStore('Store');
            expect(book.name).to.deep.equal('Store', 'emptyArray of books');         
        });
        it('testProperties', function () {
            const book = new BookStore('Store');
            expect(book._workers).to.deep.equal([], 'emptyArray of _workers');
        });
        it('testProperties', function () {
            const book = new BookStore('Store');
            expect(book.books).to.deep.equal([], 'emptyArray of _workers');
        });
        it('testStockBooks', function () {
            const book = new BookStore('Store');
            book.stockBooks(['1-1', '2-2']);
            expect(book.books).to.deep.equal([{
                    "author": "1",
                    "title": "1"
                },
                {
                    "author": "2",
                    "title": "2"
                }
            ], 'stockBooks')
        });

    })
    describe('Functions', function () {
        it('hire', function () {
            const book = new BookStore('Store');
            book.stockBooks(['1-1', '2-2']);
            expect(book.hire('Pesho', 'Idiot')).to.equal('Pesho started work at Store as Idiot', 'Pesho');
        });
        it('hire', function () {
            const book = new BookStore('Store');
            book.stockBooks(['1-1', '2-2']);
            book.hire('Pesho', 'Idiot');
            expect(() => book.hire('Pesho', 'Idiot')).to.throw('This person is our employee', 'Pesho');
        });
        it('fire', function () {
            const book = new BookStore('Store');
            book.stockBooks(['1-1', '2-2']);
            book.hire('Pesho', 'Idiot');
            expect(() => book.fire('Ivan', 'Idiot')).to.throw('Ivan doesn\'t work here', 'Ivan');
        });
        it('fire', function () {
            const book = new BookStore('Store');
            book.stockBooks(['1-1', '2-2']);
            book.hire('Pesho', 'Idiot');
            expect(book.fire('Pesho', 'Idiot')).to.equal('Pesho is fired', 'Pesho');
        });
        it('sellBook', function () {
            const book = new BookStore('Store');
            book.stockBooks(['1-1', '2-2']);
            book.hire('Pesho', 'Idiot');
            expect(()=>book.sellBook('3', 'Idiot')).to.throw('This book is out of stock', 'out of stock');
        });
        it('sellBook', function () {
            const book = new BookStore('Store');
            book.stockBooks(['1-1', '2-2']);
            book.hire('Pesho', 'Idiot');
            expect(()=>book.sellBook('2', 'Idiot')).to.throw('Idiot is not working here', 'out of stock');
        });
        it('sellBook', function () {
            const book = new BookStore('Store');
            book.stockBooks(['1-1', '2-2']);
            book.hire('Pesho', 'Idiot');
            expect(book.sellBook('2', 'Pesho')).to.equal(undefined, 'returns undefined');
        });
        it('sellBook', function () {
            const book = new BookStore('Store');
            book.stockBooks(['1-1', '2-2']);
            book.hire('Pesho', 'Idiot');
            book.sellBook('2', 'Pesho');    
            expect(book._workers[0].booksSold).to.equal(1, 'Pesho count 1');
        });
        it('sellBook', function () {
            const book = new BookStore('Store');
            book.stockBooks(['1-1', '2-2']);
            book.hire('Pesho', 'Idiot');
            book.sellBook('2', 'Pesho');    
            expect(book.printWorkers()).to.equal('Name:Pesho Position:Idiot BooksSold:1', 'Pesho count 1');
        });
    })
})