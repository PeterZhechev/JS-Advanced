function addItem() {

    let ulElements = document.getElementById('items');
    let inputFieldElement = document.getElementById('newItemText');

    let newLiElement = document.createElement('li');
    newLiElement.textContent = inputFieldElement.value;

    ulElements.appendChild(newLiElement);

    inputFieldElement.value = '';
}