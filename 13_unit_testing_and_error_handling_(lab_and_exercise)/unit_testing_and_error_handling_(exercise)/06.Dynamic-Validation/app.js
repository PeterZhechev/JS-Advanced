function validate() {
    let inputEmailElement = document.getElementById('email');
    let pattern = /[a-z]+@[a-z]+\.[a-z]+/g

    inputEmailElement.addEventListener('change', inputEmailFunc);

    function inputEmailFunc(e) {

        let matched = e.target.value.match(pattern);
        if (matched == null) {
            inputEmailElement.classList.add('error');
        } else {
            inputEmailElement.classList.remove('error');
        }
    }
}
