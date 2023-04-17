function lowestPricesInCities(arr) {

    const townInfo = new Map();

    for (let line of arr) {
        let [townName, productName, productPrice] = line.split(' | ');

        if (!townInfo.has(productName)) {
            townInfo.set(productName, {});
            townInfo.get(productName)['productPrice'] = Number(productPrice);
            townInfo.get(productName)['townName'] = townName;
        } else {
            if (townInfo.get(productName)['productPrice'] > Number(productPrice)) {
                townInfo.get(productName)['productPrice'] = Number(productPrice);
                townInfo.get(productName)['townName'] = townName;
            }
        }
    }

    for (let product of townInfo) {
        console.log(`${product[0]} -> ${product[1].productPrice} (${product[1].townName})`);
    }
}

lowestPricesInCities([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);

