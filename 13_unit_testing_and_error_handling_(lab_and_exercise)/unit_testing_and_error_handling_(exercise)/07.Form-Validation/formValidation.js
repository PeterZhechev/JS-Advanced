function validate() {
    let usernameInputElement = document.getElementById('username');
    let emailInputElement = document.getElementById('email');
    let passwordInputElement = document.getElementById('password');
    let confirmPasswordInputElement = document.getElementById('confirm-password');
    let isCimpanyChechElement = document.getElementById('company');
    let sumbitButtonElement = document.getElementById('submit');
    let commpanyInfoElement = document.getElementById('companyInfo');
    let companyNumberElement = document.getElementById('companyNumber');
    let divValidElement = document.getElementById('valid');

    let isUsername = false;
    let isEmail = false;
    let isPassword = false;
    let isCompanyNumber = false;
    let isCompanyNumberValidField = false;

    // let usernamePattern = /^[a-zA-Z0-9]{3,20}$/g;
    // let passwordPattern = /^[a-zA-Z0-9_]{5,15}$/g;
    // let emailPattern = /.*@.*[\.]+.*/g;
    // let companyNumberPattern = /^[0-9]{4}$/g;

    isCimpanyChechElement.addEventListener('change', checkBoxFunc);

    function checkBoxFunc(e) {
        if (e.target.checked) {
            commpanyInfoElement.style.display = 'block';
            isCompanyNumber = true;
        } else {
            commpanyInfoElement.style.display = 'none';
            isCompanyNumber = false;
        }
    }

    sumbitButtonElement.addEventListener('click', onClickSubmit);

    function onClickSubmit(e) {

        if (/^[a-zA-Z0-9]{3,20}$/.test(usernameInputElement.value)) {
            usernameInputElement.removeAttribute('style');
            isUsername = true;
        } else {
            usernameInputElement.style.borderColor = 'red';
            isUsername = false;
        }

        if (/.*@.*[\.]+.*/.test(emailInputElement.value)) {
            emailInputElement.removeAttribute('style');
            isEmail = true;
        } else {
            emailInputElement.style.borderColor = 'red';
            isEmail = false;
        }

        if (/^[a-zA-Z0-9_]{5,15}$/.test(passwordInputElement.value) && passwordInputElement.value === confirmPasswordInputElement.value) {
            passwordInputElement.removeAttribute('style');
            confirmPasswordInputElement.removeAttribute('style');
            isPassword = true;
        } else {
            passwordInputElement.style.borderColor = 'red';
            confirmPasswordInputElement.style.borderColor = 'red';
            isPassword = false;
        }

        if (isCompanyNumber) {
            if (/^[0-9]{4}$/.test(companyNumberElement.value)) {
                companyNumberElement.removeAttribute('style');
                isCompanyNumberValidField = true;
            } else {
                companyNumberElement.style.borderColor = 'red';
                isCompanyNumberValidField = false;
            }
        }


        if (isUsername && isEmail && isPassword && isCompanyNumberValidField === false) {
            divValidElement.style.display = 'none';
        }

        if (isUsername && isEmail && isPassword && isCompanyNumber === false) {
            divValidElement.style.display = 'block';
        }

        if (isUsername && isEmail && isPassword && isCompanyNumberValidField) {
            divValidElement.style.display = 'block';
        }

        if (isUsername === false || isEmail === false || isPassword === false) {
            divValidElement.style.display = 'none';
        }

        e.preventDefault();
    }
}
