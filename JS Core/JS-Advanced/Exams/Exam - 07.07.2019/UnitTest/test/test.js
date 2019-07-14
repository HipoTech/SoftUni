const expect = require('chai').expect;
const PizzUni = require('../02. PizzUni_Ресурси');

describe('test1', function () {
    it('test', function () {
        let result = new PizzUni();
        expect(result.registeredUsers).to.deep.equal([], 'sadads');
    })
    it('test', function () {
        let result = new PizzUni();
        expect(result.availableProducts).to.deep.equal({
            pizzas: ['Italian Style', 'Barbeque Classic', 'Classic Margherita'],
            drinks: ['Coca-Cola', 'Fanta', 'Water']
        }, 'sadads');
    })
    it('test', function () {
        let result = new PizzUni();
        expect(result.orders).to.deep.equal([], 'sadads');
    })
    it('test', function () {
        let result = new PizzUni();
        expect(result.doesTheUserExist('email')).to.deep.equal(undefined, 'sadads');
    })
    it('test', function () {
        let result = new PizzUni();
        expect(result.registerUser('email')).to.deep.equal({ email: 'email', orderHistory: [] }, 'sadads');
    })
    it('test', function () {
        let result = new PizzUni();
        result.registerUser('email@asd.vf')
        expect(result.makeAnOrder('email', 'orderedPizza', 'orderedDrink')).to.deep.equal({ email: 'email', orderHistory: [] }, 'sadads');
    })
    it('test', function () {
        let result = new PizzUni();
        expect(() => result.makeAnOrder('email', 'orderedPizza', 'orderedDrink')).to.throw( 'You must be registered to make orders!', 'sadads');
    })
    it('test', function () {
        let result = new PizzUni();
        expect(result.detailsAboutMyOrder('email')).to.deep.equal(undefined, 'sadads');
    })
    it('test', function () {
        let result = new PizzUni();
        expect(result.completeOrder()).to.deep.equal(undefined, 'sadads');
    })
})