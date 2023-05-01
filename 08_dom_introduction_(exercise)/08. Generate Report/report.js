function generateReport() {

    let checkBoxesHead = Array.from(document.querySelector('body > main > table > thead > tr').getElementsByTagName('th'));
    let checkBoxesBody = Array.from(document.querySelector('body > main > table > tbody').getElementsByTagName('tr'));


    for (let index = 0; index < checkBoxesHead.length; index++) {
        let box = checkBoxesHead[index];

            if (box.querySelector('input').checked) {
                
                for (let el of checkBoxesBody) {
                    let currentRow = Array.from(el.getElementsByTagName('td'));
                    let currentRowText = currentRow[index].textContent;
                    console.log(currentRowText);
                }

            }

        

    }

    const outputArea = document.querySelector('#output');

}