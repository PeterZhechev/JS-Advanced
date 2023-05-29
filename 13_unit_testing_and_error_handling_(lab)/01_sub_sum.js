function subSum(arr, startIndex, endIndex) {

    if (startIndex < 0) {
        startIndex = 0;
    }

    if (endIndex > arr.length - 1) {
        endIndex = arr.length - 1;
    }

    let sum = 0;

    for (let i = startIndex; i <= endIndex; i++) {
        sum += Number(arr[i]);
    }

    return sum;
}

console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300)); // 150
console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)); // 3.3
console.log(subSum([10, 'twenty', 30, 40], 0, 2)); // NaN
console.log(subSum([], 1, 2)); // 0
console.log(subSum('text', 0, 2)); // NaN