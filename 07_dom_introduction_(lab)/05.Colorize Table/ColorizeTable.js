function colorize() {

    let rowElements = document.querySelectorAll('table tr');

    for (let i = 0; i < rowElements.length; i++) {
        if (i % 2 !== 0) {
            rowElements[i].style.backgroundColor = 'teal';
        }
    }
}

