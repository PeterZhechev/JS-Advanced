const expect = require('chai').expect;
const rgbToHexColor = require('./06_rgb_to_hex');

describe('rgbToHexColor', function () {

    it('return #FFFFFF', function () {
        let red = 255;
        let green = 255;
        let blue = 255;

        let result = rgbToHexColor(red, green, blue);

        expect(result).to.be.equal('#FFFFFF');
    })

    it('return #000000', function () {
        let red = 0;
        let green = 0;
        let blue = 0;

        let result = rgbToHexColor(red, green, blue);

        expect(result).to.be.equal('#000000');
    })

    it('return undefined', function () {
        let red = -8;
        let green = 255;
        let blue = 255;

        let result = rgbToHexColor(red, green, blue);

        expect(result).to.be.undefined;
    })

    describe('rgbToHexColor', function () {

    it('return #FFFFFF', function () {
        let red = 255;
        let green = 255;
        let blue = 255;

        let result = rgbToHexColor(red, green, blue);

        expect(result).to.be.equal('#FFFFFF');
    })

    it('return undefined', function () {
        let red = -8;
        let green = 255;
        let blue = 255;

        let result = rgbToHexColor(red, green, blue);

        expect(result).to.be.undefined;
    })

    it('return undefined', function () {
        let red = 8;
        let green = -8;
        let blue = 255;

        let result = rgbToHexColor(red, green, blue);

        expect(result).to.be.undefined;
    })

    it('return undefined', function () {
        let red = 8;
        let green = 255;
        let blue = -55;

        let result = rgbToHexColor(red, green, blue);

        expect(result).to.be.undefined;
    })

    it('return undefined', function () {
        let red = 20.1;
        let green = 255;
        let blue = 255;

        let result = rgbToHexColor(red, green, blue);

        expect(result).to.be.undefined;
    })

    it('return undefined', function () {
        let red = 255;
        let green = 20.1;
        let blue = 255;

        let result = rgbToHexColor(red, green, blue);

        expect(result).to.be.undefined;
    })

    it('return undefined', function () {
        let red = 255;
        let green = 255;
        let blue = 20.1;

        let result = rgbToHexColor(red, green, blue);

        expect(result).to.be.undefined;
    })
})

    it('return undefined', function () {
        let red = 20.1;
        let green = 255;
        let blue = 255;

        let result = rgbToHexColor(red, green, blue);

        expect(result).to.be.undefined;
    })

    it('return undefined', function () {
        let red = 255;
        let green = 20.1;
        let blue = 255;

        let result = rgbToHexColor(red, green, blue);

        expect(result).to.be.undefined;
    })

    it('return undefined', function () {
        let red = 255;
        let green = 255;
        let blue = 20.1;

        let result = rgbToHexColor(red, green, blue);

        expect(result).to.be.undefined;
    })

    it('return undefined', function () {
        let red = 255;
        let green = 255;
        let blue = 256;

        let result = rgbToHexColor(red, green, blue);

        expect(result).to.be.undefined;
    })
})