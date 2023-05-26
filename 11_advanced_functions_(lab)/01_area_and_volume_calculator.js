function solve(area, vol, input) {
    let parsed = JSON.parse(input);
    let outputArr = [];

    for (const el of parsed) {
        let currentObj = {
            area: area.call(el),
            volume: vol.call(el),
        }

        outputArr.push(currentObj);
    }

    return outputArr;
}

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

console.log(solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`));