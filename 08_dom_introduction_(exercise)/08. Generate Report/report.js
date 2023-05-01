function generateReport() {
    let employeeCheck = document.querySelector('body > main > table > thead > tr > th:nth-child(1) > input[type=checkbox]').checked;
    let departmentCheck = document.querySelector('body > main > table > thead > tr > th:nth-child(2) > input[type=checkbox]').checked;
    let statusCheck = document.querySelector('body > main > table > thead > tr > th:nth-child(3) > input[type=checkbox]').checked;
    let dateHiredCheck = document.querySelector('body > main > table > thead > tr > th:nth-child(4) > input[type=checkbox]').checked;
    let benefitsCheck = document.querySelector('body > main > table > thead > tr > th:nth-child(5) > input[type=checkbox]').checked;
    let compensationCheck = document.querySelector('body > main > table > thead > tr > th:nth-child(6) > input[type=checkbox]').checked;
    let ratingCheck = document.querySelector('body > main > table > thead > tr > th:nth-child(7) > input[type=checkbox]').checked;

    let table = Array.from(document.querySelectorAll('body > main > table > tbody tr'));
    let reportObj = [];

    if (employeeCheck) {
        let employeeObj = {};
        let count = 1;
        for(let row of table) {
            console.log(document.querySelector(`body > main > table > tbody > tr:nth-child(${count}) > td:nth-child(1)`));

            count++;
        }
       
    }

    if (departmentCheck) {

    }

    if (statusCheck) {

    }

    console.log(reportObj);
}