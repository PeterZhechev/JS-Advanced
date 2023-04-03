function largestNumber(firstNum, secondNum, thirdNum) {
    
    let arr = [firstNum, secondNum, thirdNum];
    let sortedArr = arr.sort((a, b) => b - a);
    console.log(`The largest number is ${sortedArr[0]}.`);
}

largestNumber(5, -3, 16);

largestNumber(-3, -5, -22.5);