function aggregateElements(input) {
    
    let sum1 = input.reduce((acc, x) => acc + x, 0);
    let sum2 = input.reduce((acc, x) => acc + 1/x, 0);
    let concat = input.reduce((acc, x) => acc + x + '', 0);

    console.log(sum1);
    console.log(sum2);
    console.log(concat);
}

aggregateElements([1, 2, 3]);

aggregateElements([2, 4, 8, 16]);