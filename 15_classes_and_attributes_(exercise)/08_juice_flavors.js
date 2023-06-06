function juiceFlavors(arr) {

    let obj = {};
    let bottles = new Map();

    for (let el of arr) {
        let splitted = el.split(' => ');
        if (!obj.hasOwnProperty(splitted[0])) {
            obj[splitted[0]] = Number(splitted[1]);
        } else {
            obj[splitted[0]] += Number(splitted[1]);
        }

        for (let el in obj) {
            if (obj[el] >= 1000) {
                while (obj[el] >= 1000) {
                    obj[el] -= 1000;
                    if (!bottles.has(el)) {
                        bottles.set(el, 1);
                    } else {
                        let currentProduct = bottles.get(el);
                        currentProduct++;
                        bottles.set(el, currentProduct);
                    }
                }
            }
        }

    }

    for (let el of bottles) {
        console.log(`${el[0]} => ${el[1]}`);
    }
}


// juiceFlavors(['Orange => 2000',
// 'Peach => 1432',
// 'Banana => 450',
// 'Peach => 600',
// 'Strawberry => 549']);

juiceFlavors(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);
