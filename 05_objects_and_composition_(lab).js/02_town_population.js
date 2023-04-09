function townPopulation(arr) {

    let obj1 = {};

    for (let line of arr) {
        let splittedLine = line.split(' <-> ');
        let city = splittedLine[0];
        let population = Number(splittedLine[1]);
        if (!obj1.hasOwnProperty(city)) {
            obj1[city] = population;
        } else {
            let currentPopulation = obj1[city];
            let updatedPopulation = currentPopulation + population;
            obj1[city] = updatedPopulation;
        }
    }

    for (let city in obj1) {
        console.log(`${city} : ${obj1[city]}`);
    }
}

// townPopulation([
//     'Sofia <-> 1200000',
//     'Montana <-> 20000',
//     'New York <-> 10000000',
//     'Washington <-> 2345000',
//     'Las Vegas <-> 1000000'
// ]);

townPopulation([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
]);