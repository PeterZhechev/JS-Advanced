function solve() {

    function mage(name) {
        let status = {
            name: name,
            health: 100,
            mana: 100,

            cast(castName) {
                this.mana--;
                console.log(`${this.name} cast ${castName}`);
            }
        }

        return status;
    }

    function fighter(name) {
        let status = {
            name: name,
            health: 100,
            stamina: 100,

            fight() {
                this.stamina--;
                console.log(`${this.name} slashes at the foe!`);
            }
        }

        return status;
    }

    let obj = {};

    obj['mage'] = mage;
    obj['fighter'] = fighter;

    return obj;
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);

