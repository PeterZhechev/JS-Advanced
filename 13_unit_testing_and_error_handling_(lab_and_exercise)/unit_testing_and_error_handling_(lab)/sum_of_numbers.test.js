const chai = require('chai');

function sum(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += Number(num);
    }

    return sum;
}

describe('sum function', function () {
    it ('shoud sum corectly', function () {
        // Arrange
        let arr = [1,2,3];

        // Act
        let result = sum(arr);

        // Assers
        chai.expect(result).to.equal(6);
    })
})
