function extractText() {

    let items = document.getElementById('items').textContent;

    let result = document.getElementById('result');

    result.value = items;
}