function biggerHalf(arr) {
    let half = Math.ceil(arr.length / 2);
    let sortedArr = arr.sort((a, b) => a - b);
    return sortedArr.slice(arr.length - half);
}

console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));

console.log(biggerHalf([4, 7, 2, 5]));