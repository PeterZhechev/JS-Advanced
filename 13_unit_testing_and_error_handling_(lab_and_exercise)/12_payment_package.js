const chai = require('chai');
const expect = chai.expect;

class PaymentPackage {
    constructor(name, value) {
        this.name = name;
        this.value = value;
        this.VAT = 20; // Default value
        this.active = true; // Default value
    }
    get name() {
        return this._name;
    }
    set name(newValue) {
        if (typeof newValue !== 'string') {
            throw new Error('Name must be a non-empty string');
        }
        if (newValue.length === 0) {
            throw new Error('Name must be a non-empty string');
        }
        this._name = newValue;
    }
    get value() {
        return this._value;
    }
    set value(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('Value must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('Value must be a non-negative number');
        }
        this._value = newValue;
    }
    get VAT() {
        return this._VAT;
    }
    set VAT(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('VAT must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('VAT must be a non-negative number');
        }
        this._VAT = newValue;
    }
    get active() {
        return this._active;
    }
    set active(newValue) {
        if (typeof newValue !== 'boolean') {
            throw new Error('Active status must be a boolean');
        }
        this._active = newValue;
    }
    toString() {
        const output = [
            `Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${this.value}`, `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
        ];
        return output.join('\n');
    }
}


// Should throw an error
try {
    const hrPack = new PaymentPackage('HR Services');
} catch (err) {
    console.log('Error: ' + err.message);
}
const packages = [
    new PaymentPackage('HR Services', 1500),
    new PaymentPackage('Consultation', 800),
    new PaymentPackage('Partnership Fee', 7000),
];
console.log(packages.join('\n'));
const wrongPack = new PaymentPackage('Transfer Fee', 100);
// Should throw an error
try {
    wrongPack.active = null;
} catch (err) {
    console.log('Error: ' + err.message);
}


describe('Tests', () => {

    it('constructor', () => {
        const instance = new PaymentPackage('name', 50);
        expect(instance.name).to.equal('name');
        expect(instance._value).to.equal(50);
        expect(instance._VAT).to.equal(20);
        expect(instance._active).to.be.true;
      });

    describe('Test name', () => {

        it('Should throw error', () => {
            const result = () => new PaymentPackage('', 20);
            expect(result).to.throw('Name must be a non-empty string');
        });

        it('Should throw error', () => {
            const result = () => new PaymentPackage(7, 20);
            expect(result).to.throw('Name must be a non-empty string');
        });

        it('Should throw error', () => {
            const result = () => new PaymentPackage(70, 20);
            expect(result).to.throw('Name must be a non-empty string');
        });

        it('Should throw error', () => {
            const result = () => new PaymentPackage([], 20);
            expect(result).to.throw('Name must be a non-empty string');
        });

        it('Should throw error', () => {
            const result = () => new PaymentPackage({}, 20);
            expect(result).to.throw('Name must be a non-empty string');
        });

        it('Should throw error', () => {
            const result = () => new PaymentPackage(true, 20);
            expect(result).to.throw('Name must be a non-empty string');
        });

        it('Should throw error', () => {
            const result = () => new PaymentPackage(false, 20);
            expect(result).to.throw('Name must be a non-empty string');
        });

        it('Should throw error', () => {
            const result = () => new PaymentPackage(undefined, 20);
            expect(result).to.throw('Name must be a non-empty string');
        });

        it('Should not throw error', () => {
            const result = () => new PaymentPackage('name', -20);
            expect(result).not.to.throw('Name must be a non-empty string');
        });

        it('Should not throw error', () => {
            const result = () => new PaymentPackage('name', []);
            expect(result).not.to.throw('Name must be a non-empty string');
        });

        it('Should not throw error', () => {
            const result = () => new PaymentPackage('name', {});
            expect(result).not.to.throw('Name must be a non-empty string');
        });

        it('Should not throw error', () => {
            const result = () => new PaymentPackage('name', '');
            expect(result).not.to.throw('Name must be a non-empty string');
        });

        it('Should not throw error', () => {
            const result = () => new PaymentPackage('name', undefined);
            expect(result).not.to.throw('Name must be a non-empty string');
        });

        it('Should not throw error', () => {
            const result = () => new PaymentPackage('name', 0);
            expect(result).not.to.throw('Name must be a non-empty string');
        });

        it('Should not throw error', () => {
            const result = () => new PaymentPackage('name', 20);
            expect(result).not.to.throw('Name must be a non-empty string');
        });

        it('Should not throw error', () => {
            const result = () => new PaymentPackage('name', 0);
            expect(result).not.to.throw('Name must be a non-empty string');
        });

        it('Should not throw error', () => {
            const result = () => new PaymentPackage('name', Number.MAX_SAFE_INTEGER);
            expect(result).not.to.throw('Name must be a non-empty string');
        });

        it('Should not throw error', () => {
            const result = () => new PaymentPackage(' ', 20);
            expect(result).not.to.throw('Name must be a non-empty string');
        });

        it('Should not throw error', () => {
            const result = new PaymentPackage('name', 20);
            result.name = 'hello';
            expect(result.name).to.equal('hello');
        });
    })

    describe('Test value', () => {

        it('Should throw error', () => {
            const result = () => new PaymentPackage('name', '20');
            expect(result).to.throw('Value must be a non-negative number');
        });

        it('Should throw error', () => {
            const result = () => new PaymentPackage('name', -20);
            expect(result).to.throw('Value must be a non-negative number');
        });

        it('Should throw error', () => {
            const result = () => new PaymentPackage('name', []);
            expect(result).to.throw('Value must be a non-negative number');
        });

        it('Should throw error', () => {
            const result = () => new PaymentPackage('name', {});
            expect(result).to.throw('Value must be a non-negative number');
        });

        it('Should throw error', () => {
            const result = () => new PaymentPackage('name', '');
            expect(result).to.throw('Value must be a non-negative number');
        });

        it('Should throw error', () => {
            const result = () => new PaymentPackage('name', undefined);
            expect(result).to.throw('Value must be a non-negative number');
        });

        it('Should throw error', () => {
            const result = () => new PaymentPackage('name', false);
            expect(result).to.throw('Value must be a non-negative number');
        });

        it('Should throw error', () => {
            const result = () => new PaymentPackage('name', true);
            expect(result).to.throw('Value must be a non-negative number');
        });

        it('Should throw error', () => {
            const result = () => new PaymentPackage('name', -1);
            expect(result).to.throw('Value must be a non-negative number');
        });

        it('Should throw error', () => {
            const result = () => new PaymentPackage('name', Number.MIN_SAFE_INTEGER);
            expect(result).to.throw('Value must be a non-negative number');
        });

        it('Should not throw error', () => {
            const result = () => new PaymentPackage('name', 20);
            expect(result).not.to.throw('Value must be a non-negative number');
        });

        it('Should not throw error', () => {
            const result = () => new PaymentPackage('name', 0);
            expect(result).not.to.throw('Value must be a non-negative number');
        });

        it('Should not throw error', () => {
            const result = () => new PaymentPackage('name', 1);
            expect(result).not.to.throw('Value must be a non-negative number');
        });

        it('Should not throw error', () => {
            const result = () => new PaymentPackage('name', Number.MAX_SAFE_INTEGER);
            expect(result).not.to.throw('Value must be a non-negative number');
        });
    })

    describe('Test VAT', () => {

        it('Should throw error', () => {
            const result = new PaymentPackage('name', 20);
            expect(() => (result.VAT = '20')).to.throw('VAT must be a non-negative number');
        });

        it('Should throw error', () => {
            const result = new PaymentPackage('name', 0);
            expect(() => (result.VAT = '')).to.throw('VAT must be a non-negative number');
        });

        it('Should throw error', () => {
            const result = new PaymentPackage('name', 20);
            expect(() => (result.VAT = -20)).to.throw('VAT must be a non-negative number');
        });

        it('Should throw error', () => {
            const result = new PaymentPackage('name', 20);
            expect(() => (result.VAT = '')).to.throw('VAT must be a non-negative number');
        });

        it('Should throw error', () => {
            const result = new PaymentPackage('name', 20);
            expect(() => (result.VAT = [])).to.throw('VAT must be a non-negative number');
        });

        it('Should throw error', () => {
            const result = new PaymentPackage('name', 20);
            expect(() => (result.VAT = {})).to.throw('VAT must be a non-negative number');
        });

        it('Should throw error', () => {
            const result = new PaymentPackage('name', 20);
            expect(() => (result.VAT = undefined)).to.throw('VAT must be a non-negative number');
        });

        it('Should not throw error', () => {
            const result = new PaymentPackage('name', 20);
            expect(() => (result.VAT = 10)).not.to.throw('VAT must be a non-negative number');
        });

        it('Should not throw error', () => {
            const result = new PaymentPackage('name', 20);
            expect(() => (result.VAT = 0)).not.to.throw('VAT must be a non-negative number');
        });
    })

    describe('Test active', () => {

        it('Should throw error', () => {
            const result = new PaymentPackage('name', 20);
            expect(() => (result.active = '10')).to.throw('Active status must be a boolean');
        });

        it('Should throw error', () => {
            const result = new PaymentPackage('name', 20);
            expect(() => (result.active = '')).to.throw('Active status must be a boolean');
        });

        it('Should throw error', () => {
            const result = new PaymentPackage('name', 20);
            expect(() => (result.active = 0)).to.throw('Active status must be a boolean');
        });

        it('Should throw error', () => {
            const result = new PaymentPackage('name', 20);
            expect(() => (result.active = undefined)).to.throw('Active status must be a boolean');
        });

        it('Should throw error', () => {
            const result = new PaymentPackage('name', 20);
            expect(() => (result.active = NaN)).to.throw('Active status must be a boolean');
        });

        it('Should throw error', () => {
            const result = new PaymentPackage('name', 20);
            expect(() => (result.active = [])).to.throw('Active status must be a boolean');
        });

        it('Should throw error', () => {
            const result = new PaymentPackage('name', 20);
            expect(() => (result.active = {})).to.throw('Active status must be a boolean');
        });

        it('Should throw error', () => {
            const result = new PaymentPackage('name', 20);
            expect(() => (result.active = -1)).to.throw('Active status must be a boolean');
        });

        it('Should throw error', () => {
            const result = new PaymentPackage('name', 20);
            expect(() => (result.active = 0)).to.throw('Active status must be a boolean');
        });

        it('Should throw error', () => {
            const result = new PaymentPackage('name', 20);
            expect(() => (result.active = Number.MAX_SAFE_INTEGER)).to.throw('Active status must be a boolean');
        });

        it('Should throw error', () => {
            const result = new PaymentPackage('name', 20);
            expect(() => (result.active = Number.MIN_SAFE_INTEGER)).to.throw('Active status must be a boolean');
        });

        it('Should not throw error', () => {
            const result = new PaymentPackage('name', 20);
            expect(() => (result.active = true)).not.to.throw('Active status must be a boolean');
        });

        it('Should not throw error', () => {
            const result = new PaymentPackage('name', 20);
            expect(() => (result.active = false)).not.to.throw('Active status must be a boolean');
        });
    })

    describe('Test toString method', () => {

        it('Should return a string', () => {
            const result = new PaymentPackage('name', 20);
            const output = [
                `Package: name`,
                `- Value (excl. VAT): 20`,
                `- Value (VAT 20%): 24`,
            ];

            expect(result.toString()).to.equal(output.join('\n'));
        });

        it('Should return a string', () => {
            const result = new PaymentPackage('name', 20);
            result.VAT = 10;
            const output = [
                `Package: name`,
                `- Value (excl. VAT): 20`,
                `- Value (VAT 10%): 22`,
            ];

            expect(result.toString()).to.equal(output.join('\n'));
        });

        it('Should return a string', () => {
            const result = new PaymentPackage('name', 20);
            result.active = false;
            const output = [
                `Package: name (inactive)`,
                `- Value (excl. VAT): 20`,
                `- Value (VAT 20%): 24`,
            ];

            expect(result.toString()).to.equal(output.join('\n'));
        });

        it('Should return a string', () => {
            const result = new PaymentPackage('name', 20);
            result.VAT = 10;
            result.active = false;
            const output = [
                `Package: name (inactive)`,
                `- Value (excl. VAT): 20`,
                `- Value (VAT 10%): 22`,
            ];

            expect(result.toString()).to.equal(output.join('\n'));
        });

        it('Should return a string', () => {
            const result = new PaymentPackage('name', 50);
            result.VAT = 22;
            result.active = false;
            const output = [
                `Package: name (inactive)`,
                `- Value (excl. VAT): 50`,
                `- Value (VAT 22%): 61`,
            ];

            expect(result.toString()).to.equal(output.join('\n'));
        });
    })
})

