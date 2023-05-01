function generateReport() {

    let checkBoxesHead = Array.from(document.querySelector('body > main > table > thead > tr').getElementsByTagName('th'));
    let checkBoxesBody = Array.from(document.querySelector('body > main > table > tbody').getElementsByTagName('tr'));
    let outputArr = [];

    for (let index = 0; index < checkBoxesHead.length; index++) {
        let box = checkBoxesHead[index];

            if (box.querySelector('input').checked) {
                let columnName = box.querySelector('input').name;
                let currentObj = {};

                for (let j = 0; j < checkBoxesBody.length; j++) {
                    let currentEl = checkBoxesBody[j];
                    let currentRow = Array.from(currentEl.getElementsByTagName('td'));
                    let currentRowText = currentRow[index].textContent;
                    currentObj[columnName] = currentRowText;

                    if (!outputArr[j]) {
                        outputArr.push(currentObj);
                        currentObj = {};
                    } else {
                        outputArr[j][columnName] = currentRowText;
                    }
                }

            }

    }

    const outputArea = document.querySelector('#output');
    outputArea.value = JSON.stringify(outputArr);
}