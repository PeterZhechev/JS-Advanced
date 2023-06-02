const expect = require('chai').expect;
const lookupChar = require('./03_char_lookup.js');

describe('Char Lookup', () => {
    it ('return correct index', () => {
        let str = 'hello';
        let index = 0;

        let result = lookupChar(str, index);

        expect(result).to.equal('h');
    })

    it ('return correct index', () => {
        let str = 'hello';
        let index = 1;

        let result = lookupChar(str, index);

        expect(result).to.equal('e');
    })

    it ('return correct index', () => {
        let str = 'hello';
        let index = 4;

        let result = lookupChar(str, index);

        expect(result).to.equal('o');
    })

    it ('return correct index', () => {
        let str = '0';
        let index = 0;

        let result = lookupChar(str, index);

        expect(result).to.equal('0');
    })

    it ('return correct index', () => {
        let str = ' ';
        let index = 0;

        let result = lookupChar(str, index);

        expect(result).to.equal(' ');
    })

    it ('return incorrect index', () => {
        let str = 'hi';
        let index = -1;

        let result = lookupChar(str, index);

        expect(result).to.equal('Incorrect index');
    })

    it ('return incorrect index', () => {
        let str = 'hi';
        let index = 2;

        let result = lookupChar(str, index);

        expect(result).to.equal('Incorrect index');
    })

    it ('return incorrect index', () => {
        let str = 'hi';
        let index = 1.5;

        let result = lookupChar(str, index);

        expect(result).to.equal(undefined);
    })

    it ('return incorrect index', () => {
        let str = 'hi';
        let index = 'test';

        let result = lookupChar(str, index);

        expect(result).to.equal(undefined);
    })

    it ('return incorrect index', () => {
        let str = 5;
        let index = true;

        let result = lookupChar(str, index);

        expect(result).to.equal(undefined);
    })

    it ('return incorrect index', () => {
        let str = undefined;
        let index = undefined;

        let result = lookupChar(str, index);

        expect(result).to.equal(undefined);
    })

    it ('return incorrect index', () => {
        let str = null;
        let index = 1.5;

        let result = lookupChar(str, index);

        expect(result).to.equal(undefined);
    })

    it ('return incorrect index', () => {
        let str = 'hi';
        let index = NaN;

        let result = lookupChar(str, index);

        expect(result).to.equal(undefined);
    })

    it ('return incorrect index', () => {
        let str = NaN;
        let index = NaN;

        let result = lookupChar(str, index);

        expect(result).to.equal(undefined);
    })

    it ('return incorrect index', () => {
        let str = [];
        let index = [];

        let result = lookupChar(str, index);

        expect(result).to.equal(undefined);
    })

    it ('return incorrect index', () => {
        let str = {};
        let index = 5;

        let result = lookupChar(str, index);

        expect(result).to.equal(undefined);
    })
})