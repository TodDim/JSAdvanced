class Sorted {
    constructor() {
        this.array = []
        this.size = 0
    }
    add(el) {
        this.size++
        this.array.push(el)
        this.sortArr()
    }
    remove(index) {
        if (index > -1 && index < this.array.length) {
            this.array.splice(index, 1)
            this.size--
        }
    }
    get(index) {
        if (index > -1 && index < this.array.length) {
            return this.array[index]
        }
    }
    sortArr() {
        this.array.sort((a, b) => a - b)
    }
}
let arr=new Sorted()
arr.add(3)
arr.add(1)
console.log(arr);