let klas = (function () {
    let id = 0

    class Extensible {
        constructor() {
            this.id = id++
        }

        extend(template) {
            Array.from(Object.keys(template)).forEach(k=>{
                if (typeof template[k] === "function") {
                    Extensible.prototype[k] = template[k]

                }
                else {
                    this[k] = template[k];
                }
            })

        }
    }

    return Extensible
})()

let obj1 = new klas
let obj2 = new klas
let obj3 = new klas
console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);

obj1.extend( {
  extensionMethod: function () {},
  extensionProperty: 'someString'
})

console.log(obj1.__proto__);
