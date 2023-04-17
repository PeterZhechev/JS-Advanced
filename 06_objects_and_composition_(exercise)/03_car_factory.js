function carFactory(order) {

    const smallEngine = { power: 90, volume: 1800 };
    const normalEngine = { power: 120, volume: 2400 };
    const monsterEngine = { power: 200, volume: 3500 };

    const hatchback = { type: 'hatchback', color: order.color };
    const coupe = { type: 'coupe', color: order.color };

    const output = {
        model: order.model,
        engine: {},
        carriage: {},
        wheels: [],
    };

    if (order.power <= 90) {
        output.engine = smallEngine;
    } else if (order.power > 90 && order.power < 200) {
        output.engine = normalEngine;
    } else if (order.power >= 200) {
        output.engine = monsterEngine;
    }

    if (order.carriage === 'hatchback') {
        output.carriage = hatchback;
    } else if (order.carriage ===  'coupe') {
        output.carriage = coupe;

    }

    if (order.wheelsize % 2 === 0) {
        order.wheelsize -= 1;
    }

    output.wheels.push((order.wheelsize));
    output.wheels.push((order.wheelsize));
    output.wheels.push((order.wheelsize));
    output.wheels.push((order.wheelsize));

    return output;
}

// console.log(carFactory({
//     model: 'VW Golf II',
//     power: 90,
//     color: 'blue',
//     carriage: 'hatchback',
//     wheelsize: 14
// }));

console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));