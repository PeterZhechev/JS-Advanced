function calc() {
    let firstNum = document.getElementById('num1');
    let secondNum = document.getElementById('num2');
    let valueOfFirstNum = firstNum.value;
    let valueOfSecondNum = secondNum.value;

    let sum = Number(valueOfFirstNum) + Number(valueOfSecondNum);

    let result = document.getElementById('sum');

    result.value = sum;
}
