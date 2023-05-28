function calculator() {
    let selectorOneElement = document.getElementById('num1');
    let selectorTwoElement = document.getElementById('num2');
    let resultFieldElement = document.getElementById('result');

    let calculate = {
        init() {
            selectorOneElement = document.getElementById('num1');
            selectorTwoElement = document.getElementById('num2');
            resultFieldElement = document.getElementById('result');
        },

        add() {
            resultFieldElement.value = Number(selectorOneElement.value) + Number(selectorTwoElement.value);
        },

        subtract() {
            resultFieldElement.value = Number(selectorOneElement.value) - Number(selectorTwoElement.value);
        },
    }

    return calculate;
}

const calculate = calculator ();
calculate.init ('#num1', '#num2', '#result');
