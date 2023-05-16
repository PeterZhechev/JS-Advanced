function focused() {

    let divElement = document.querySelector('div');
    let divElements = Array.from(divElement.children);
    
    for (let el of divElements) {
        let inputEl = el.children[1];
        inputEl.addEventListener('focus', focusFunc);
        inputEl.addEventListener('blur', blurFunc);

        function focusFunc(e) {
            el.className = 'focused';
        }

        function blurFunc(e) {
            el.className = '';
        }
    }
}