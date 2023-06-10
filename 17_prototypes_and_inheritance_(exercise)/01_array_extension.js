(function solve() {

    Array.prototype.last = function () {
        return this[this.length - 1];
    }

    Array.prototype.skip = function (n) {
        return this.slice(n);
    }

    Array.prototype.take = function (n) {
        return this.slice(0, n);
    }

    Array.prototype.sum = function () {
        return this.reduce((acc, x) => acc += x, 0);
    }

    Array.prototype.average = function () {
        let sum = this.reduce((acc, x) => acc += x, 0);
        return sum / this.length;
    }
})();

let n = [1, 2, 3, 4, 5, 6, 7];
// console.log(n.last());
// console.log(n.skip(2));
// console.log(n.take(2));
// console.log(n.sum());
console.log(n.average());