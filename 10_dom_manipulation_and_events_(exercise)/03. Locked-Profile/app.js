function lockedProfile() {
    let buttons = Array.from(document.querySelectorAll('#container #main .profile'));

    for (let el of buttons) {
        el.querySelector('button').addEventListener('click', showFunc);
    }

    function showFunc(e) {
        if (e.currentTarget.parentNode.querySelector('input:checked').value === 'unlock') {
            if (e.target.textContent === 'Show more') {
                e.target.previousElementSibling.style.display = 'block';
                e.target.textContent = 'Hide it';
            } else if (e.target.textContent === 'Hide it') {
                e.target.previousElementSibling.style.display = 'none';
                e.target.textContent = 'Show more';
            }
        }
    }
}