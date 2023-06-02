function isOddOrEven(string) {
    if (typeof (string) !== 'string') {
        return undefined;
    }

    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

// console.log(isOddOrEven(9));

module.exports = isOddOrEven;
