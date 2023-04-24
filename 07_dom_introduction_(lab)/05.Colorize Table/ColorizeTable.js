function colorize() {

    let rowElements = document.querySelectorAll('table tr');

    for (let i = 1; i <= rowElements.length; i++) {
        if (i % 2 === 0) {
            rowElements[i - 1].style.backgroundColor = 'teal';
        }
    }
}

