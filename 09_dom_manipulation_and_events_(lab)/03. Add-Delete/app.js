function addItem() {
    let inputAreaElement = document.getElementById('newItemText');
    let listItemsElement = document.getElementById('items');

    let newLiElement = document.createElement('li');
    newLiElement.textContent = inputAreaElement.value;

    let deleteButtonElement = document.createElement('a');
    deleteButtonElement.setAttribute('href', '#');
    deleteButtonElement.textContent = '[Delete]';
    deleteButtonElement.addEventListener('click', e => {
        e.currentTarget.parentNode.remove();
    });

    newLiElement.appendChild(deleteButtonElement);

    listItemsElement.appendChild(newLiElement);

    inputAreaElement = document.getElementById('newItemText').value = '';
}

