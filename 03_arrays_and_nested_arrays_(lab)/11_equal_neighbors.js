function equalNeighbors(matrix) {

    let horizontalEqual = 0;
    let verticalEqual = 0;

    for (let arr of matrix) {
        for (let i = 0; i < arr.length; i++) {
            let currentEl = arr[i];
            let nextEl = arr[i + 1];
            if (currentEl === nextEl) horizontalEqual++;
        }
    }

    for (let i = 0; i < matrix.length - 1; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            let currentEl = matrix[i][j];
            let nextEl = matrix[i + 1][j];
            if (currentEl === nextEl) horizontalEqual++;
        }
    }

    return verticalEqual + horizontalEqual;
}

console.log(equalNeighbors([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]));

console.log(equalNeighbors([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]));