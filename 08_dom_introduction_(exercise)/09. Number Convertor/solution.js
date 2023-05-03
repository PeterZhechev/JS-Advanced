function solve() {

    const optnBinary = document.createElement('option');
    optnBinary.textContent = 'Binary';
    optnBinary.value = 'binary';
    document.getElementById('selectMenuTo').appendChild(optnBinary);

    const optnHex = document.createElement('option');
    optnHex.textContent = 'Hexadecimal';
    optnHex.value = 'hexadecimal';
    document.getElementById('selectMenuTo').appendChild(optnHex);

    const menu = document.querySelector('#selectMenuTo');
    const btn = document.querySelector('#container > button').addEventListener("click", cnvrtFunc);
    const input = document.getElementById('input');
    const resultField = document.getElementById('result');

    function cnvrtFunc() {

        let inputNum = Number(input.value);

        if (menu.value === 'binary') {
            resultField.value = inputNum.toString(2);
        } else if (menu.value === 'hexadecimal') {
            resultField.value = inputNum.toString(16).toUpperCase();
        }
    }
}