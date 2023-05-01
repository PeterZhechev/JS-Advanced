function generateReport() {
    let employeeCheck = document.querySelector('body > main > table > thead > tr > th:nth-child(1) > input[type=checkbox]').checked;
    let departmentCheck = document.querySelector('body > main > table > thead > tr > th:nth-child(2) > input[type=checkbox]').checked;
    let statusCheck = document.querySelector('body > main > table > thead > tr > th:nth-child(3) > input[type=checkbox]').checked;
    let dateHiredCheck = document.querySelector('body > main > table > thead > tr > th:nth-child(4) > input[type=checkbox]').checked;
    let benefitsCheck = document.querySelector('body > main > table > thead > tr > th:nth-child(5) > input[type=checkbox]').checked;
    let compensationCheck = document.querySelector('body > main > table > thead > tr > th:nth-child(6) > input[type=checkbox]').checked;
    let ratingCheck = document.querySelector('body > main > table > thead > tr > th:nth-child(7) > input[type=checkbox]').checked;

    let table = Array.from(document.querySelectorAll('body > main > table > tbody tr'));
    let reportArr = [];
    let count = 1;
    let rowsCount = 0;
    let isObj = false;

    if (employeeCheck) {
        count = 1;
        rowsCount = 0;
        if (reportArr.length === 0) {
            isObj = true;
        } else {
            isObj = false;
        }

        for (let row of table) {
            let currentEmployeeColumn = document.querySelector(`body > main > table > tbody > tr:nth-child(${count}) > td:nth-child(1)`);

            if (isObj) {
                reportArr[rowsCount] = {};
            }

            reportArr[rowsCount].employee = currentEmployeeColumn.textContent;
            count++;
            rowsCount++;
        }
    }

    if (departmentCheck) {
        count = 1;
        rowsCount = 0;
        if (reportArr.length === 0) {
            isObj = true;
        } else {
            isObj = false;
        }

        for (let row of table) {
            let currentDepartmentColumn = document.querySelector(`body > main > table > tbody > tr:nth-child(${count}) > td:nth-child(2)`);

            if (isObj) {
                reportArr[rowsCount] = {};
            }

            if (reportArr.length === 0) {
                reportArr[rowsCount] = {};
            }

            reportArr[rowsCount].department = currentDepartmentColumn.textContent;
            count++;
            rowsCount++;
        }
    }

    if (statusCheck) {

    }

    document.querySelector('#output').value = JSON.stringify(reportArr);
    console.log(JSON.stringify(reportArr));
}