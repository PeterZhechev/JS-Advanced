const expect = require('chai').expect;
const isSymmetric = require('./05_check_for_symmetry');

describe('isSymmetric', function () {
    it('return true', function () {
        let arr = [1, 1, 3, 3, 1, 1,];

        let result = isSymmetric(arr);

        expect(result).to.be.true;
    })

    it('return true', function () {
        let arr = [1, 1,];

        let result = isSymmetric(arr);

        expect(result).to.be.true;
    })

    it('return true', function () {
        let arr = [5];

        let result = isSymmetric(arr);

        expect(result).to.be.true;
    })

    it('return false', function () {
        let arr = [1, 1, 50, 3, 1, 1,];

        let result = isSymmetric(arr);

        expect(result).to.be.false;
    })

    it('return false', function () {
        let arr = [1, 1, 'a', 3, 1, 1,];

        let result = isSymmetric(arr);

        expect(result).to.be.false;
    })

    it('return false', function () {
        let arr = 5;

        let result = isSymmetric(arr);

        expect(result).to.be.false;
    })

    it('return false', function () {
        let arr = 'a';

        let result = isSymmetric(arr);

        expect(result).to.false;
    })

    it('return false', function () {
        let arr = false;

        let result = isSymmetric(arr);

        expect(result).to.be.false;
    })

    it('return true', function () {
        let arr = [];

        let result = isSymmetric(arr);

        expect(result).to.be.true;
    })

    it('return true', function () {
        let arr = true;

        let result = isSymmetric(arr);

        expect(result).to.be.false;
    })

    it('return false', function () {
        let arr = undefined;

        let result = isSymmetric(arr);

        expect(result).to.be.false;
    })

    it('return false', function () {
        let arr = null;

        let result = isSymmetric(arr);

        expect(result).to.be.false;
    })

    it('return false', function () {
        let arr = false;

        let result = isSymmetric(arr);

        expect(result).to.be.false;
    })

    it('return false', function () {
        let arr = {};

        let result = isSymmetric(arr);

        expect(result).to.be.false;
    })

    it('return false', function () {
        let arr = [1, 1, 3];

        let result = isSymmetric(arr);

        expect(result).to.be.false;
    })

    it('return false', function () {
        let arr = [1, 3];

        let result = isSymmetric(arr);

        expect(result).to.be.false;
    })

    it('return false', function () {
        let arr = ['1', 3];

        let result = isSymmetric(arr);

        expect(result).to.be.false;
    })

    it('return false', function () {
        let arr = ['1', '3'];

        let result = isSymmetric(arr);

        expect(result).to.be.false;
    })

    it('return false', function () {
        let arr = [1, 3, '1'];

        let result = isSymmetric(arr);

        expect(result).to.be.false;
    })

    it('return true', function () {
        let arr = ['1', '3', '1'];

        let result = isSymmetric(arr);

        expect(result).to.be.true;
    })
})