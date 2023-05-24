function solve() {

  let generateButton = document.querySelector('#container #exercise button:nth-child(3)');
  let buyButton = document.querySelector('#container #exercise button:nth-child(6)');

  let inputTextArea = document.querySelector('#container #exercise textarea:nth-child(2)');
  let outputTextArea = document.querySelector('#container #exercise textarea:nth-child(5)');
  let tableBodyElement = document.querySelector('#exercise > div > div > div > div > table > tbody');

  generateButton.addEventListener('click', addNewRowFunc);
  buyButton.addEventListener('click', buyFunc);

  function addNewRowFunc() {
    let parsedInput = JSON.parse(inputTextArea.value);

    for (let obj of parsedInput) {
      let newTrElement = document.createElement('tr');

      let newTd1Element = document.createElement('td');
      let newImgElement = document.createElement('img');
      newImgElement.src = obj.img;
      newTd1Element.appendChild(newImgElement);

      let newTd2Element = document.createElement('td');
      let newP1Element = document.createElement('p');
      newP1Element.textContent = obj.name;
      newTd2Element.appendChild(newP1Element);

      let newTd3Element = document.createElement('td');
      let newP2Element = document.createElement('p');
      newP2Element.textContent = obj.price;
      newTd3Element.appendChild(newP2Element);

      let newTd4Element = document.createElement('td');
      let newP3Element = document.createElement('p');
      newP3Element.textContent = obj.decFactor;
      newTd4Element.appendChild(newP3Element);

      let newTd5Element = document.createElement('td');
      let newInputElement = document.createElement('input');
      newInputElement.type = 'checkbox';
      newTd5Element.appendChild(newInputElement);

      newTrElement.appendChild(newTd1Element);
      newTrElement.appendChild(newTd2Element);
      newTrElement.appendChild(newTd3Element);
      newTrElement.appendChild(newTd4Element);
      newTrElement.appendChild(newTd5Element);

      tableBodyElement.appendChild(newTrElement);
    }
  }

  
  function buyFunc() {
    let boughtFurniture = [];
    let totalPrice = 0;
    let decorationFactor = 0;
    let count = 0;
    let checkboxElements = tableBodyElement.querySelectorAll('input');

    for (let el of checkboxElements) {
      if (el.checked) {
        let parentElement = Array.from(el.parentElement.parentElement.children);
        
        for (let i = 1; i < parentElement.length - 1; i++) {
          let currentRow = parentElement[i].children[0].textContent;
          if (i === 1) {
            boughtFurniture.push(currentRow);
          } else if (i === 2) {
            totalPrice += Number(currentRow);
          } else if (i === 3) {
            decorationFactor += Number(currentRow);
            count++;
          }

        }
      }
    }

    console.log(boughtFurniture.join(', '));
    console.log(totalPrice);
    console.log(decorationFactor / count);
    outputTextArea.value = `Bought furniture: ${boughtFurniture.join(', ')}\nTotal price: ${(totalPrice).toFixed(2)}\nAverage decoration factor: ${decorationFactor / count}`;
  }
}