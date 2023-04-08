function negativePositiveNumbers(arr) {

    let newArr = [];

    for (let num of arr) {
        num < 0 ? newArr.unshift(num) : newArr.push(num);
    }

    return newArr.join('\n');
}

console.log(negativePositiveNumbers([3, -2, 0, -1]));