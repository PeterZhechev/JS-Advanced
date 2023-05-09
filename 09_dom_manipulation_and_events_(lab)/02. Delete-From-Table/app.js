function deleteByEmail() {
    let inputEmailElement = document.getElementsByName('email')[0].value;
    let tableElements = Array.from(document.querySelector("#customers").querySelectorAll('tr td'));
    let index = 1
    let emailsInTableElements = [];

    for (let el of tableElements) {
        if (index % 2 === 0) {
            emailsInTableElements.push(el);
        }

        index++;
    }

    let isDeleted = false;

    for (let el of emailsInTableElements) {
        if (el.textContent === inputEmailElement) {
            el.parentNode.parentNode.removeChild(el.parentNode);
            document.querySelectorAll('#result')[0].textContent = 'Deleted.';
            isDeleted = true;
            break;
        }
    }

    if (isDeleted === false) {
        document.querySelectorAll('#result')[0].textContent = 'Not found.';

    }

    inputEmailElement = document.getElementsByName('email')[0].value = '';
}