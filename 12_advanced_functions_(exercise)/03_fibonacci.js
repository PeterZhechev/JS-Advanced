function getFibonator() {

    let startingNums = [0, 1];
    let count = 0;
 
    return function solve() {
        if (count === 0) {
            count++;
            return 1;
        }
        
        let increasedNum = ((startingNums[startingNums.length - 1]) + (startingNums[startingNums.length - 2]));
        startingNums.push(increasedNum);
        return increasedNum;
    }
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13

