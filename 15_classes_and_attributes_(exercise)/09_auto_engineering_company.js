function register(arr) {

    const cars = new Map();

    for (let el of arr) {
        let splitted = el.split(' | ');
        let carBrand = splitted[0];
        let carModel = splitted[1];
        let producedCars = Number(splitted[2]);

        if (!cars.has(carBrand)) {
            cars.set(carBrand, new Map());
            let currentBrand = cars.get(carBrand);
            currentBrand.set(carModel, producedCars);
            cars.set(carBrand, currentBrand);
        } else {
            let currentBrand = cars.get(carBrand);
            if (!currentBrand.has(carModel)) {
                currentBrand.set(carModel, producedCars);
                cars.set(carBrand, currentBrand);
            } else {
                let quantity = currentBrand.get(carModel);
                currentBrand.set(carModel, quantity + producedCars);
                cars.set(carBrand, currentBrand);
            }
        }
    }

    let arrCars = Array.from(cars);

    for (let car of arrCars) {
        console.log(car[0]);
        for (let model of car[1]) {
            console.log(`###${model[0]} -> ${model[1]}`);
        }
    }
}

register([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);