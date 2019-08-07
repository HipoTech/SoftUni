const expect = require('chai').expect;
const PizzUni = require('../02. PizzUni_Ресурси');

describe('testPzza', function () {
    describe('testEmptyClass', function () {
        it('testProperties', function () {
            const pizzaForTest = new PizzUni();
            expect(pizzaForTest.registeredUsers).to.deep.equal([], 'emptyArray of users')
        });
        it('testProperties', function () {
            const pizzaForTest = new PizzUni();
            expect(pizzaForTest.availableProducts.pizzas).to.deep.equal(['Italian Style', 'Barbeque Classic', 'Classic Margherita'], 'pizzas')
        });
        it('testProperties', function () {
            const pizzaForTest = new PizzUni();
            expect(pizzaForTest.availableProducts).to.deep.equal({
                pizzas: ['Italian Style', 'Barbeque Classic', 'Classic Margherita'],
                drinks: ['Coca-Cola', 'Fanta', 'Water']
            }, 'drinks')
        });
        it('testProperties', function () {
            const pizzaForTest = new PizzUni();
            expect(pizzaForTest.availableProducts.drinks).to.deep.equal(['Coca-Cola', 'Fanta', 'Water'], 'drinks')
        });
        it('testProperties', function () {
            const pizzaForTest = new PizzUni();
            expect(pizzaForTest.orders).to.deep.equal([], 'emptyArray of orders')
        });
    })
    describe('Functions', function () {
        it('testProperties', function () {
            const pizzaForTest = new PizzUni();
            expect(pizzaForTest.registerUser('email')).to.deep.equal({ email: 'email', orderHistory: [] }, 'sucsesfuly registered')
            expect(() => pizzaForTest.registerUser('email')).to.throw('This email address (email) is already being used!', 'emailInUse')
            expect(() => pizzaForTest.makeAnOrder('email', 'a', 'Water')).to.throw('You must order at least 1 Pizza to finish the order.', 'notFromTheList')
            expect(pizzaForTest.makeAnOrder('email', 'Italian Style', 'Water')).to.equal(0, 'ordered1')
            expect(pizzaForTest.registeredUsers[0].orderHistory[0]).to.deep.equal({
                orderedDrink: "Water",
                orderedPizza: "Italian Style"
            });
            expect(pizzaForTest.makeAnOrder('email', 'Italian Style', 'Water')).to.equal(1, 'ordered2')
            expect(() => pizzaForTest.makeAnOrder('a', 'Italian Style', 'Water')).to.throw('You must be registered to make orders!', 'notRegistered')

            expect(pizzaForTest.completeOrder()).to.deep.equal({
                orderedPizza: 'Italian Style',
                orderedDrink: 'Water',
                email: 'email',
                status: 'completed'
            }, 'complateOrder');
            expect(pizzaForTest.detailsAboutMyOrder(2)).to.equal(undefined, 'indexFailed')
            expect(pizzaForTest.detailsAboutMyOrder(1)).to.equal('Status of your order: pending', 'correctIndex')
            expect(pizzaForTest.doesTheUserExist('email')).to.be.a('object', 'correctIndex')
        });
    })
})