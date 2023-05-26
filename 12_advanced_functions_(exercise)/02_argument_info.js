function argumentInfo(...info) {
    
    let types = new Map();

    for (let el of info) {
        console.log(`${typeof el}: ${el}`);
        if (!types.has(typeof el)) {
            types.set(typeof el, 1);
        } else {
            let currentType = types.get(typeof el);
            currentType++;
            types.set(typeof el, currentType);
        }
    }

    let arr = Array.from(types).sort((a, b) => b[1] - a[1]);

    for (let el of arr) {
        console.log(`${el[0]} = ${el[1]}`);
    }
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });

// argumentInfo({ name: 'bob'}, 3.333, 9.999);