function magicMatrices(matrix) {

    if (matrix.length === 0) {
        console.log(false);
        return;
    }
    
    let horizontalNums = [];
    let verticalNums = [];

    for (let arr of matrix) {
        let currentHorizontalSum = 0;
        for (let num of arr) {
            currentHorizontalSum += num;
        }
        
        horizontalNums.push(currentHorizontalSum);
    }

    for (let i = 0; i < matrix[0].length; i++) {
        let currentVerticallSum = 0;
        for (let j = 0; j < matrix.length; j++) {
            let currentNum = matrix[i][j];
            currentVerticallSum += currentNum;
        }

        verticalNums.push(currentVerticallSum);
    }

    let isEqual = true;
    let allNumsArr = [];

    for (let num of horizontalNums) {
        allNumsArr.push(num);
    }

    for (let num of verticalNums) {
        allNumsArr.push(num);
    }

    let firstNum = allNumsArr.shift();

    for(let num of allNumsArr) {
        if (num !== firstNum) {
            isEqual = false;
        }
    }

    console.log(isEqual);
}

magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);

magicMatrices([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   );

   magicMatrices([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]);