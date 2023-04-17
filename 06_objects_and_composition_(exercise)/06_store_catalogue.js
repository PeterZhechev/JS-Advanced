function storeCatalogue(arr) {

    let productList = new Map();
    let sortedArr = arr.sort((a, b) => a.localeCompare(b));

    for (let line of sortedArr) {

        let [productName, productPrice] = line.split(' : ');
        let currentProductGroup = productName[0];
        if (!productList.has(currentProductGroup)) {
            productList.set(currentProductGroup, new Map());
            productList.get(currentProductGroup).set(productName, Number(productPrice));
        } else {
            productList.get(currentProductGroup).set(productName, Number(productPrice));
        }
    }

    for (let group of productList) {
        console.log(group[0]);
        for (let product of group[1]) {
            console.log(`  ${product[0]}: ${product[1]}`);
        }
    }
}

storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);

