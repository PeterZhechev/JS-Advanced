function add(num) {
    function solve(currentNum) {
        num += currentNum;
        return solve;
    }

    solve.toString = () => {
        return num;
    }

    return solve;
}

console.log(add(1).toString());
console.log(add(1)(6)(-3).toString());