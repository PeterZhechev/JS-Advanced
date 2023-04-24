function toggle() {

    if (document.getElementsByClassName('button')[0].textContent === 'More') {
        document.getElementsByClassName('button')[0].textContent = 'Less';
        document.getElementById('extra').style.display = 'block';
    } else if (document.getElementsByClassName('button')[0].textContent === 'Less') {
        document.getElementsByClassName('button')[0].textContent = 'More';
        document.getElementById('extra').style.display = 'none';
    }
}
