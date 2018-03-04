(function solve() {

    Array.prototype.last = function () {
        return this[this.length - 1]
    }

    Array.prototype.skip = function (n) {
        return this.slice(n)
    }

    Array.prototype.take = function (n) {
        return this.slice(0,n)
    }

    Array.prototype.sum = function () {
        let sum = 0;
        this.forEach(x => sum += x)
        return sum
    }

    Array.prototype.average = function (n) {
        let sum = 0;
        this.forEach(x => sum += x)
        let average = sum / this.length
        return average
    }

})()

console.log([1, 2, 3, 4].last());
console.log([1, 2, 3, 4].skip(3));
console.log([1, 2, 3, 4].take(2));
console.log([1, 2, 3, 4].sum());
console.log([1, 2, 3, 4].average());