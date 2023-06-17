const expect = require('chai').expect;
const createCalculator = require('./07_add_subtract');

describe('createCalculator', function() {
    it('shour return 5', function () {
        let a = createCalculator();

        a.add(5);

        let result = a.get();

        expect(result).to.be.equal(5);
    })

    it('shour return 0', function () {
        let a = createCalculator();

        a.add(0);

        let result = a.get();

        expect(result).to.be.equal(0);
    })

    it('shour return -5', function () {
        let a = createCalculator();

        a.subtract(5);

        let result = a.get();

        expect(result).to.be.equal(-5);
    })

    it('shour return 0', function () {
        let a = createCalculator();

        a.subtract(5);
        a.add(5);


        let result = a.get();

        expect(result).to.be.equal(0);
    })

    it('shour return 1', function () {
        let a = createCalculator();

        a.subtract(5);
        a.add(6);


        let result = a.get();

        expect(result).to.be.equal(1);
    })

    it('shour return 1', function () {
        let a = createCalculator();

        a.subtract('5');
        a.add(6);


        let result = a.get();

        expect(result).to.be.equal(1);
    })

    it('shour return 1', function () {
        let a = createCalculator();

        a.subtract('5');
        a.add('6');


        let result = a.get();

        expect(result).to.be.equal(1);
    })

    it('shour return 1', function () {
        let a = createCalculator();

        a.subtract(5);
        a.add(6);


        let result = a.get();

        expect(result).to.be.equal(1);
    })

    it('shour return NaN', function () {
        let a = createCalculator();

        a.subtract('h');
        a.add(6);


        let result = a.get();

        expect(result).to.be.NaN;
    })
})