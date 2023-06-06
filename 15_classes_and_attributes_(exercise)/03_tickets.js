function tickets (arr, command) {
    
    let outputArr = [];
    let sortedArr = [];
    
    class Ticket {
        constructor (destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    
        for (let el of arr) {
        let splitted = el.split('|');
    
        let currentArr = [];
        currentArr.push(splitted[0]);
        currentArr.push(Number(splitted[1]));
        currentArr.push(splitted[2]);
        
        sortedArr.push(currentArr);
    }
    
    if (command === 'destination') {
        sortedArr.sort((a, b) => a[0].localeCompare(b[0]));
    } else if (command === 'price') {
        sortedArr.sort((a, b) => a[1] - b[1]);
    } else if (command === 'status') {
        sortedArr.sort((a, b) => a[2].localeCompare(b[2]));
    }   
    
    for (let el of sortedArr) {
        let obj = new Ticket(el[0], el[1], el[2]);
        outputArr.push(obj);
    }
    
    return outputArr;
}

console.log(tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'));