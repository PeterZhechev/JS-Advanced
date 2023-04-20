function jansNotation(input) {

    let operands = [];
    let operand1 = 0;
    let operand2 = 0;

    const notEnoughOperands = 'Error: not enough operands!';
    const tooManyOperands = 'Error: too many operands!';

    for (let el of input) {

        if (typeof el === 'number') {
            operands.push(el);

        } else {

            switch (el) {

                case '+': {
                    if (operands.length >= 2) {
                        operand2 = operands.pop();
                        operand1 = operands.pop();
                        operands.push(operand1 + operand2);
                    } else {
                        console.log(notEnoughOperands);
                        return;
                    }

                    break;
                }

                case '-': {
                    if (operands.length >= 2) {
                        operand2 = operands.pop();
                        operand1 = operands.pop();
                        operands.push(operand1 - operand2);
                    } else {
                        console.log(notEnoughOperands);
                        return;
                    }

                    break;
                }

                case '*': {
                    if (operands.length >= 2) {
                        operand2 = operands.pop();
                        operand1 = operands.pop();
                        operands.push(operand1 * operand2);
                    } else {
                        console.log(notEnoughOperands);
                        return;
                    }

                    break;
                }

                case '/': {
                    if (operands.length >= 2) {
                        operand2 = operands.pop();
                        operand1 = operands.pop();
                        operands.push(operand1 / operand2);
                    } else {
                        console.log(notEnoughOperands);
                        return;
                    }

                    break;
                }

            }
        }
    }

    if (operands.length > 1) {
        console.log(tooManyOperands);
    } else {
        console.log(operands[0]);
    }
}

jansNotation([3, 4, '+']);

jansNotation([5, 3, 4, '*', '-']);

// jansNotation([7, 33, 8, '-']);

// jansNotation([15, '/']);