function townsToJson(arr) {

    let townInfo = [];

    let [town, latitude, longitude] = arr.shift().split(' | ');
    town = town.substring(2);
    longitude = longitude.substring(0, longitude.length - 2);

    let currentTownInfo = {}
    currentTownInfo[town] = '';
    currentTownInfo[latitude] = 0;
    currentTownInfo[longitude] = 0;

    for (let line of arr) {
        let [currentTown, currentLatitude, currentLongitude] = line.split(' | ');
        currentTown = currentTown.substring(2);
        currentLongitude = currentLongitude.substring(0, currentLongitude.length - 2);

        currentTownInfo[town] = currentTown;
        currentTownInfo[latitude] = Number(Number(currentLatitude).toFixed(2));
        currentTownInfo[longitude] = Number(Number(currentLongitude).toFixed(2));

        townInfo.push(JSON.stringify(currentTownInfo));
    }

    console.log(`[${townInfo.join(',')}]`);
}

townsToJson([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);

