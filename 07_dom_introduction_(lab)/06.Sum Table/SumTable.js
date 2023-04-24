function sumTable() {
    const prices = document.querySelectorAll('table tr td');
    let sum = prices[prices.length - 1];
    let total = 0;
    let index = 1;

    for (let price of prices) {
        if (index % 2 === 0) {
            total += Number(price.textContent);
        }

        index++;
    }

    sum.innerHTML = total;
}
