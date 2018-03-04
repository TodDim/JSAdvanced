function sortedList() {
    return {
        array: [],
        add: function (el) {
            this.size++
            this.array.push(el)
            this.sortArr()

        },
        remove: function (index) {
            if (index > -1 && index < this.array.length) {
                this.array.splice(index, 1)
                this.size--
            }

        },
        get: function (index) {
            if (index > -1 && index < this.array.length) {
                return this.array[index]
            }

        },
        size: 0,
        sortArr: function () {
            this.array.sort((a, b) => a - b)

        }
    }
}

let arr = sortedList()

arr.add(3)
arr.add(1)
arr.add(4)
arr.remove(1)
arr.add(2)
console.log(arr.array);
console.log(arr.get(1));