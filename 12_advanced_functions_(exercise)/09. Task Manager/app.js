function solve() {
    let addButtonElement = document.getElementById('add');
    let taskInputElement = document.getElementById('task');
    let descriptionInputElement = document.getElementById('description');
    let dateInputElement = document.getElementById('date');

    addButtonElement.addEventListener('click', addFunc);

    let openSectionElement = document.querySelectorAll('section')[1].querySelectorAll('div')[1];
    let inProgressSectionElement = document.querySelectorAll('section')[2].querySelectorAll('div')[1];
    let completeSectionElement = document.querySelectorAll('section')[3].querySelectorAll('div')[1];

    function addFunc(e) {
        e.preventDefault();
        if (taskInputElement.value && descriptionInputElement.value && dateInputElement.value) {

            let newArticleElement = document.createElement('article');

            let newH3Element = document.createElement('h3');
            newH3Element.textContent = `${taskInputElement.value}`;

            let newP1Element = document.createElement('p');
            newP1Element.textContent = `Description: ${descriptionInputElement.value}`;

            let newP2Element = document.createElement('p');
            newP2Element.textContent = `Due Date: ${dateInputElement.value}`;

            let newDivElement = document.createElement('div');
            newDivElement.classList = 'flex';

            let newButton1Element = document.createElement('button');
            newButton1Element.textContent = 'Start';
            newButton1Element.classList = 'green';
            newButton1Element.addEventListener('click', startButtonFunc);

            let newButton2Element = document.createElement('button');
            newButton2Element.textContent = 'Delete';
            newButton2Element.classList = 'red';
            newButton2Element.addEventListener('click', deletetButtonFunc);


            newDivElement.appendChild(newButton1Element);
            newDivElement.appendChild(newButton2Element);

            newArticleElement.appendChild(newH3Element);
            newArticleElement.appendChild(newP1Element);
            newArticleElement.appendChild(newP2Element);
            newArticleElement.appendChild(newDivElement);

            openSectionElement.appendChild(newArticleElement);

            taskInputElement.value = '';
            descriptionInputElement.value = '';
            dateInputElement.value = '';
        } else {
            return;
        }
    }

    function startButtonFunc(e) {
        e.target.parentElement.children[1].classList = 'orange';
        e.target.parentElement.children[1].textContent = 'Finish';
        e.target.parentElement.children[1].removeEventListener('click', deletetButtonFunc);
        e.target.parentElement.children[1].addEventListener('click', finishFunc);
        e.target.parentElement.children[0].classList.remove('green');
        e.target.parentElement.children[0].textContent = 'Delete';
        e.target.parentElement.children[0].classList = 'red';
        inProgressSectionElement.appendChild(e.target.parentElement.parentElement);
        e.target.parentElement.children[0].addEventListener('click', deletetButtonFunc);
    }

    function deletetButtonFunc(e) {
        e.target.parentElement.parentElement.remove();
    }

    function finishFunc(e) {
        completeSectionElement.appendChild(e.target.parentElement.parentElement);
        e.target.parentElement.remove();

    }
}