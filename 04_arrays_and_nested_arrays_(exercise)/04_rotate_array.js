function rotateArray(arr, num) {

    for (let i = 0; i < num; i++) {
        let el = arr.pop();
        arr.unshift(el);
    }

    return arr.join(' ');
}

console.log(rotateArray(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15));

console.log(rotateArray(['1',
    '2',
    '3',
    '4'],
    2
));