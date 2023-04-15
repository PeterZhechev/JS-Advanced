function heroicInventory(arr) {

    const heroes = [];

    for (let hero of arr) {
        let splitted = hero.split(' / ');

        let heroName = splitted.shift();
        let heroLevel = '';

        if (splitted.length >= 1) {
            heroLevel = splitted.shift();
        }

        let items = '';
        if (splitted.length >= 1) {
            items = splitted.shift().split(', ');
        }

        const currentHero = {
            name: heroName,
            level: Number(heroLevel),
            items: [],
        };

        for (let item of items) {
            currentHero.items.push(item);
        }

        heroes.push(currentHero);

    }

    return JSON.stringify(heroes);
}

console.log(heroicInventory([
    'Isacc / 25 / Apple',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]));


[{ "name": "Isacc", "level": 25, "items": ["Apple", "GravityGun"] }, { "name": "Derek", "level": 12, "items": ["BarrelVest", "DestructionSword"] }, { "name": "Hes", "level": 1, "items": ["Desolator", "Sentinel", "Antara"] }]