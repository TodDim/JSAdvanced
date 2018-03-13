function solve() {
    class Melon {

        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new TypeError("Abstract class cannot be instantiated directly");
            }
            this.weight = Number(weight)
            this.melonSort = melonSort
        }
    }

    class Watermelon extends Melon {
        constructor(weight, melonSort, elementIndex) {
            super(weight, melonSort)
            this._elementIndex = this.weight * this.melonSort.length
        }

        get elementIndex() {
            return this._elementIndex
        }

        toString() {
            return `Element: ${this.constructor.name.slice(0, -5)}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }

    class Firemelon extends Melon {
        constructor(weight, melonSort, elementIndex) {
            super(weight, melonSort)
            this._elementIndex = this.weight * this.melonSort.length
        }

        get elementIndex() {
            return this._elementIndex
        }

        toString() {
            return `Element: ${this.constructor.name.slice(0, -5)}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }

    class Earthmelon extends Melon {
        constructor(weight, melonSort, elementIndex) {
            super(weight, melonSort)
            this._elementIndex = this.weight * this.melonSort.length
        }

        get elementIndex() {
            return this._elementIndex
        }

        toString() {
            return `Element: ${this.constructor.name.slice(0, -5)}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }

    class Airmelon extends Melon {
        constructor(weight, melonSort, elementIndex) {
            super(weight, melonSort)
            this._elementIndex = this.weight * this.melonSort.length
        }

        get elementIndex() {
            return this._elementIndex
        }

        toString() {
            return `Element: ${this.constructor.name.slice(0, -5)}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }

    class Melolemonmelon extends Watermelon {
        constructor(weight, melonSort) {
            super(weight, melonSort)
            this.index = 0
            this.element = this.constructor.name.slice(0, -5)
            this.morphcalls = 0
            this.element='Water'
        }

        morph() {

            this.index++
            switch (this.index - this.morphcalls * 4) {
                case 0:
                    this.element = 'Water'
                    break
                case 1:
                    this.element = 'Fire'
                    break
                case 2:
                    this.element = 'Earth'
                    break
                case 3:
                    this.element = 'Air'
                    this.morphcalls++
                    break
            }
        }
        toString() {
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }
    return {Melon,Watermelon,Airmelon,Firemelon,Earthmelon,Melolemonmelon}
}

// let obj = new Melolemonmelon()
// console.log(obj.element);

// let test = new Melon(100, "Test");
//Throws error
// let watermelon = new Watermelon(12.5, "Kingsize");
// console.log(watermelon.toString());
let m=new Melolemonmelon(150,"Melo")
console.log(m.toString());