function solution() {

    let protein = 0;
    let carbohydrate = 0;
    let fat = 0;
    let flavour = 0;

    let apple = {
        carbohydrate: 1,
        flavour: 2,
    }

    let lemonade = {
        carbohydrate: 10,
        flavour: 20,
    }

    let burger = {
        carbohydrate: 5,
        fat: 7,
        flavour: 3,
    }

    let eggs = {
        protein: 5,
        fat: 1,
        flavour: 1,
    }

    let turkey = {
        protein: 10,
        carbohydrate: 10,
        fat: 10,
        flavour: 10,
    }

    return function (input) {
        let splitted = input.split(' ');
        let command = splitted[0];

        if (splitted.length > 1) {
            let microelementOrProduct = splitted[1];
            let quantity = Number(splitted[2]);

            switch (command) {
                case 'restock':
                    switch (microelementOrProduct) {
                        case 'protein':
                            protein += quantity;
                            return 'Success';

                        case 'carbohydrate':
                            carbohydrate += quantity;
                            return 'Success';

                        case 'fat':
                            fat += quantity;
                            return 'Success';

                        case 'flavour':
                            flavour += quantity;
                            return 'Success';
                    }

                    break;

                case 'prepare':

                    switch (microelementOrProduct) {
                        case 'apple':
                            for (let el in apple) {
                                switch (el) {
                                    case 'carbohydrate':
                                        if (carbohydrate < (apple.carbohydrate * quantity)) {
                                            return 'Error: not enough carbohydrate in stock';
                                        }
                                        break;

                                    case 'flavour':
                                        if (flavour < (apple.flavour * quantity)) {
                                            return 'Error: not enough flavour in stock';
                                        }
                                        break;
                                }
                            }

                            for (let el in apple) {
                                switch (el) {
                                    case 'carbohydrate':
                                        carbohydrate -= (apple.carbohydrate * quantity);
                                        break;

                                    case 'flavour':
                                        flavour -= (apple.flavour * quantity)
                                        break;
                                }
                            }

                            return 'Success';

                        case 'lemonade':
                            for (let el in lemonade) {
                                switch (el) {
                                    case 'carbohydrate':
                                        if (carbohydrate < (lemonade.carbohydrate * quantity)) {
                                            return 'Error: not enough carbohydrate in stock';
                                        }
                                        break;

                                    case 'flavour':
                                        if (flavour < (lemonade.flavour * quantity)) {
                                            return 'Error: not enough flavour in stock';
                                        }
                                        break;
                                }
                            }

                            for (let el in lemonade) {
                                switch (el) {
                                    case 'carbohydrate':
                                        carbohydrate -= (lemonade.carbohydrate * quantity);
                                        break;
                                    case 'flavour':
                                        flavour -= (lemonade.flavour * quantity)
                                        break;
                                }
                            }

                            return 'Success';

                        case 'burger':
                            for (let el in burger) {
                                switch (el) {
                                    case 'carbohydrate':
                                        if (carbohydrate < (burger.carbohydrate * quantity)) {
                                            return 'Error: not enough carbohydrate in stock';
                                        }
                                        break;

                                    case 'flavour':
                                        if (flavour < (burger.flavour * quantity)) {
                                            return 'Error: not enough flavour in stock';
                                        }
                                        break;
                                    case 'fat':
                                        if (fat < (burger.fat * quantity)) {
                                            return 'Error: not enough fat in stock';
                                        }
                                        break;
                                }
                            }

                            for (let el in burger) {
                                switch (el) {
                                    case 'carbohydrate':
                                        carbohydrate -= (burger.carbohydrate * quantity);
                                        break;

                                    case 'flavour':
                                        flavour -= (burger.flavour * quantity);
                                        break;

                                    case 'fat':
                                        fat -= (burger.fat * quantity);
                                        break;
                                }
                            }

                            return 'Success';


                        case 'eggs':
                            for (let el in eggs) {
                                switch (el) {
                                    case 'protein':
                                        if (protein < (eggs.protein * quantity)) {
                                            return 'Error: not enough protein in stock';
                                        }
                                        break;

                                    case 'flavour':
                                        if (flavour < (eggs.flavour * quantity)) {
                                            return 'Error: not enough flavour in stock';
                                        }
                                        break;
                                    case 'fat':
                                        if (fat < (eggs.fat * quantity)) {
                                            return 'Error: not enough fat in stock';
                                        }
                                        break;
                                }
                            }

                            for (let el in eggs) {
                                switch (el) {
                                    case 'protein':
                                        protein -= (eggs.protein * quantity)
                                        break;

                                    case 'flavour':
                                        flavour -= (eggs.flavour * quantity)
                                        break;

                                    case 'fat':
                                        fat -= (eggs.fat * quantity)
                                        break;
                                }
                            }

                            return 'Success';


                        case 'turkey':
                            for (let el in turkey) {
                                switch (el) {
                                    case 'protein':
                                        if (protein < (turkey.protein * quantity)) {
                                            return 'Error: not enough protein in stock';
                                        }
                                        break;

                                    case 'flavour':
                                        if (flavour < (turkey.flavour * quantity)) {
                                            return 'Error: not enough flavour in stock';
                                        }
                                        break;
                                    case 'fat':
                                        if (fat < (turkey.fat * quantity)) {
                                            return 'Error: not enough fat in stock';
                                        }
                                        break;
                                    case 'carbohydrate':
                                        if (carbohydrate < (turkey.carbohydrate * quantity)) {
                                            return 'Error: not enough carbohydrate in stock';
                                        }
                                        break;
                                }
                            }

                            for (let el in turkey) {
                                switch (el) {
                                    case 'protein':
                                        protein -= (turkey.protein * quantity)
                                        break;

                                    case 'flavour':
                                        flavour -= (turkey.flavour * quantity)
                                        break;

                                    case 'fat':
                                        fat -= (turkey.fat * quantity)
                                        break;

                                    case 'carbohydrate':
                                        carbohydrate -= (turkey.carbohydrate * quantity)
                                        break;
                                }
                            }

                            return 'Success';

                    }

                    break;

            }
        } else if (splitted.length === 1) {
            if (command === 'report') {
                return `protein=${protein} carbohydrate=${carbohydrate} fat=${fat} flavour=${flavour}`;
            }
        }
    }
}

let manager = solution();
console.log(manager("restock flavour 50"));
console.log(manager("prepare lemonade 4"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));

// let manager = solution();
// console.log(manager("prepare turkey 1"));
// console.log(manager("restock protein 10"));
// console.log(manager("prepare turkey 1"));
// console.log(manager("restock carbohydrate 10"));
// console.log(manager("prepare turkey 1"));
// console.log(manager("restock fat 10"));
// console.log(manager("prepare turkey 1"));
// console.log(manager("restock flavour 10"));
// console.log(manager("prepare turkey 1"));
// console.log(manager("report"));