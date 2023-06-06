class Company {
    constructor() {
        this.departments = [];
        this.bestDepartments = {};
    }

    addEmployee(name, salary, position, department) {

        if (name === undefined || name === null || name === '' || salary === undefined || salary === null || salary === '' || salary < 0 || position === undefined || position === null || position === '' || department === undefined || department === null || department === '') {
            throw new Error('Invalid input!');
        } else {
            let currentObj = {
                name: name,
                salary: salary,
                position: position,
                department, department,
            }

            this.departments.push(currentObj);
            return `New employee is hired. Name: ${name}. Position: ${position}`
        }
    }

    bestDepartment() {

        for (let el of this.departments) {
            if (!this.bestDepartments.hasOwnProperty(el.department)) {
                this.bestDepartments[el.department] = {};
                this.bestDepartments[el.department]['workers'] = 1;
                this.bestDepartments[el.department]['TotalSalary'] = el.salary;
                this.bestDepartments[el.department]['avgSalary'] = el.salary;
            } else {
                this.bestDepartments[el.department]['workers']++;
                this.bestDepartments[el.department]['TotalSalary'] += el.salary;
                let avgSalary = this.bestDepartments[el.department]['TotalSalary'] / this.bestDepartments[el.department]['workers'];
                this.bestDepartments[el.department]['avgSalary'] = avgSalary;
            }
        }

        let bestAvgSalary = Number.MIN_SAFE_INTEGER;
        let bestDepartment = '';

        for (let el in this.bestDepartments) {
            let currentObj = this.bestDepartments[el];
            if (currentObj.avgSalary > bestAvgSalary) {
                bestAvgSalary = currentObj.avgSalary;
                bestDepartment = el;
            }
        }

        let bestWorkers = [];

        for (let el of this.departments) {
            if (el.department === bestDepartment) {
                let currentObj = {
                    name: el.name,
                    salary: el.salary,
                    position: el.position,
                };

                bestWorkers.push(currentObj);
            }
        }

        bestWorkers.sort((a, b) => {
            let sorted = b.salary - a.salary;

            if (sorted === 0) {
                sorted = a.name.localeCompare(b.name);
            }

            return sorted;
        })

        let formatedBestWorkers = [];

        for (let el of bestWorkers) {
            formatedBestWorkers.push(`${el.name} ${el.salary} ${el.position}`);
        }

        return `Best Department is: ${bestDepartment}\nAverage salary: ${(bestAvgSalary).toFixed(2)}\n${formatedBestWorkers.join('\n')}`
    }
}


let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
