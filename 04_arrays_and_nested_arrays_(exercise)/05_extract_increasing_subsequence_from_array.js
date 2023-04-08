function extractIncreasingSubsequenceFromArray(arr) {

    const outputArr = [];
    let biggestNum = Number.MIN_SAFE_INTEGER;

    for (let num of arr) {
        if (num >= biggestNum) {
            biggestNum = num;
            outputArr.push(num);
        }
    }

    return outputArr;
}

// console.log(extractIncreasingSubsequenceFromArray([
//     1,
//     3,
//     8,
//     4,
//     10,
//     12,
//     3,
//     2,
//     24
// ]));

console.log(extractIncreasingSubsequenceFromArray([20, 
    3, 
    2, 
    15,
    6, 
    1]));

    console.log(extractIncreasingSubsequenceFromArray([]));