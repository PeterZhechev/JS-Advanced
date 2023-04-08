function sumOfNumbersNM(n, m) {
    
    let firstNum = Number(n);
    let secondNum = Number(m);

    let allNums = [];
    
    for (let i = firstNum; i <= secondNum; i++) {
        allNums.push(i);
    }

    let sum = allNums.reduce((acc, x) => acc + x, 0);
    console.log(sum);
}

sumOfNumbersNM('1', '5');

sumOfNumbersNM('-8', '20');