function addItem() {
    let textInputElement = document.getElementById('newItemText');
    let valueInputElement = document.getElementById('newItemValue');

    let newOptionElement = document.createElement('option');
    newOptionElement.textContent = textInputElement.value;
    newOptionElement.value = valueInputElement.value;
    let menuElement = document.getElementById('menu');
    menuElement.appendChild(newOptionElement);

    textInputElement.value = '';
    valueInputElement.value = '';
}