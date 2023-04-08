function biggestElement(matrix) {
    let newArr = [];
    for (let arr of matrix) {
        for (let num of arr) {
            newArr.push(num);
        }
    }

    const biggestEl = newArr.sort((a, b) => a - b).pop();
    return biggestEl;
}

// console.log(biggestElement([
//     [3, 5, 7, 12],
//     [-1, 4, 33, 2],
//     [8, 3, 0, 4]
// ]));

console.log(biggestElement([[20, 50, 10],
[8, 33, 145]]));