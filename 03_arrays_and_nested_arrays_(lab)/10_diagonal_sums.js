function diagonalSums(matrix) {
    const mainDiagonalIndices = [];
    const secondaryDiagonalIndices = [];
    const firstNums = [];
    const secondNums = [];

    let endIndex = matrix.length - 1;
    for (let index = 0; index < matrix.length; index++) {
        mainDiagonalIndices.push(index);
        secondaryDiagonalIndices.push(endIndex);
        endIndex--;
    }

    let count = 0;

    for (let arr of matrix) {
        let currentIndex1 = mainDiagonalIndices[count];
        let currentIndex2 = secondaryDiagonalIndices[count];
        firstNums.push(arr[currentIndex1]);
        secondNums.push(arr[currentIndex2]);
        count++;
    }

    const sum1 = firstNums.reduce((acc, a) => acc + a, 0);
    const sum2 = secondNums.reduce((acc, a) => acc + a, 0);

    return `${sum1} ${sum2}`;
}

console.log(diagonalSums([
    [20, 40],
    [10, 60]
]));

console.log(diagonalSums([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]));