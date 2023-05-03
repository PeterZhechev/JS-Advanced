function solve() {

    const optnBinary = document.createElement('option');
    optnBinary.textContent = 'Binary';
    optnBinary.value = 'binary';
    document.getElementById('selectMenuTo').appendChild(optnBinary);
    
    const optnHex = document.createElement('option');
    optnHex.textContent = 'Hexadecimal';
    optnHex.value = 'hexadecimal';
    document.getElementById('selectMenuTo').appendChild(optnHex);

    const resultField = document.getElementById('result');

    const menu = document.querySelector('#selectMenuTo');
    
    const btn = document.querySelector('#container > button').addEventListener("click", cnvrtFunc);

    function cnvrtFunc() {

        if (menu.value === 'binary') {

        } else if (menu.value === 'hexadecimal') {
            
        }

    }
}