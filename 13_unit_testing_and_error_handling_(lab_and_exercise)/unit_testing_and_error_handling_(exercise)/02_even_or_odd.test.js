const expect = require('chai').expect;
const isOddOrEven = require('./02_even_or_odd.js');

describe('even or odd', () => {
    it('return even', () => {
        let str = 'aa';

        let result = isOddOrEven(str);

        expect(result).to.equal('even');
    })

    it('return even', () => {
        let str = '  ';

        let result = isOddOrEven(str);

        expect(result).to.equal('even');
    })

    it('return odd', () => {
        let str = 'aaa';

        let result = isOddOrEven(str);

        expect(result).to.equal('odd');
    })

    it('return odd', () => {
        let str = '   ';

        let result = isOddOrEven(str);

        expect(result).to.equal('odd');
    })

    it('return odd', () => {
        let str = 'a';

        let result = isOddOrEven(str);

        expect(result).to.equal('odd');
    })

    it('return even', () => {
        let str = '';

        let result = isOddOrEven(str);

        expect(result).to.equal('even');
    })

    it('undefined', () => {
        let str = 5;

        let result = isOddOrEven(str);

        expect(result).to.equal(undefined);
    })

    it('undefined', () => {
        let str = [];

        let result = isOddOrEven(str);

        expect(result).to.equal(undefined);
    })

    it('undefined', () => {
        let str = true;

        let result = isOddOrEven(str);

        expect(result).to.equal(undefined);
    })

    it('undefined', () => {
        let str = false;

        let result = isOddOrEven(str);

        expect(result).to.equal(undefined);
    })

    it('undefined', () => {
        let str = {};

        let result = isOddOrEven(str);

        expect(result).to.equal(undefined);
    })

    it('undefined', () => {
        let str = 1.1;

        let result = isOddOrEven(str);

        expect(result).to.equal(undefined);
    })

    it('undefined', () => {
        let str = undefined;

        let result = isOddOrEven(str);

        expect(result).to.equal(undefined);
    })

    it('undefined', () => {
        let str = null;

        let result = isOddOrEven(str);

        expect(result).to.equal(undefined);
    })

    it('undefined', () => {
        let str = NaN;

        let result = isOddOrEven(str);

        expect(result).to.equal(undefined);
    })
})