function sameNumbers(num) {

    function isSameNumbers(inputNum) {

        let isSame = true;
        let numToArr = inputNum.toString()
            .split('')
            .map(Number);

        let firstNum = numToArr[0];

        for (let currentNum of numToArr) {
            if (firstNum !== currentNum) {
                isSame = false;
                break;
            }
        }

        return isSame;
    }

    let resultOfIsSame = isSameNumbers(num);

    function sumOfAllDigits(inputNum) {

        return inputNum.toString()
            .split('')
            .map(Number)
            .reduce((acc, x) => acc + x, 0);
    }

    let totalSumOfAllDigits = sumOfAllDigits(num);

    return `${resultOfIsSame}\n${totalSumOfAllDigits}`;
}

console.log(sameNumbers(1234));