function mathOperations(firstNum, secondNum, operator) {

    switch (operator) {
        case '+': {
            console.log(firstNum + secondNum);
            break;
        }

        case '-': {
            console.log(firstNum - secondNum);
            break;
        }

        case '*': {
            console.log(firstNum * secondNum);
            break;
        }

        case '/': {
            console.log(firstNum / secondNum);
            break;
        }

        case '%': {
            console.log(firstNum % secondNum);
            break;
        }

        case '**': {
            console.log(firstNum ** secondNum);
            break;
        }
    }
}

mathOperations(5, 6, '+');