function encodeAndDecodeMessages() {
    let encodeButtonElement = document.querySelector('#container #main div:nth-child(1) button');
    let decodeButtonElement = document.querySelector('#container #main div:nth-child(2) button');

    let encodeTextArea = document.querySelector('#container #main div:nth-child(1) textarea');
    let decodeTextArea = document.querySelector('#container #main div:nth-child(2) textarea');

    encodeButtonElement.addEventListener('click', encodeFunc);
    decodeButtonElement.addEventListener('click', decodeFunc);

    function encodeFunc() {
        let textToArr = encodeTextArea.value.split('');
        let encodedMessageArr = [];

        for (let char of textToArr) {
            let currentAsciiNum = char.charCodeAt();
            currentAsciiNum++;
            let currentEncodedChar = String.fromCharCode(currentAsciiNum);
            encodedMessageArr.push(currentEncodedChar);
        }

        let encodedMessage = encodedMessageArr.join('');
        decodeTextArea.value = encodedMessage;
        encodeTextArea.value = '';
    }

    function decodeFunc() {
        let textToArr = decodeTextArea.value.split('');
        let decodedMessageArr = [];

        for (let char of textToArr) {
            let currentAsciiNum = char.charCodeAt();
            currentAsciiNum--;
            let currentEncodedChar = String.fromCharCode(currentAsciiNum);
            decodedMessageArr.push(currentEncodedChar);
        }

        let decodedMessage = decodedMessageArr.join('');
        decodeTextArea.value = decodedMessage;
    }
}