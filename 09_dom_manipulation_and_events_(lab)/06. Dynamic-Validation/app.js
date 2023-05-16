function validate() {
    let inputElement = document.getElementById('email');
    inputElement.addEventListener('change', blurFunc);

    function blurFunc() {
        emailValidator(inputElement.value);
    }

    function emailValidator(input) {
        let pattern = /[a-z]+\@[a-z]+\.[a-z]+/g;
        let matched = input.match(pattern);

        if (inputElement.value !== '') {
            if (matched) {
                inputElement.className = '';
            } else {
                inputElement.className = 'error';
            }
        }
    }
}