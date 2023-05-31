const chai = require('chai');

function sum(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += Number(num);
    }

    return sum;
}

describe('sum function', function () {
    it ('shoud start with 0 initial sum')
})