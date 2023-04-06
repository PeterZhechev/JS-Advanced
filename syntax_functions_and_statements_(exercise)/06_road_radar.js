function roadRadar(speed, area) {

    const areasLimit = {
        motorway: {
            area: 'motorway',
            speedLimit: 130
        },
        interstate: {
            area: 'interstate',
            speedLimit: 90
        },
        city: {
            area: 'city',
            speedLimit: 50
        },
        residential: {
            area: 'residential',
            speedLimit: 20
        },
    };

    if (speed <= areasLimit[area].speedLimit) {
        console.log(`Driving ${speed} km/h in a ${areasLimit[area].speedLimit} zone`);
    } else {
        let status = '';
        if (speed - areasLimit[area].speedLimit <= 20) {
            status = 'speeding';
        } else if (speed - areasLimit[area].speedLimit <= 40 && speed - areasLimit[area].speedLimit > 20) {
            status = 'excessive speeding';
        } else if (speed - areasLimit[area].speedLimit > 40) {
            status = 'reckless driving';
        }

        console.log(`The speed is ${speed - areasLimit[area].speedLimit} km/h faster than the allowed speed of ${areasLimit[area].speedLimit} - ${status}`);
    }
}

roadRadar(40, 'city');

roadRadar(21, 'residential');

roadRadar(120, 'interstate');

roadRadar(200, 'motorway');

