function cookingByNumbers(...params) {

    let input = params.slice(0);
    let num = Number(input.shift());

    for (let i = 0; i < input.length; i++) {
        let currentOperation = input[i];

        switch (currentOperation) {
            case 'chop': {
                num /= 2;
                console.log(num);
                break;
            }

            case 'dice': {
                num = Math.sqrt(num);
                console.log(num);
                break;
            }

            case 'spice': {
                num++;
                console.log(num);
                break;
            }

            case 'bake': {
                num *= 3;
                console.log(num);
                break;
            }

            case 'fillet': {
                let twentyPercentFromCurrentNum = num * 0.2;
                num -= twentyPercentFromCurrentNum;
                console.log(num);
                break;
            }
        }

    }
}

// cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');