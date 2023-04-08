function sortingNumbers(arrOfNums) {

    const sortedNums = arrOfNums.sort((a, b) => a - b);
    const outputArr = [];

    while (sortedNums.length > 0) {
        let smallestNum = sortedNums.shift();
        let biggestNum = sortedNums.pop();
        if (smallestNum >= Number.MIN_SAFE_INTEGER) {
            outputArr.push(smallestNum);
        }

        if (biggestNum >= Number.MIN_SAFE_INTEGER) {
            outputArr.push(biggestNum);
        }
    }

    return outputArr;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));