function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {

      let input = document.querySelector('#inputs > textarea').value;
      const restaurants = new Map();
      let averageSalary = {};
      let parsed = JSON.parse(input);
      input = parsed.slice(0);

      for (let el of input) {

         let splitted = el.split(' - ');


         let currentRestaurant = splitted.shift();
         let workersAndTheirSalarys = splitted.shift().split(', ');

         if (!restaurants.has(currentRestaurant)) {
            restaurants.set(currentRestaurant, {});
            restaurants.get(currentRestaurant).totalSalary = 0;

            for (let el2 of workersAndTheirSalarys) {
               let [currentWorker, salary] = el2.split(' ');
               restaurants.get(currentRestaurant)[currentWorker] = Number(salary);
               restaurants.get(currentRestaurant).totalSalary += Number(salary);
            }
         } else {
            for (let el2 of workersAndTheirSalarys) {
               let [currentWorker, salary] = el2.split(' ');
               restaurants.get(currentRestaurant)[currentWorker] = Number(salary);
               restaurants.get(currentRestaurant).totalSalary += Number(salary);
            }
         }

      }

      for (let el of restaurants) {
         let currentRestaurant = el[0];
         let currentWorkers = el[1];
         let count = 0;

         for (let el2 in currentWorkers) {
            if (el2 !== 'totalSalary') {
               count++;
            }

         }

         averageSalary[currentRestaurant] = (currentWorkers['totalSalary'] / count);

      }

      let entriesAverageSalary = Object.entries(averageSalary)
         .sort((a, b) => b[1] - a[1]);

      let bestRestuarant = restaurants.get(entriesAverageSalary[0][0]);
      delete bestRestuarant.totalSalary;

      let bestWorkerSalaryEntries = Object.entries(bestRestuarant)
         .sort((a, b) => b[1] - a[1])

      let bestWorkerSalary = bestWorkerSalaryEntries[0][1];

      let theBestRestaurant = `Name: ${entriesAverageSalary[0][0]} Average Salary: ${(entriesAverageSalary[0][1]).toFixed(2)} Best Salary: ${bestWorkerSalary.toFixed(2)}`

      let allWorkersArr = [];

      for (let worker of bestWorkerSalaryEntries) {

         let currentWorker = `Name: ${worker[0]} With Salary: ${(worker[1])}`;

         allWorkersArr.push(currentWorker);
      }

      let allWorkers = allWorkersArr.join(' ');


      document.querySelector('#bestRestaurant > p').textContent = theBestRestaurant;
      document.querySelector('#workers > p').textContent = allWorkers;
   }

}
