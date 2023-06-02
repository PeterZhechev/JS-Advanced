const expect = require('chai').expect;
const mathEnforcer = require('./04_math_enforcer.js');

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('shoud return correct result', () => {
            let num = 3;

            let result = mathEnforcer.addFive(num);

            expect(result).to.equal(8);
        })

        it('shoud return correct result', () => {
            let num = 0;

            let result = mathEnforcer.addFive(num);

            expect(result).to.equal(5);
        })

        it('shoud return correct result', () => {
            let num = -3;

            let result = mathEnforcer.addFive(num);

            expect(result).to.equal(2);
        })

        it('shoud return undefined', () => {
            let num = '';

            let result = mathEnforcer.addFive(num);

            expect(result).to.equal(undefined);
        })

        it('shoud return undefined', () => {
            let num = [];

            let result = mathEnforcer.addFive(num);

            expect(result).to.equal(undefined);
        })

        it('shoud return undefined', () => {
            let num = {};

            let result = mathEnforcer.addFive(num);

            expect(result).to.equal(undefined);
        })

        it('shoud return undefined', () => {
            let num = undefined;

            let result = mathEnforcer.addFive(num);

            expect(result).to.equal(undefined);
        })

        it('shoud return undefined', () => {
            let num = null;

            let result = mathEnforcer.addFive(num);

            expect(result).to.equal(undefined);
        })

        it('shoud return undefined', () => {
            let num = '4';

            let result = mathEnforcer.addFive(num);

            expect(result).to.equal(undefined);
        })

        it('shoud return undefined', () => {
            let num = '4';

            let result = mathEnforcer.addFive();

            expect(result).to.equal(undefined);
        })

        it('shoud return correct result', () => {
            let num = 3.33;

            let result = mathEnforcer.addFive(num);

            expect(result).to.closeTo(8.33, 0.01);
        })

        it('shoud return correct result', () => {
            let num = 3.33;

            let result = mathEnforcer.addFive(num);

            expect(result).to.closeTo(8.34, 0.01);
        })
    });

    describe('subtractTen', () => {
        it('shoud return correct result', () => {
            let num = 12;

            let result = mathEnforcer.subtractTen(num);

            expect(result).to.equal(2);
        })

        it('shoud return correct result', () => {
            let num = -12;

            let result = mathEnforcer.subtractTen(num);

            expect(result).to.equal(-22);
        })

        it('shoud return correct result', () => {
            let num = 0;

            let result = mathEnforcer.subtractTen(num);

            expect(result).to.equal(-10);
        })
        
        it('shoud return undefined', () => {
            let num = '1';

            let result = mathEnforcer.subtractTen(num);

            expect(result).to.equal(undefined);
        })

        it('shoud return undefined', () => {
            let num = '';

            let result = mathEnforcer.subtractTen(num);

            expect(result).to.equal(undefined);
        })

        it('shoud return undefined', () => {
            let num = [];

            let result = mathEnforcer.subtractTen(num);

            expect(result).to.equal(undefined);
        })

        it('shoud return undefined', () => {
            let num = {};

            let result = mathEnforcer.subtractTen(num);

            expect(result).to.equal(undefined);
        })

        it('shoud return undefined', () => {
            let num = undefined;

            let result = mathEnforcer.subtractTen(num);

            expect(result).to.equal(undefined);
        })

        it('shoud return undefined', () => {
            let num = undefined;

            let result = mathEnforcer.subtractTen();

            expect(result).to.equal(undefined);
        })

        it('shoud return undefined', () => {
            let num = null;

            let result = mathEnforcer.subtractTen(num);

            expect(result).to.equal(undefined);
        })

        it('shoud return undefined', () => {
            let num = 'hello';

            let result = mathEnforcer.subtractTen(num);

            expect(result).to.equal(undefined);
        })

        it('shoud return correct result', () => {
            let num = 10.5;

            let result = mathEnforcer.subtractTen(num);

            expect(result).to.closeTo(0.5, 0.01);
        })

        it('shoud return correct result', () => {
            let num = 10.5;

            let result = mathEnforcer.subtractTen(num);

            expect(result).to.closeTo(0.501, 0.01);
        })

        it('shoud return correct result', () => {
            let num = 10.5;

            let result = mathEnforcer.subtractTen(num);

            expect(result).to.closeTo(0.499, 0.01);
        })
    });

    describe('sum', () => {
        it('shoud return correct result', () => {
            let num1 = 3;
            let num2 = 4;

            let result = mathEnforcer.sum(num1, num2);

            expect(result).to.equal(7);
        })

        it('shoud return correct result', () => {
            let num1 = -3;
            let num2 = 4;

            let result = mathEnforcer.sum(num1, num2);

            expect(result).to.equal(1);
        })

        it('shoud return correct result', () => {
            let num1 = 3;
            let num2 = -4;

            let result = mathEnforcer.sum(num1, num2);

            expect(result).to.equal(-1);
        })

        it('shoud return correct result', () => {
            let num1 = -3;
            let num2 = -4;

            let result = mathEnforcer.sum(num1, num2);

            expect(result).to.equal(-7);
        })

        it('shoud return correct result', () => {
            let num1 = 3.1;
            let num2 = 4;

            let result = mathEnforcer.sum(num1, num2);

            expect(result).to.closeTo(7.1, 0.01);
        })

        it('shoud return correct result', () => {
            let num1 = 3.1;
            let num2 = 4;

            let result = mathEnforcer.sum(num1, num2);

            expect(result).to.closeTo(7.101, 0.01);
        })

        it('shoud return correct result', () => {
            let num1 = 3.1;
            let num2 = 4;

            let result = mathEnforcer.sum(num1, num2);

            expect(result).to.closeTo(7.09, 0.01);
        })

        it('shoud return undefined', () => {
            let num1 = '3';
            let num2 = 4;

            let result = mathEnforcer.sum(num1, num2);

            expect(result).to.equal(undefined);
        })

        it('shoud return undefined', () => {
            let num1 = 3;
            let num2 = '4';

            let result = mathEnforcer.sum(num1, num2);

            expect(result).to.equal(undefined);
        })

        it('shoud return undefined', () => {
            let num1 = '3';
            let num2 = '4';

            let result = mathEnforcer.sum(num1, num2);

            expect(result).to.equal(undefined);
        })

        it('shoud return undefined', () => {
            let num1 = undefined;
            let num2 = 4;

            let result = mathEnforcer.sum(num1, num2);

            expect(result).to.equal(undefined);
        })

        it('shoud return undefined', () => {
            let num1 = [];
            let num2 = 4;

            let result = mathEnforcer.sum(num1, num2);

            expect(result).to.equal(undefined);
        })

        it('shoud return undefined', () => {
            let num1 = [];
            let num2 = [];

            let result = mathEnforcer.sum(num1, num2);

            expect(result).to.equal(undefined);
        })

        it('shoud return undefined', () => {
            let num1 = {};
            let num2 = {};

            let result = mathEnforcer.sum(num1, num2);

            expect(result).to.equal(undefined);
        })

        it('shoud return undefined', () => {
            let num1 = {};
            let num2 = 4;

            let result = mathEnforcer.sum(num1, num2);

            expect(result).to.equal(undefined);
        })

        it('shoud return undefined', () => {
            let num1 = 3;
            let num2 = {};

            let result = mathEnforcer.sum(num1, num2);

            expect(result).to.equal(undefined);
        })

        it('shoud return undefined', () => {
            let num1 = '';
            let num2 = 4;

            let result = mathEnforcer.sum(num1, num2);

            expect(result).to.equal(undefined);
        })

        it('shoud return undefined', () => {
            let num1 = '';
            let num2 = '';

            let result = mathEnforcer.sum(num1, num2);

            expect(result).to.equal(undefined);
        })

        it('shoud return correct result', () => {
            let num1 = 4.4;
            let num2 = 3.2;

            let result = mathEnforcer.sum(num1, num2);

            expect(result).to.closeTo(7.6, 0.01);
        })

        it('shoud return correct result', () => {
            let num1 = 4.4;
            let num2 = 4.4;

            let result = mathEnforcer.sum(num1, num2);

            expect(result).to.equal(8.8);
        })

        it('shoud return undefined', () => {
            let num1 = 3;
            let num2 = 4;

            let result = mathEnforcer.sum(num1);

            expect(result).to.equal(undefined);
        })

        it('shoud return undefined', () => {
            let num1 = 3;
            let num2 = 4;

            let result = mathEnforcer.sum(num2);

            expect(result).to.equal(undefined);
        })

        it('shoud return undefined', () => {
            let num1 = 3;
            let num2 = 4;

            let result = mathEnforcer.sum();

            expect(result).to.equal(undefined);
        })
    });
});